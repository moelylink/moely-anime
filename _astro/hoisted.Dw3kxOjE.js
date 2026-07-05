import"./hoisted.DbKgBFMJ.js";let b=null,p=null,h=[],S=null,$="pagefind",r=1;const m=40;let l=null;function q(e){return e.replace(/([\u3400-\u9FFF])\s+([\u3400-\u9FFF])/g,"$1$2").trim()}function D(e){if(!e)return!1;const t=e.replace(/\s+/g,"");return/[\u3400-\u9FFF]{2,}/.test(t)}async function U(){if(S)return S;const e=await fetch("/anime_index.json");if(!e.ok)throw new Error(`Failed to load anime index: ${e.status}`);return S=await e.json(),S}function W(e){return String(e.search_text||[e.title,e.orig,e.director,e.studio,...e.tags||[]].filter(Boolean).join(" ")).toLowerCase()}function G(e){const t=Number(e.score||0);switch(a.score){case"8-10":return t>=8&&t<=10;case"7-8":return t>=7&&t<8;case"6-7":return t>=6&&t<7;case"0-6":return t<6;default:return!0}}function z(e){return a.year==="all"?!0:String(e.date||"").startsWith(a.year)}function Q(e){return a.tag==="all"?!0:(e.tags||[]).includes(a.tag)}function O(e,t){return a.sort==="score_desc"?Number(t.score||0)-Number(e.score||0)||w(e,t):a.sort==="date_desc"?String(t.date||"").localeCompare(String(e.date||""))||w(e,t):a.sort==="date_asc"?String(e.date||"").localeCompare(String(t.date||""))||w(e,t):a.sort==="title_asc"?String(e.title||"").localeCompare(String(t.title||""),"zh-CN")||w(e,t):V(e,t)}function w(e,t){const s=Number(e.rank||999999),n=Number(t.rank||999999);return s-n||Number(t.score||0)-Number(e.score||0)||Number(e.id||0)-Number(t.id||0)}function V(e,t){const s=a.search,n=i=>{const o=String(i.title||"").toLowerCase(),v=String(i.orig||"").toLowerCase(),c=(i.tags||[]).join(" ").toLowerCase();return o===s?0:o.startsWith(s)?1:o.includes(s)?2:v.includes(s)?3:c.includes(s)?4:5};return n(e)-n(t)||w(e,t)}async function Y(e){h=(await U()).filter(s=>W(s).includes(e)).filter(G).filter(z).filter(Q).sort(O)}function J(e){return e.map(t=>`
        <a href="/bangumi/${t.id}/" class="anime-card glass glass-hover">
          <div class="cover-wrapper">
            ${t.cover?`<img src="${t.cover}" alt="${t.title}" loading="lazy" class="cover-img" />
                 <div class="cover-placeholder" style="display: none;">无封面</div>`:'<div class="cover-placeholder">无封面</div>'}
            <div class="score-badge score-${t.score>=8?"high":t.score>=7?"mid":"low"}">
              <i class="fa-solid fa-star"></i> ${Number(t.score||0).toFixed(1)}
            </div>
          </div>
          <div class="card-info">
            <h3 class="card-title" title="${t.title}">${t.title}</h3>
            <div class="card-meta">
              <span class="meta-item"><i class="fa-solid fa-calendar-days"></i> ${t.date||"未知"}</span>
              ${t.studio?`<span class="meta-item"><i class="fa-solid fa-palette"></i> ${t.studio}</span>`:""}
            </div>
            <div class="card-tags">
              ${(t.tags||[]).slice(0,3).map(s=>`<span class="tag-pill">${s}</span>`).join("")}
            </div>
          </div>
        </a>
      `).join("")}function k(e){if(!e)return"";const t=e.replace(/[\u200B-\u200D\uFEFF]/g,""),s={獨:"独",搖:"摇",滾:"滚",畫:"画",製:"制",劇:"剧",場:"场",戰:"战",鬥:"斗",無:"无",樂:"乐",擊:"击",進:"进",雙:"双",隻:"只",愛:"爱",戀:"恋",風:"风",雲:"云",門:"门",東:"东",極:"极",國:"国",體:"体",開:"开",關:"关",萬:"万",與:"与",實:"实",麗:"丽",總:"总",編:"编",鐵:"铁",鋼:"钢",彈:"弹",錄:"录",薦:"荐",熱:"热",時:"时",間:"间",貓:"猫",殺:"杀",誰:"谁",藥:"药",藝:"艺",聽:"听",覽:"览",觀:"观",覺:"觉",譯:"译",議:"议",讀:"读",讓:"让",讚:"赞",貝:"贝",負:"负",貢:"贡",財:"财",責:"责",貨:"货",質:"质",購:"购",費:"费",贈:"赠",賽:"赛",贏:"赢",趨:"趋",躍:"跃",車:"车",軌:"轨",軍:"军",輪:"轮",輸:"输",轄:"辖",轉:"转",轟:"轰",驚:"惊",髮:"发",鬧:"闹",魔:"魔",魚:"鱼",鳥:"鸟",鳴:"鸣",鶴:"鹤",鷗:"鸥",鷹:"鹰",鸞:"鸾",點:"点",辦:"办",蘇:"苏",葉:"叶",薩:"萨",藍:"蓝",簡:"简",繁:"繁",網:"网",頁:"页",尋:"寻",類:"类",樣:"样",說:"说",話:"话",認:"认",真:"真",機:"机",動:"动",艦:"舰",長:"长",爭:"争",線:"线",結:"结",約:"约",給:"给",統:"统",絲:"丝",綠:"绿",練:"练",緯:"纬",績:"绩",緒:"绪",續:"续",綏:"绥",經:"经",綜:"综",縉:"缙",綁:"绑",絨:"绒",繞:"绕",繪:"绘",絢:"绚",降:"降",隊:"队",陽:"阳",陰:"阴",陣:"阵",除:"除",陪:"陪",陳:"陈",陵:"陵",陶:"陶",陷:"陷",陸:"陆",險:"险",隆:"隆",隱:"隐",離:"离",難:"难",雁:"雁",雅:"雅",雄:"雄",夢:"梦",圓:"圆",氣:"气",強:"强",鄉:"乡",憂:"忧",傷:"伤",鬱:"郁",靈:"灵",響:"响",影:"影",聲:"声",視:"视",頻:"频",課:"课",題:"题",審:"审",美:"美",義:"义",寶:"宝",單:"单",復:"复",複:"复",寧:"宁",靜:"静",願:"愿",望:"望",滅:"灭",滿:"满",漢:"汉",語:"语",華:"华",豐:"丰",富:"富",春:"春",秋:"秋",冬:"冬",夏:"夏",歲:"岁",歷:"历",史:"史",歐:"欧",亞:"亚",洲:"洲",際:"际",育:"育",龍:"龙",鳳:"凤",獸:"兽",騎:"骑",士:"士",聖:"圣",劍:"剑",傳:"传",奇:"奇",談:"谈",討:"讨",論:"论",會:"会",員:"员",區:"区",發:"发",表:"表",選:"选",擇:"择",優:"优",秀:"秀",限:"限",終:"终",始:"始"};return q(t.split("").map(n=>s[n]||n).join(""))}const a={search:"",score:"all",year:"all",tag:"all",sort:"rank"},P=document.getElementById("search-wrapper"),C=document.getElementById("search-tags"),d=document.getElementById("search-input"),T=document.getElementById("search-clear-btn"),F=document.getElementById("sort-select"),y=document.getElementById("score-select"),x=document.getElementById("year-select"),N=document.getElementById("results-count"),u=document.getElementById("anime-grid"),H=document.getElementById("prev-page"),j=document.getElementById("next-page"),K=document.getElementById("page-numbers"),E=document.getElementById("pagination-controls");async function X(){try{b=await new Function('return import("/pagefind/pagefind.js")')(),console.log("Pagefind static index loaded successfully."),await b.options({noWorker:!0,ranking:{metaWeights:{title:5,orig:4,director:3,studio:3,tags:2}}})}catch{console.warn("Pagefind not available."),u.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-triangle-exclamation"></i></span>
          <p class="empty-title">未检测到 Pagefind 静态索引</p>
          <p class="empty-desc">如果是本地开发环境，请先运行 <code>npm run build:index</code> 生成检索索引；如果是生产环境，请重新构建部署。</p>
        </div>
      `;return}Z(),se(),await f(!0)}function Z(){const e=new URLSearchParams(window.location.search);e.has("q")&&(a.search=k(e.get("q").trim().toLowerCase())),e.has("tag")&&(a.tag=e.get("tag")),e.has("score")&&(a.score=e.get("score")),e.has("year")&&(a.year=e.get("year")),e.has("sort")&&(a.sort=e.get("sort")),ee()}function ee(){d&&(d.value=a.search,T.style.display=a.search?"block":"none"),F&&(F.value=a.sort),y&&(y.value=a.score),x&&(x.value=a.year),document.querySelectorAll('[data-filter-type="tag"]').forEach(e=>{const t=e;e.classList.toggle("active",t.dataset.value===a.tag)}),L()}function L(){if(!C)return;if(C.innerHTML="",a.score!=="all"){const t=y.options[y.selectedIndex]?.text||a.score;I("score",`评分：${t}`)}a.year!=="all"&&I("year",`年份：${a.year}年`),a.tag!=="all"&&I("tag",`标签：${a.tag}`);const e=a.score!=="all"||a.year!=="all"||a.tag!=="all";d&&(e?d.setAttribute("placeholder","搜索更多..."):d.setAttribute("placeholder","输入番剧名称、导演、制作公司、标签以搜索..."))}function I(e,t){const s=document.createElement("span");s.className="search-tag";const n=document.createElement("span");n.textContent=t,s.appendChild(n);const i=document.createElement("span");i.className="search-tag-remove",i.innerHTML="&times;",i.addEventListener("click",async o=>{o.stopPropagation(),await te(e)}),s.appendChild(i),C.appendChild(s)}async function te(e){l&&clearTimeout(l),e==="score"?(a.score="all",y&&(y.value="all")):e==="year"?(a.year="all",x&&(x.value="all")):e==="tag"&&(a.tag="all",document.querySelectorAll('[data-filter-type="tag"]').forEach(t=>{const s=t;s.classList.toggle("active",s.dataset.value==="all")})),r=1,L(),await f()}function ae(){const e=new URLSearchParams;a.search&&e.set("q",a.search),a.tag!=="all"&&e.set("tag",a.tag),a.score!=="all"&&e.set("score",a.score),a.year!=="all"&&e.set("year",a.year),a.sort!=="rank"&&e.set("sort",a.sort);const t=e.toString(),s=window.location.pathname+(t?"?"+t:"");window.history.replaceState({path:s},"",s)}function se(){P&&d&&P.addEventListener("click",e=>{const t=e.target;t!==d&&!t.closest(".search-tag")&&!t.closest("#search-clear-btn")&&d.focus()}),d.addEventListener("input",e=>{const t=e.target;a.search=k(t.value.trim().toLowerCase()),T.style.display=a.search?"block":"none",r=1,l&&clearTimeout(l),l=setTimeout(async()=>{await f()},500)}),d.addEventListener("keydown",async e=>{if(e.key==="Enter"){l&&clearTimeout(l);const t=e.target;a.search=k(t.value.trim().toLowerCase()),r=1,await f(),d.blur()}}),T.addEventListener("click",async()=>{l&&clearTimeout(l),d.value="",a.search="",T.style.display="none",r=1,await f(),d.focus()}),F.addEventListener("change",async e=>{l&&clearTimeout(l);const t=e.target;a.sort=t.value,r=1,await f()}),x.addEventListener("change",async e=>{l&&clearTimeout(l);const t=e.target;a.year=t.value,r=1,L(),await f()}),y.addEventListener("change",async e=>{l&&clearTimeout(l);const t=e.target;a.score=t.value,r=1,L(),await f()}),document.querySelectorAll('[data-filter-type="tag"]').forEach(e=>{e.addEventListener("click",async()=>{l&&clearTimeout(l);const t=e;document.querySelectorAll('[data-filter-type="tag"]').forEach(s=>s.classList.remove("active")),e.classList.add("active"),a.tag=t.dataset.value,r=1,L(),await f()})}),H.addEventListener("click",async()=>{r>1&&(r--,await B(),window.scrollTo({top:u.offsetTop-120,behavior:"smooth"}))}),j.addEventListener("click",async()=>{const e=$==="local"?h.length:p?p.results.length:0,t=Math.ceil(e/m);r<t&&(r++,await B(),window.scrollTo({top:u.offsetTop-120,behavior:"smooth"}))})}async function f(e=!1){e||ae(),await re()}async function re(){u.innerHTML=`
      <div class="loading-state">
        <i class="fa-solid fa-circle-notch fa-spin"></i> 正在检索数据...
      </div>
    `,E.style.display="none";const e={};a.score!=="all"&&(e.score=a.score),a.year!=="all"&&(e.year=a.year),a.tag!=="all"&&(e.tag=a.tag);const t=a.search||null,s={};a.sort==="rank"?t||(s.rank="asc"):a.sort==="score_desc"?s.score="desc":a.sort==="date_desc"?s.date="desc":a.sort==="date_asc"?s.date="asc":a.sort==="title_asc"&&(s.title="asc");try{if(D(t)){$="local",p=null,await Y(t),N.textContent=h.length.toString(),r=1,await R();return}$="pagefind",h=[],p=await b.search(t,{filters:e,sort:s}),N.textContent=p.results.length.toString(),r=1,await A()}catch(n){console.error("Pagefind search execution failed:",n),u.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-triangle-exclamation"></i></span>
          <p class="empty-title">检索发生错误</p>
          <p class="empty-desc">检索组件执行出错，请刷新重试。</p>
        </div>
      `}}async function A(){if(!p)return;const e=p.results.length,t=Math.ceil(e/m)||1;r>t&&(r=t),r<1&&(r=1);const s=(r-1)*m,n=s+m,i=p.results.slice(s,n);if(i.length===0){u.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-folder-open"></i></span>
          <p class="empty-title">无检索结果</p>
          <p class="empty-desc">没有找到符合当前过滤条件的番剧，请尝试更换关键词或重置筛选。</p>
        </div>
      `,E.style.display="none";return}u.innerHTML=`
      <div class="loading-state">
        <i class="fa-solid fa-circle-notch fa-spin"></i> 正在加载页面数据...
      </div>
    `;try{const v=(await Promise.allSettled(i.map(c=>c.data()))).filter(c=>c.status==="fulfilled").map(c=>{const g=c.value.meta;return{id:parseInt(g.id),title:g.title,orig:g.orig,cover:g.cover,score:parseFloat(g.score||"0"),date:g.date,studio:g.studio,tags:g.tags?g.tags.split(","):[]}});u.innerHTML=v.map(c=>`
        <a href="/bangumi/${c.id}/" class="anime-card glass glass-hover">
          <div class="cover-wrapper">
            ${c.cover?`<img src="${c.cover}" alt="${c.title}" loading="lazy" class="cover-img" />
                 <div class="cover-placeholder" style="display: none;">无封面</div>`:'<div class="cover-placeholder">无封面</div>'}
            <div class="score-badge score-${c.score>=8?"high":c.score>=7?"mid":"low"}">
              <i class="fa-solid fa-star"></i> ${c.score.toFixed(1)}
            </div>
          </div>
          <div class="card-info">
            <h3 class="card-title" title="${c.title}">${c.title}</h3>
            <div class="card-meta">
              <span class="meta-item"><i class="fa-solid fa-calendar-days"></i> ${c.date||"未知"}</span>
              ${c.studio?`<span class="meta-item"><i class="fa-solid fa-palette"></i> ${c.studio}</span>`:""}
            </div>
            <div class="card-tags">
              ${c.tags.slice(0,3).map(M=>`<span class="tag-pill">${M}</span>`).join("")}
            </div>
          </div>
        </a>
      `).join(""),E.style.display=t>1?"flex":"none",_(t)}catch(o){console.error("Failed to render Pagefind results:",o),u.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-triangle-exclamation"></i></span>
          <p class="empty-title">加载页面数据失败</p>
        </div>
      `}}async function R(){const e=h.length,t=Math.ceil(e/m)||1;r>t&&(r=t),r<1&&(r=1);const s=(r-1)*m,n=s+m,i=h.slice(s,n);if(i.length===0){u.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-folder-open"></i></span>
          <p class="empty-title">无检索结果</p>
          <p class="empty-desc">没有找到符合当前过滤条件的番剧，请尝试更换关键词或重置筛选。</p>
        </div>
      `,E.style.display="none";return}u.innerHTML=J(i),E.style.display=t>1?"flex":"none",_(t)}async function B(){$==="local"?await R():await A()}function _(e){H.classList.toggle("disabled",r===1),j.classList.toggle("disabled",r===e);let t="";const s=5;let n=Math.max(1,r-2),i=Math.min(e,n+s-1);i-n<s-1&&(n=Math.max(1,i-s+1)),n>1&&(t+='<button class="page-num" data-page="1">1</button>',n>2&&(t+='<span class="page-dots">...</span>'));for(let o=n;o<=i;o++)t+=`
        <button class="page-num ${o===r?"active":""}" data-page="${o}">
          ${o}
        </button>
      `;i<e&&(i<e-1&&(t+='<span class="page-dots">...</span>'),t+=`<button class="page-num" data-page="${e}">${e}</button>`),K.innerHTML=t,document.querySelectorAll(".page-num").forEach(o=>{o.addEventListener("click",async v=>{const c=v.target;r=parseInt(c.dataset.page),await B(),window.scrollTo({top:u.offsetTop-120,behavior:"smooth"})})})}X();
