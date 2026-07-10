var e=null,t=null,n=[],r=null,i=`pagefind`,a=1,o=40,s=null;function c(e){return e.replace(/([\u3400-\u9FFF])\s+([\u3400-\u9FFF])/g,`$1$2`).trim()}function l(e){if(!e)return!1;let t=e.replace(/\s+/g,``);return/[\u3400-\u9FFF]{2,}/.test(t)}async function u(){if(r)return r;let e=await fetch(`/anime_index.json`);if(!e.ok)throw Error(`Failed to load anime index: ${e.status}`);return r=await e.json(),r}function d(e){return String(e.search_text||[e.title,e.orig,e.director,e.studio,...e.tags||[]].filter(Boolean).join(` `)).toLowerCase()}function f(e){let t=Number(e.score||0);switch(x.score){case`8-10`:return t>=8&&t<=10;case`7-8`:return t>=7&&t<8;case`6-7`:return t>=6&&t<7;case`0-6`:return t<6;default:return!0}}function p(e){return x.year===`all`||String(e.date||``).startsWith(x.year)}function m(e){return x.tag===`all`||(e.tags||[]).includes(x.tag)}function h(e,t){return x.sort===`score_desc`?Number(t.score||0)-Number(e.score||0)||g(e,t):x.sort===`date_desc`?String(t.date||``).localeCompare(String(e.date||``))||g(e,t):x.sort===`date_asc`?String(e.date||``).localeCompare(String(t.date||``))||g(e,t):x.sort===`title_asc`?String(e.title||``).localeCompare(String(t.title||``),`zh-CN`)||g(e,t):_(e,t)}function g(e,t){return Number(e.rank||999999)-Number(t.rank||999999)||Number(t.score||0)-Number(e.score||0)||Number(e.id||0)-Number(t.id||0)}function _(e,t){let n=x.search,r=e=>{let t=String(e.title||``).toLowerCase(),r=String(e.orig||``).toLowerCase(),i=(e.tags||[]).join(` `).toLowerCase();return t===n?0:t.startsWith(n)?1:t.includes(n)?2:r.includes(n)?3:i.includes(n)?4:5};return r(e)-r(t)||g(e,t)}async function v(e){n=(await u()).filter(t=>d(t).includes(e)).filter(f).filter(p).filter(m).sort(h)}function y(e){return e.map(e=>`
        <a href="/bangumi/${e.id}/" class="anime-card glass glass-hover">
          <div class="cover-wrapper">
            ${e.cover?`<img src="${e.cover}" alt="${e.title}" loading="lazy" class="cover-img" />
                 <div class="cover-placeholder" style="display: none;">无封面</div>`:`<div class="cover-placeholder">无封面</div>`}
            <div class="score-badge score-${e.score>=8?`high`:e.score>=7?`mid`:`low`}">
              <i class="fa-solid fa-star"></i> ${Number(e.score||0).toFixed(1)}
            </div>
          </div>
          <div class="card-info">
            <h3 class="card-title" title="${e.title}">${e.title}</h3>
            <div class="card-meta">
              <span class="meta-item"><i class="fa-solid fa-calendar-days"></i> ${e.date||`未知`}</span>
              ${e.studio?`<span class="meta-item"><i class="fa-solid fa-palette"></i> ${e.studio}</span>`:``}
            </div>
            <div class="card-tags">
              ${(e.tags||[]).slice(0,3).map(e=>`<span class="tag-pill">${e}</span>`).join(``)}
            </div>
          </div>
        </a>
      `).join(``)}function b(e){if(!e)return``;let t=e.replace(/[\u200B-\u200D\uFEFF]/g,``),n={獨:`独`,搖:`摇`,滾:`滚`,畫:`画`,製:`制`,劇:`剧`,場:`场`,戰:`战`,鬥:`斗`,無:`无`,樂:`乐`,擊:`击`,進:`进`,雙:`双`,隻:`只`,愛:`爱`,戀:`恋`,風:`风`,雲:`云`,門:`门`,東:`东`,極:`极`,國:`国`,體:`体`,開:`开`,關:`关`,萬:`万`,與:`与`,實:`实`,麗:`丽`,總:`总`,編:`编`,鐵:`铁`,鋼:`钢`,彈:`弹`,錄:`录`,薦:`荐`,熱:`热`,時:`时`,間:`间`,貓:`猫`,殺:`杀`,誰:`谁`,藥:`药`,藝:`艺`,聽:`听`,覽:`览`,觀:`观`,覺:`觉`,譯:`译`,議:`议`,讀:`读`,讓:`让`,讚:`赞`,貝:`贝`,負:`负`,貢:`贡`,財:`财`,責:`责`,貨:`货`,質:`质`,購:`购`,費:`费`,贈:`赠`,賽:`赛`,贏:`赢`,趨:`趋`,躍:`跃`,車:`车`,軌:`轨`,軍:`军`,輪:`轮`,輸:`输`,轄:`辖`,轉:`转`,轟:`轰`,驚:`惊`,髮:`发`,鬧:`闹`,魔:`魔`,魚:`鱼`,鳥:`鸟`,鳴:`鸣`,鶴:`鹤`,鷗:`鸥`,鷹:`鹰`,鸞:`鸾`,點:`点`,辦:`办`,蘇:`苏`,葉:`叶`,薩:`萨`,藍:`蓝`,簡:`简`,繁:`繁`,網:`网`,頁:`页`,尋:`寻`,類:`类`,樣:`样`,說:`说`,話:`话`,認:`认`,真:`真`,機:`机`,動:`动`,艦:`舰`,長:`长`,爭:`争`,線:`线`,結:`结`,約:`约`,給:`给`,統:`统`,絲:`丝`,綠:`绿`,練:`练`,緯:`纬`,績:`绩`,緒:`绪`,續:`续`,綏:`绥`,經:`经`,綜:`综`,縉:`缙`,綁:`绑`,絨:`绒`,繞:`绕`,繪:`绘`,絢:`绚`,降:`降`,隊:`队`,陽:`阳`,陰:`阴`,陣:`阵`,除:`除`,陪:`陪`,陳:`陈`,陵:`陵`,陶:`陶`,陷:`陷`,陸:`陆`,險:`险`,隆:`隆`,隱:`隐`,離:`离`,難:`难`,雁:`雁`,雅:`雅`,雄:`雄`,夢:`梦`,圓:`圆`,氣:`气`,強:`强`,鄉:`乡`,憂:`忧`,傷:`伤`,鬱:`郁`,靈:`灵`,響:`响`,影:`影`,聲:`声`,視:`视`,頻:`频`,課:`课`,題:`题`,審:`审`,美:`美`,義:`义`,寶:`宝`,單:`单`,復:`复`,複:`复`,寧:`宁`,靜:`静`,願:`愿`,望:`望`,滅:`灭`,滿:`满`,漢:`汉`,語:`语`,華:`华`,豐:`丰`,富:`富`,春:`春`,秋:`秋`,冬:`冬`,夏:`夏`,歲:`岁`,歷:`历`,史:`史`,歐:`欧`,亞:`亚`,洲:`洲`,際:`际`,育:`育`,龍:`龙`,鳳:`凤`,獸:`兽`,騎:`骑`,士:`士`,聖:`圣`,劍:`剑`,傳:`传`,奇:`奇`,談:`谈`,討:`讨`,論:`论`,會:`会`,員:`员`,區:`区`,發:`发`,表:`表`,選:`选`,擇:`择`,優:`优`,秀:`秀`,限:`限`,終:`终`,始:`始`};return c(t.split(``).map(e=>n[e]||e).join(``))}var x={search:``,score:`all`,year:`all`,tag:`all`,sort:`rank`},S=document.getElementById(`search-wrapper`),C=document.getElementById(`search-tags`),w=document.getElementById(`search-input`),T=document.getElementById(`search-clear-btn`),E=document.getElementById(`sort-select`),D=document.getElementById(`score-select`),O=document.getElementById(`year-select`),k=document.getElementById(`results-count`),A=document.getElementById(`anime-grid`),j=document.getElementById(`prev-page`),M=document.getElementById(`next-page`),N=document.getElementById(`page-numbers`),P=document.getElementById(`pagination-controls`);async function F(){try{e=await Function(`return import("/pagefind/pagefind.js")`)(),console.log(`Pagefind static index loaded successfully.`),await e.options({noWorker:!0,ranking:{metaWeights:{title:5,orig:4,director:3,studio:3,tags:2}}})}catch{console.warn(`Pagefind not available.`),A.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-triangle-exclamation"></i></span>
          <p class="empty-title">未检测到 Pagefind 静态索引</p>
          <p class="empty-desc">如果是本地开发环境，请先运行 <code>npm run build:index</code> 生成检索索引；如果是生产环境，请重新构建部署。</p>
        </div>
      `;return}I(),H(),await U(!0)}function I(){let e=new URLSearchParams(window.location.search);e.has(`q`)&&(x.search=b(e.get(`q`).trim().toLowerCase())),e.has(`tag`)&&(x.tag=e.get(`tag`)),e.has(`score`)&&(x.score=e.get(`score`)),e.has(`year`)&&(x.year=e.get(`year`)),e.has(`sort`)&&(x.sort=e.get(`sort`)),L()}function L(){w&&(w.value=x.search,T.style.display=x.search?`block`:`none`),E&&(E.value=x.sort),D&&(D.value=x.score),O&&(O.value=x.year),document.querySelectorAll(`[data-filter-type="tag"]`).forEach(e=>{let t=e;e.classList.toggle(`active`,t.dataset.value===x.tag)}),R()}function R(){if(!C)return;C.innerHTML=``,x.score!==`all`&&z(`score`,`评分：${D.options[D.selectedIndex]?.text||x.score}`),x.year!==`all`&&z(`year`,`年份：${x.year}年`),x.tag!==`all`&&z(`tag`,`标签：${x.tag}`);let e=x.score!==`all`||x.year!==`all`||x.tag!==`all`;w&&(e?w.setAttribute(`placeholder`,`搜索更多...`):w.setAttribute(`placeholder`,`输入番剧名称、导演、制作公司、标签以搜索...`))}function z(e,t){let n=document.createElement(`span`);n.className=`search-tag`;let r=document.createElement(`span`);r.textContent=t,n.appendChild(r);let i=document.createElement(`span`);i.className=`search-tag-remove`,i.innerHTML=`&times;`,i.addEventListener(`click`,async t=>{t.stopPropagation(),await B(e)}),n.appendChild(i),C.appendChild(n)}async function B(e){s&&clearTimeout(s),e===`score`?(x.score=`all`,D&&(D.value=`all`)):e===`year`?(x.year=`all`,O&&(O.value=`all`)):e===`tag`&&(x.tag=`all`,document.querySelectorAll(`[data-filter-type="tag"]`).forEach(e=>{let t=e;t.classList.toggle(`active`,t.dataset.value===`all`)})),a=1,R(),await U()}function V(){let e=new URLSearchParams;x.search&&e.set(`q`,x.search),x.tag!==`all`&&e.set(`tag`,x.tag),x.score!==`all`&&e.set(`score`,x.score),x.year!==`all`&&e.set(`year`,x.year),x.sort!==`rank`&&e.set(`sort`,x.sort);let t=e.toString(),n=window.location.pathname+(t?`?`+t:``);window.history.replaceState({path:n},``,n)}function H(){S&&w&&S.addEventListener(`click`,e=>{let t=e.target;t!==w&&!t.closest(`.search-tag`)&&!t.closest(`#search-clear-btn`)&&w.focus()}),w.addEventListener(`input`,e=>{let t=e.target;x.search=b(t.value.trim().toLowerCase()),T.style.display=x.search?`block`:`none`,a=1,s&&clearTimeout(s),s=setTimeout(async()=>{await U()},500)}),w.addEventListener(`keydown`,async e=>{if(e.key===`Enter`){s&&clearTimeout(s);let t=e.target;x.search=b(t.value.trim().toLowerCase()),a=1,await U(),w.blur()}}),T.addEventListener(`click`,async()=>{s&&clearTimeout(s),w.value=``,x.search=``,T.style.display=`none`,a=1,await U(),w.focus()}),E.addEventListener(`change`,async e=>{s&&clearTimeout(s),x.sort=e.target.value,a=1,await U()}),O.addEventListener(`change`,async e=>{s&&clearTimeout(s),x.year=e.target.value,a=1,R(),await U()}),D.addEventListener(`change`,async e=>{s&&clearTimeout(s),x.score=e.target.value,a=1,R(),await U()}),document.querySelectorAll(`[data-filter-type="tag"]`).forEach(e=>{e.addEventListener(`click`,async()=>{s&&clearTimeout(s);let t=e;document.querySelectorAll(`[data-filter-type="tag"]`).forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),x.tag=t.dataset.value,a=1,R(),await U()})}),j.addEventListener(`click`,async()=>{a>1&&(a--,await q(),window.scrollTo({top:A.offsetTop-120,behavior:`smooth`}))}),M.addEventListener(`click`,async()=>{let e=i===`local`?n.length:t?t.results.length:0,r=Math.ceil(e/o);a<r&&(a++,await q(),window.scrollTo({top:A.offsetTop-120,behavior:`smooth`}))})}async function U(e=!1){e||V(),await W()}async function W(){A.innerHTML=`
      <div class="loading-state">
        <i class="fa-solid fa-circle-notch fa-spin"></i> 正在检索数据...
      </div>
    `,P.style.display=`none`;let r={};x.score!==`all`&&(r.score=x.score),x.year!==`all`&&(r.year=x.year),x.tag!==`all`&&(r.tag=x.tag);let o=x.search||null,s={};x.sort===`rank`?o||(s.rank=`asc`):x.sort===`score_desc`?s.score=`desc`:x.sort===`date_desc`?s.date=`desc`:x.sort===`date_asc`?s.date=`asc`:x.sort===`title_asc`&&(s.title=`asc`);try{if(l(o)){i=`local`,t=null,await v(o),k.textContent=n.length.toString(),a=1,await K();return}i=`pagefind`,n=[],t=await e.search(o,{filters:r,sort:s}),k.textContent=t.results.length.toString(),a=1,await G()}catch(e){console.error(`Pagefind search execution failed:`,e),A.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-triangle-exclamation"></i></span>
          <p class="empty-title">检索发生错误</p>
          <p class="empty-desc">检索组件执行出错，请刷新重试。</p>
        </div>
      `}}async function G(){if(!t)return;let e=t.results.length,n=Math.ceil(e/o)||1;a>n&&(a=n),a<1&&(a=1);let r=(a-1)*o,i=r+o,s=t.results.slice(r,i);if(s.length===0){A.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-folder-open"></i></span>
          <p class="empty-title">无检索结果</p>
          <p class="empty-desc">没有找到符合当前过滤条件的番剧，请尝试更换关键词或重置筛选。</p>
        </div>
      `,P.style.display=`none`;return}A.innerHTML=`
      <div class="loading-state">
        <i class="fa-solid fa-circle-notch fa-spin"></i> 正在加载页面数据...
      </div>
    `;try{A.innerHTML=(await Promise.allSettled(s.map(e=>e.data()))).filter(e=>e.status===`fulfilled`).map(e=>{let t=e.value.meta;return{id:parseInt(t.id),title:t.title,orig:t.orig,cover:t.cover,score:parseFloat(t.score||`0`),date:t.date,studio:t.studio,tags:t.tags?t.tags.split(`,`):[]}}).map(e=>`
        <a href="/bangumi/${e.id}/" class="anime-card glass glass-hover">
          <div class="cover-wrapper">
            ${e.cover?`<img src="${e.cover}" alt="${e.title}" loading="lazy" class="cover-img" />
                 <div class="cover-placeholder" style="display: none;">无封面</div>`:`<div class="cover-placeholder">无封面</div>`}
            <div class="score-badge score-${e.score>=8?`high`:e.score>=7?`mid`:`low`}">
              <i class="fa-solid fa-star"></i> ${e.score.toFixed(1)}
            </div>
          </div>
          <div class="card-info">
            <h3 class="card-title" title="${e.title}">${e.title}</h3>
            <div class="card-meta">
              <span class="meta-item"><i class="fa-solid fa-calendar-days"></i> ${e.date||`未知`}</span>
              ${e.studio?`<span class="meta-item"><i class="fa-solid fa-palette"></i> ${e.studio}</span>`:``}
            </div>
            <div class="card-tags">
              ${e.tags.slice(0,3).map(e=>`<span class="tag-pill">${e}</span>`).join(``)}
            </div>
          </div>
        </a>
      `).join(``),P.style.display=n>1?`flex`:`none`,J(n)}catch(e){console.error(`Failed to render Pagefind results:`,e),A.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-triangle-exclamation"></i></span>
          <p class="empty-title">加载页面数据失败</p>
        </div>
      `}}async function K(){let e=n.length,t=Math.ceil(e/o)||1;a>t&&(a=t),a<1&&(a=1);let r=(a-1)*o,i=r+o,s=n.slice(r,i);if(s.length===0){A.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-folder-open"></i></span>
          <p class="empty-title">无检索结果</p>
          <p class="empty-desc">没有找到符合当前过滤条件的番剧，请尝试更换关键词或重置筛选。</p>
        </div>
      `,P.style.display=`none`;return}A.innerHTML=y(s),P.style.display=t>1?`flex`:`none`,J(t)}async function q(){i===`local`?await K():await G()}function J(e){j.classList.toggle(`disabled`,a===1),M.classList.toggle(`disabled`,a===e);let t=``,n=Math.max(1,a-2),r=Math.min(e,n+5-1);r-n<4&&(n=Math.max(1,r-5+1)),n>1&&(t+=`<button class="page-num" data-page="1">1</button>`,n>2&&(t+=`<span class="page-dots">...</span>`));for(let e=n;e<=r;e++)t+=`
        <button class="page-num ${e===a?`active`:``}" data-page="${e}">
          ${e}
        </button>
      `;r<e&&(r<e-1&&(t+=`<span class="page-dots">...</span>`),t+=`<button class="page-num" data-page="${e}">${e}</button>`),N.innerHTML=t,document.querySelectorAll(`.page-num`).forEach(e=>{e.addEventListener(`click`,async e=>{let t=e.target;a=parseInt(t.dataset.page),await q(),window.scrollTo({top:A.offsetTop-120,behavior:`smooth`})})})}F();