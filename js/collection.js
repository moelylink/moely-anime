// ============================================================
// 1. 配置与初始化 (保持不变)
// ============================================================
const supabaseUrl = 'https://fefckqwvcvuadiixvhns.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZlZmNrcXd2Y3Z1YWRpaXh2aG5zIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzNDE5OTUsImV4cCI6MjA1MTkxNzk5NX0.-OUllwH7v2K-j4uIx7QQaV654R5Gz5_1jP4BGdkWWfg';

const rootDomainStorage = {
    getItem: (key) => {
        const name = key + "=";
        const decodedCookie = decodeURIComponent(document.cookie);
        const ca = decodedCookie.split(';');
        for(let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1);
            if (c.indexOf(name) === 0) return c.substring(name.length, c.length);
        }
        return null;
    },
    setItem: (key, value) => {
        const d = new Date();
        d.setTime(d.getTime() + (365*24*60*60*1000));
        const expires = "expires="+ d.toUTCString();
        document.cookie = `${key}=${value};${expires};domain=.moely.link;path=/;SameSite=Lax;Secure`;
    },
    removeItem: (key) => {
        document.cookie = `${key}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;domain=.moely.link;path=/;`;
    }
};

const client = (typeof supabase !== 'undefined') ? supabase.createClient(supabaseUrl, supabaseKey, {
    auth: {
        storage: rootDomainStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
    }
}) : null;

// ============================================================
// 2. UI 工具函数 (保持不变)
// ============================================================
let notificationCount = 0;
const notifications = new Set();

// 样式注入：加个id防止PJAX重复注入
if (!document.getElementById('collection-styles')) {
    const style = document.createElement('style');
    style.id = 'collection-styles';
    style.textContent = `
        .notification { position: fixed; bottom: 16px; right: 16px; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); transition: transform 0.3s cubic-bezier(0.645, 0.045, 0.355, 1); z-index: 1000; width: 300px; height: 48px; backdrop-filter: blur(10px); transform: translateX(calc(100% + 32px)); overflow: hidden; }
        .notification.show { transform: translateX(0); }
        .notification-wrapper { width: 100%; height: 100%; display: flex; align-items: center; }
        .notification-content { flex: 1; padding: 0 16px; z-index: 2; background: white; height: 100%; display: flex; align-items: center; }
        .notification-content p { margin: 0; padding: 0; font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .notification-icon { width: 48px; display: flex; align-items: center; justify-content: center; z-index: 1; height: 100%; }
        .notification-icon i { font-size: 20px; color: white; }
        .notification.error .notification-icon { background: #ff4d4f; }
        .notification.error .notification-content p { color: #cf1322; }
        .notification.success .notification-icon { background: #52c41a; }
        .notification.success .notification-content p { color: #389e0d; }
        .notification.warning .notification-icon { background: #faad14; }
        .notification.warning .notification-content p { color: #d48806; }
        
        .confirm-dialog{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.5);display:flex;align-items:center;justify-content:center;z-index:2147483647;opacity:0;visibility:hidden;transition:all .3s ease}.confirm-dialog.show{opacity:1;visibility:visible}.confirm-content{background:#fff;padding:24px;border-radius:8px;width:90%;max-width:400px;box-shadow:0 2px 10px rgba(0,0,0,.1);position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);margin:0}.confirm-icon{text-align:center;margin-bottom:16px;color:#ff4d4f}.confirm-icon i{font-size:48px}.confirm-title{font-size:18px;margin-bottom:20px;color:#333;text-align:center}.confirm-buttons{display:flex;justify-content:center;gap:12px}.confirm-btn{padding:8px 24px;border-radius:4px;border:none;cursor:pointer;font-size:14px;transition:all .3s ease;min-width:80px}.confirm-cancel{background:#f5f5f5;color:#666}.confirm-cancel:hover{background:#e8e8e8}.confirm-ok{background:#1890ff;color:#fff}.confirm-ok:hover{background:#40a9ff}@media(max-width:480px){.confirm-content{width:85%;padding:20px}.confirm-icon i{font-size:40px}.confirm-title{font-size:16px;margin-bottom:16px}.confirm-btn{padding:8px 16px;min-width:70px}}
    `;
    document.head.appendChild(style);
}

// 确保只创建一次 Dialog
let confirmDialog = document.querySelector('.confirm-dialog');
if (!confirmDialog) {
    confirmDialog = document.createElement('div');
    confirmDialog.className = 'confirm-dialog';
    confirmDialog.innerHTML = `
        <div class="confirm-content">
            <div class="confirm-icon"><i class="fas fa-exclamation-circle"></i></div>
            <div class="confirm-title"></div>
            <div class="confirm-buttons">
                <button class="confirm-btn confirm-cancel">取消</button>
                <button class="confirm-btn confirm-ok">确定</button>
            </div>
        </div>
    `;
    document.body.appendChild(confirmDialog);
}

function showConfirmDialog(title, callback, iconClass = "fa-exclamation-circle") {
    confirmDialog.querySelector('.confirm-title').textContent = title;
    confirmDialog.querySelector('.confirm-icon i').className = `fas ${iconClass}`; 
    confirmDialog.classList.add('show');
    
    const okBtn = confirmDialog.querySelector('.confirm-ok');
    const cancelBtn = confirmDialog.querySelector('.confirm-cancel');
    
    // 克隆节点以移除旧事件
    const newOkBtn = okBtn.cloneNode(true);
    const newCancelBtn = cancelBtn.cloneNode(true);
    okBtn.parentNode.replaceChild(newOkBtn, okBtn);
    cancelBtn.parentNode.replaceChild(newCancelBtn, cancelBtn);

    newOkBtn.onclick = () => { hideConfirmDialog(); if (callback) callback(true); };
    newCancelBtn.onclick = () => { hideConfirmDialog(); if (callback) callback(false); };
}

function hideConfirmDialog() {
    confirmDialog.classList.remove('show');
}

function showMessage(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    const iconClass = type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-times-circle' : 'fa-exclamation-triangle';
    notification.innerHTML = `<div class="notification-wrapper"><div class="notification-icon"><i class="fas ${iconClass}"></i></div><div class="notification-content"><p>${message}</p></div></div>`;
    document.body.appendChild(notification);
    notifications.add(notification);
    updateNotificationsPosition();
    setTimeout(() => notification.classList.add('show'), 10);
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notifications.delete(notification);
            notification.remove();
            updateNotificationsPosition();
        }, 300);
    }, 3000);
}

function updateNotificationsPosition() {
    const notificationsArray = Array.from(notifications);
    for (let i = notificationsArray.length - 1; i >= 0; i--) {
        const notification = notificationsArray[i];
        const offset = 16 + (notificationsArray.length - 1 - i) * 60;
        notification.style.transition = 'all 0.3s ease-in-out';
        notification.style.bottom = `${offset}px`;
    }
}

// ============================================================
// 3. 核心业务逻辑
// ============================================================

async function getUserId() {
    if (!client) return null;
    const { data: { session }, error } = await client.auth.getSession();
    if (error || !session) return null;
    return session.user.id;
}

async function checkIsCollected(url, userId) {
    if (!client) return false;
    const { data: favorites, error } = await client
      .from("anime_favorites")
      .select("id")
      .eq("user_id", userId)
      .eq("url", url);
    if (error) { console.error("查询出错:", error.message); return false; }
    return favorites && favorites.length > 0;
}

function setUICollected() {
    const btn = document.getElementById('btn-add-collection');
    const icon = document.getElementById('collection-icon');
    const text = document.getElementById('collection-text');
    if(btn) btn.classList.add('collected');
    if(icon) { icon.classList.remove('far'); icon.classList.add('fas'); }
    if(text) text.innerText = "已收藏";
}

async function addToCollection(e) {
    // 阻止事件冒泡和默认行为
    e.preventDefault(); 
    
    const btn = document.getElementById('btn-add-collection');
    const text = document.getElementById('collection-text');
    
    if (text.innerText === "已收藏") {
        showMessage('您已经收藏过这篇文章了！', 'warning');
        return;
    }
    if (text.innerText === "请稍候…") return;

    const originalText = text.innerText;
    text.innerText = "请稍候…";

    const userId = await getUserId();
    if (!userId) {
        showConfirmDialog('请先登录以使用收藏功能!', (confirmed) => {
            if (confirmed) { 
                window.location.href = 'https://user.moely.link/login/?redirect=' + window.location.href; 
                text.innerText = originalText;
            } else { 
                showMessage('用户未登录！', 'warning'); 
                text.innerText = "请先登录"; 
            }
        }, "fa-arrow-right-to-bracket");
        return;
    }

    const postUrl = btn.getAttribute('data-post-id');
    const postTitle = document.title.split(' | ')[0];

    const isCollected = await checkIsCollected(postUrl, userId);
    if (isCollected) {
        setUICollected();
        showMessage('您之前已经收藏过了！', 'success');
        return;
    }

    try {
        const { error } = await client
            .from('anime_favorites')
            .insert([{ user_id: userId, url: postUrl, title: postTitle, created_at: new Date().toISOString() }]);

        if (error) {
            console.error(error);
            text.innerText = "收藏失败";
            showConfirmDialog('添加收藏失败，请重试', () => { text.innerText = "收藏本文"; }, "fa-exclamation-circle");
        } else {
            setUICollected();
            showMessage('已添加到收藏！', 'success');
        }
    } catch (error) {
        console.error('Error:', error);
        showConfirmDialog('发生系统错误，请重试', () => { text.innerText = "收藏本文"; }, "fa-bug");
    }
}

// ============================================================
// 4. 初始化与 PJAX 适配
// ============================================================

function initCollection() {
    const btn = document.getElementById('btn-add-collection');
    // 如果当前页面没有收藏按钮，直接退出
    if (!btn) return;

    // 先解绑，防止多次绑定导致点击一次触发多次
    btn.removeEventListener('click', addToCollection);
    // 再绑定
    btn.addEventListener('click', addToCollection);
}

// 1. 首次加载 (强制运行)
document.addEventListener('DOMContentLoaded', initCollection);

// 2. PJAX 完成后加载 (适配常见 Hexo 主题的 PJAX 事件)
document.addEventListener('pjax:complete', initCollection);
document.addEventListener('pjax:success', initCollection); // 兼容部分主题
