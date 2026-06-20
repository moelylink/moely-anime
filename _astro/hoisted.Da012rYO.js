import"./hoisted.CEIXwU9N.js";let L=null,u=null,n=1;const h=40;function P(e){if(!e)return"";const a=e.replace(/[\u200B-\u200D\uFEFF]/g,""),s={獨:"独",搖:"摇",滾:"滚",畫:"画",製:"制",劇:"剧",場:"场",戰:"战",鬥:"斗",無:"无",樂:"乐",擊:"击",進:"进",雙:"双",隻:"只",愛:"爱",戀:"恋",風:"风",雲:"云",門:"门",東:"东",極:"极",國:"国",體:"体",開:"开",關:"关",萬:"万",與:"与",實:"实",麗:"丽",總:"总",編:"编",鐵:"铁",鋼:"钢",彈:"弹",錄:"录",薦:"荐",熱:"热",時:"时",間:"间",貓:"猫",殺:"杀",誰:"谁",藥:"药",藝:"艺",聽:"听",覽:"览",觀:"观",覺:"觉",譯:"译",議:"议",讀:"读",讓:"让",讚:"赞",貝:"贝",負:"负",貢:"贡",財:"财",責:"责",貨:"货",質:"质",購:"购",費:"费",贈:"赠",賽:"赛",贏:"赢",趨:"趋",躍:"跃",車:"车",軌:"轨",軍:"军",輪:"轮",輸:"输",轄:"辖",轉:"转",轟:"轰",驚:"惊",髮:"发",鬧:"闹",魔:"魔",魚:"鱼",鳥:"鸟",鳴:"鸣",鶴:"鹤",鷗:"鸥",鷹:"鹰",鸞:"鸾",點:"点",辦:"办",蘇:"苏",葉:"叶",薩:"萨",藍:"蓝",簡:"简",繁:"繁",網:"网",頁:"页",尋:"寻",類:"类",樣:"样",說:"说",話:"话",認:"认",真:"真",機:"机",動:"动",艦:"舰",長:"长",爭:"争",線:"线",結:"结",約:"约",給:"给",統:"统",絲:"丝",綠:"绿",練:"练",緯:"纬",績:"绩",緒:"绪",續:"续",綏:"绥",經:"经",綜:"综",縉:"缙",綁:"绑",絨:"绒",繞:"绕",繪:"绘",絢:"绚",降:"降",隊:"队",陽:"阳",陰:"阴",陣:"阵",除:"除",陪:"陪",陳:"陈",陵:"陵",陶:"陶",陷:"陷",陸:"陆",險:"险",隆:"隆",隱:"隐",離:"离",難:"难",雁:"雁",雅:"雅",雄:"雄",夢:"梦",圓:"圆",氣:"气",強:"强",鄉:"乡",憂:"忧",傷:"伤",鬱:"郁",靈:"灵",響:"响",影:"影",聲:"声",視:"视",頻:"频",課:"课",題:"题",審:"审",美:"美",義:"义",寶:"宝",單:"单",復:"复",複:"复",寧:"宁",靜:"静",願:"愿",望:"望",滅:"灭",滿:"满",漢:"汉",語:"语",華:"华",豐:"丰",富:"富",春:"春",秋:"秋",冬:"冬",夏:"夏",歲:"岁",歷:"历",史:"史",歐:"欧",亞:"亚",洲:"洲",際:"际",育:"育",龍:"龙",鳳:"凤",獸:"兽",騎:"骑",士:"士",聖:"圣",劍:"剑",傳:"传",奇:"奇",談:"谈",討:"讨",論:"论",會:"会",員:"员",區:"区",發:"发",表:"表",選:"选",擇:"择",優:"优",秀:"秀",限:"限",終:"终",始:"始"};return a.split("").map(l=>s[l]||l).join("")}const t={search:"",score:"all",year:"all",tag:"all",sort:"rank"},$=document.getElementById("search-wrapper"),b=document.getElementById("search-tags"),o=document.getElementById("search-input"),v=document.getElementById("search-clear-btn"),T=document.getElementById("sort-select"),f=document.getElementById("score-select"),y=document.getElementById("year-select"),C=document.getElementById("results-count"),d=document.getElementById("anime-grid"),B=document.getElementById("prev-page"),M=document.getElementById("next-page"),F=document.getElementById("page-numbers"),x=document.getElementById("pagination-controls");async function H(){try{L=await new Function('return import("/pagefind/pagefind.js")')(),console.log("Pagefind static index loaded successfully."),await L.options({ranking:{metaWeights:{title:5,orig:4,director:3,studio:3,tags:2}}})}catch{console.warn("Pagefind not available."),d.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-triangle-exclamation"></i></span>
          <p class="empty-title">未检测到 Pagefind 静态索引</p>
          <p class="empty-desc">如果是本地开发环境，请先运行 <code>npm run build:index</code> 生成检索索引；如果是生产环境，请重新构建部署。</p>
        </div>
      `;return}q(),j(),await p(!0)}function q(){const e=new URLSearchParams(window.location.search);e.has("q")&&(t.search=P(e.get("q").trim().toLowerCase())),e.has("tag")&&(t.tag=e.get("tag")),e.has("score")&&(t.score=e.get("score")),e.has("year")&&(t.year=e.get("year")),e.has("sort")&&(t.sort=e.get("sort")),A()}function A(){o&&(o.value=t.search,v.style.display=t.search?"block":"none"),T&&(T.value=t.sort),f&&(f.value=t.score),y&&(y.value=t.year),document.querySelectorAll('[data-filter-type="tag"]').forEach(e=>{const a=e;e.classList.toggle("active",a.dataset.value===t.tag)}),m()}function m(){if(!b)return;if(b.innerHTML="",t.score!=="all"){const a=f.options[f.selectedIndex]?.text||t.score;E("score",`评分：${a}`)}t.year!=="all"&&E("year",`年份：${t.year}年`),t.tag!=="all"&&E("tag",`标签：${t.tag}`);const e=t.score!=="all"||t.year!=="all"||t.tag!=="all";o&&(e?o.setAttribute("placeholder","搜索更多..."):o.setAttribute("placeholder","输入番剧名称、导演、制作公司、标签以搜索..."))}function E(e,a){const s=document.createElement("span");s.className="search-tag";const l=document.createElement("span");l.textContent=a,s.appendChild(l);const i=document.createElement("span");i.className="search-tag-remove",i.innerHTML="&times;",i.addEventListener("click",async r=>{r.stopPropagation(),await R(e)}),s.appendChild(i),b.appendChild(s)}async function R(e){e==="score"?(t.score="all",f&&(f.value="all")):e==="year"?(t.year="all",y&&(y.value="all")):e==="tag"&&(t.tag="all",document.querySelectorAll('[data-filter-type="tag"]').forEach(a=>{const s=a;s.classList.toggle("active",s.dataset.value==="all")})),n=1,m(),await p()}function U(){const e=new URLSearchParams;t.search&&e.set("q",t.search),t.tag!=="all"&&e.set("tag",t.tag),t.score!=="all"&&e.set("score",t.score),t.year!=="all"&&e.set("year",t.year),t.sort!=="rank"&&e.set("sort",t.sort);const a=e.toString(),s=window.location.pathname+(a?"?"+a:"");window.history.replaceState({path:s},"",s)}function j(){$&&o&&$.addEventListener("click",e=>{const a=e.target;a!==o&&!a.closest(".search-tag")&&!a.closest("#search-clear-btn")&&o.focus()}),o.addEventListener("input",async e=>{const a=e.target;t.search=P(a.value.trim().toLowerCase()),v.style.display=t.search?"block":"none",n=1,await p()}),v.addEventListener("click",async()=>{o.value="",t.search="",v.style.display="none",n=1,await p(),o.focus()}),T.addEventListener("change",async e=>{const a=e.target;t.sort=a.value,n=1,await p()}),y.addEventListener("change",async e=>{const a=e.target;t.year=a.value,n=1,m(),await p()}),f.addEventListener("change",async e=>{const a=e.target;t.score=a.value,n=1,m(),await p()}),document.querySelectorAll('[data-filter-type="tag"]').forEach(e=>{e.addEventListener("click",async()=>{const a=e;document.querySelectorAll('[data-filter-type="tag"]').forEach(s=>s.classList.remove("active")),e.classList.add("active"),t.tag=a.dataset.value,n=1,m(),await p()})}),B.addEventListener("click",async()=>{n>1&&(n--,await I(),window.scrollTo({top:d.offsetTop-120,behavior:"smooth"}))}),M.addEventListener("click",async()=>{const e=u?u.results.length:0,a=Math.ceil(e/h);n<a&&(n++,await I(),window.scrollTo({top:d.offsetTop-120,behavior:"smooth"}))})}async function p(e=!1){e||U(),await D()}async function D(){d.innerHTML=`
      <div class="loading-state">
        <i class="fa-solid fa-circle-notch fa-spin"></i> 正在检索数据...
      </div>
    `,x.style.display="none";const e={};t.score!=="all"&&(e.score=t.score),t.year!=="all"&&(e.year=t.year),t.tag!=="all"&&(e.tag=t.tag);const a=t.search||null,s={};t.sort==="rank"?a||(s.rank="asc"):t.sort==="score_desc"?s.score="desc":t.sort==="date_desc"?s.date="desc":t.sort==="date_asc"?s.date="asc":t.sort==="title_asc"&&(s.title="asc");try{u=await L.search(a,{filters:e,sort:s}),C.textContent=u.results.length.toString(),n=1,await k()}catch(l){console.error("Pagefind search execution failed:",l),d.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-triangle-exclamation"></i></span>
          <p class="empty-title">检索发生错误</p>
          <p class="empty-desc">检索组件执行出错，请刷新重试。</p>
        </div>
      `}}async function k(){if(!u)return;const e=u.results.length,a=Math.ceil(e/h)||1;n>a&&(n=a),n<1&&(n=1);const s=(n-1)*h,l=s+h,i=u.results.slice(s,l);if(i.length===0){d.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-folder-open"></i></span>
          <p class="empty-title">无检索结果</p>
          <p class="empty-desc">没有找到符合当前过滤条件的番剧，请尝试更换关键词或重置筛选。</p>
        </div>
      `,x.style.display="none";return}d.innerHTML=`
      <div class="loading-state">
        <i class="fa-solid fa-circle-notch fa-spin"></i> 正在加载页面数据...
      </div>
    `;try{const w=(await Promise.allSettled(i.map(c=>c.data()))).filter(c=>c.status==="fulfilled").map(c=>{const g=c.value.meta;return{id:parseInt(g.id),title:g.title,orig:g.orig,cover:g.cover,score:parseFloat(g.score||"0"),date:g.date,studio:g.studio,tags:g.tags?g.tags.split(","):[]}});d.innerHTML=w.map(c=>`
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
              ${c.tags.slice(0,3).map(S=>`<span class="tag-pill">${S}</span>`).join("")}
            </div>
          </div>
        </a>
      `).join(""),x.style.display=a>1?"flex":"none",N(a)}catch(r){console.error("Failed to render Pagefind results:",r),d.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-triangle-exclamation"></i></span>
          <p class="empty-title">加载页面数据失败</p>
        </div>
      `}}async function I(){await k()}function N(e){B.classList.toggle("disabled",n===1),M.classList.toggle("disabled",n===e);let a="";const s=5;let l=Math.max(1,n-2),i=Math.min(e,l+s-1);i-l<s-1&&(l=Math.max(1,i-s+1)),l>1&&(a+='<button class="page-num" data-page="1">1</button>',l>2&&(a+='<span class="page-dots">...</span>'));for(let r=l;r<=i;r++)a+=`
        <button class="page-num ${r===n?"active":""}" data-page="${r}">
          ${r}
        </button>
      `;i<e&&(i<e-1&&(a+='<span class="page-dots">...</span>'),a+=`<button class="page-num" data-page="${e}">${e}</button>`),F.innerHTML=a,document.querySelectorAll(".page-num").forEach(r=>{r.addEventListener("click",async w=>{const c=w.target;n=parseInt(c.dataset.page),await I(),window.scrollTo({top:d.offsetTop-120,behavior:"smooth"})})})}H();
