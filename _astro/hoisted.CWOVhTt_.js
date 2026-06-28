import"./hoisted.Bm2gTzGr.js";let T=null,f=null,n=1;const v=40;let l=null;function b(e){if(!e)return"";const a=e.replace(/[\u200B-\u200D\uFEFF]/g,""),s={獨:"独",搖:"摇",滾:"滚",畫:"画",製:"制",劇:"剧",場:"场",戰:"战",鬥:"斗",無:"无",樂:"乐",擊:"击",進:"进",雙:"双",隻:"只",愛:"爱",戀:"恋",風:"风",雲:"云",門:"门",東:"东",極:"极",國:"国",體:"体",開:"开",關:"关",萬:"万",與:"与",實:"实",麗:"丽",總:"总",編:"编",鐵:"铁",鋼:"钢",彈:"弹",錄:"录",薦:"荐",熱:"热",時:"时",間:"间",貓:"猫",殺:"杀",誰:"谁",藥:"药",藝:"艺",聽:"听",覽:"览",觀:"观",覺:"觉",譯:"译",議:"议",讀:"读",讓:"让",讚:"赞",貝:"贝",負:"负",貢:"贡",財:"财",責:"责",貨:"货",質:"质",購:"购",費:"费",贈:"赠",賽:"赛",贏:"赢",趨:"趋",躍:"跃",車:"车",軌:"轨",軍:"军",輪:"轮",輸:"输",轄:"辖",轉:"转",轟:"轰",驚:"惊",髮:"发",鬧:"闹",魔:"魔",魚:"鱼",鳥:"鸟",鳴:"鸣",鶴:"鹤",鷗:"鸥",鷹:"鹰",鸞:"鸾",點:"点",辦:"办",蘇:"苏",葉:"叶",薩:"萨",藍:"蓝",簡:"简",繁:"繁",網:"网",頁:"页",尋:"寻",類:"类",樣:"样",說:"说",話:"话",認:"认",真:"真",機:"机",動:"动",艦:"舰",長:"长",爭:"争",線:"线",結:"结",約:"约",給:"给",統:"统",絲:"丝",綠:"绿",練:"练",緯:"纬",績:"绩",緒:"绪",續:"续",綏:"绥",經:"经",綜:"综",縉:"缙",綁:"绑",絨:"绒",繞:"绕",繪:"绘",絢:"绚",降:"降",隊:"队",陽:"阳",陰:"阴",陣:"阵",除:"除",陪:"陪",陳:"陈",陵:"陵",陶:"陶",陷:"陷",陸:"陆",險:"险",隆:"隆",隱:"隐",離:"离",難:"难",雁:"雁",雅:"雅",雄:"雄",夢:"梦",圓:"圆",氣:"气",強:"强",鄉:"乡",憂:"忧",傷:"伤",鬱:"郁",靈:"灵",響:"响",影:"影",聲:"声",視:"视",頻:"频",課:"课",題:"题",審:"审",美:"美",義:"义",寶:"宝",單:"单",復:"复",複:"复",寧:"宁",靜:"静",願:"愿",望:"望",滅:"灭",滿:"满",漢:"汉",語:"语",華:"华",豐:"丰",富:"富",春:"春",秋:"秋",冬:"冬",夏:"夏",歲:"岁",歷:"历",史:"史",歐:"欧",亞:"亚",洲:"洲",際:"际",育:"育",龍:"龙",鳳:"凤",獸:"兽",騎:"骑",士:"士",聖:"圣",劍:"剑",傳:"传",奇:"奇",談:"谈",討:"讨",論:"论",會:"会",員:"员",區:"区",發:"发",表:"表",選:"选",擇:"择",優:"优",秀:"秀",限:"限",終:"终",始:"始"};return a.split("").map(i=>s[i]||i).join("")}const t={search:"",score:"all",year:"all",tag:"all",sort:"rank"},B=document.getElementById("search-wrapper"),x=document.getElementById("search-tags"),o=document.getElementById("search-input"),w=document.getElementById("search-clear-btn"),I=document.getElementById("sort-select"),m=document.getElementById("score-select"),h=document.getElementById("year-select"),F=document.getElementById("results-count"),g=document.getElementById("anime-grid"),M=document.getElementById("prev-page"),k=document.getElementById("next-page"),H=document.getElementById("page-numbers"),S=document.getElementById("pagination-controls");async function q(){try{T=await new Function('return import("/pagefind/pagefind.js")')(),console.log("Pagefind static index loaded successfully."),await T.options({noWorker:!0,ranking:{metaWeights:{title:5,orig:4,director:3,studio:3,tags:2}}})}catch{console.warn("Pagefind not available."),g.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-triangle-exclamation"></i></span>
          <p class="empty-title">未检测到 Pagefind 静态索引</p>
          <p class="empty-desc">如果是本地开发环境，请先运行 <code>npm run build:index</code> 生成检索索引；如果是生产环境，请重新构建部署。</p>
        </div>
      `;return}A(),j(),await u(!0)}function A(){const e=new URLSearchParams(window.location.search);e.has("q")&&(t.search=b(e.get("q").trim().toLowerCase())),e.has("tag")&&(t.tag=e.get("tag")),e.has("score")&&(t.score=e.get("score")),e.has("year")&&(t.year=e.get("year")),e.has("sort")&&(t.sort=e.get("sort")),R()}function R(){o&&(o.value=t.search,w.style.display=t.search?"block":"none"),I&&(I.value=t.sort),m&&(m.value=t.score),h&&(h.value=t.year),document.querySelectorAll('[data-filter-type="tag"]').forEach(e=>{const a=e;e.classList.toggle("active",a.dataset.value===t.tag)}),y()}function y(){if(!x)return;if(x.innerHTML="",t.score!=="all"){const a=m.options[m.selectedIndex]?.text||t.score;L("score",`评分：${a}`)}t.year!=="all"&&L("year",`年份：${t.year}年`),t.tag!=="all"&&L("tag",`标签：${t.tag}`);const e=t.score!=="all"||t.year!=="all"||t.tag!=="all";o&&(e?o.setAttribute("placeholder","搜索更多..."):o.setAttribute("placeholder","输入番剧名称、导演、制作公司、标签以搜索..."))}function L(e,a){const s=document.createElement("span");s.className="search-tag";const i=document.createElement("span");i.textContent=a,s.appendChild(i);const r=document.createElement("span");r.className="search-tag-remove",r.innerHTML="&times;",r.addEventListener("click",async d=>{d.stopPropagation(),await D(e)}),s.appendChild(r),x.appendChild(s)}async function D(e){l&&clearTimeout(l),e==="score"?(t.score="all",m&&(m.value="all")):e==="year"?(t.year="all",h&&(h.value="all")):e==="tag"&&(t.tag="all",document.querySelectorAll('[data-filter-type="tag"]').forEach(a=>{const s=a;s.classList.toggle("active",s.dataset.value==="all")})),n=1,y(),await u()}function U(){const e=new URLSearchParams;t.search&&e.set("q",t.search),t.tag!=="all"&&e.set("tag",t.tag),t.score!=="all"&&e.set("score",t.score),t.year!=="all"&&e.set("year",t.year),t.sort!=="rank"&&e.set("sort",t.sort);const a=e.toString(),s=window.location.pathname+(a?"?"+a:"");window.history.replaceState({path:s},"",s)}function j(){B&&o&&B.addEventListener("click",e=>{const a=e.target;a!==o&&!a.closest(".search-tag")&&!a.closest("#search-clear-btn")&&o.focus()}),o.addEventListener("input",e=>{const a=e.target;t.search=b(a.value.trim().toLowerCase()),w.style.display=t.search?"block":"none",n=1,l&&clearTimeout(l),l=setTimeout(async()=>{await u()},500)}),o.addEventListener("keydown",async e=>{if(e.key==="Enter"){l&&clearTimeout(l);const a=e.target;t.search=b(a.value.trim().toLowerCase()),n=1,await u(),o.blur()}}),w.addEventListener("click",async()=>{l&&clearTimeout(l),o.value="",t.search="",w.style.display="none",n=1,await u(),o.focus()}),I.addEventListener("change",async e=>{l&&clearTimeout(l);const a=e.target;t.sort=a.value,n=1,await u()}),h.addEventListener("change",async e=>{l&&clearTimeout(l);const a=e.target;t.year=a.value,n=1,y(),await u()}),m.addEventListener("change",async e=>{l&&clearTimeout(l);const a=e.target;t.score=a.value,n=1,y(),await u()}),document.querySelectorAll('[data-filter-type="tag"]').forEach(e=>{e.addEventListener("click",async()=>{l&&clearTimeout(l);const a=e;document.querySelectorAll('[data-filter-type="tag"]').forEach(s=>s.classList.remove("active")),e.classList.add("active"),t.tag=a.dataset.value,n=1,y(),await u()})}),M.addEventListener("click",async()=>{n>1&&(n--,await $(),window.scrollTo({top:g.offsetTop-120,behavior:"smooth"}))}),k.addEventListener("click",async()=>{const e=f?f.results.length:0,a=Math.ceil(e/v);n<a&&(n++,await $(),window.scrollTo({top:g.offsetTop-120,behavior:"smooth"}))})}async function u(e=!1){e||U(),await N()}async function N(){g.innerHTML=`
      <div class="loading-state">
        <i class="fa-solid fa-circle-notch fa-spin"></i> 正在检索数据...
      </div>
    `,S.style.display="none";const e={};t.score!=="all"&&(e.score=t.score),t.year!=="all"&&(e.year=t.year),t.tag!=="all"&&(e.tag=t.tag);const a=t.search||null,s={};t.sort==="rank"?a||(s.rank="asc"):t.sort==="score_desc"?s.score="desc":t.sort==="date_desc"?s.date="desc":t.sort==="date_asc"?s.date="asc":t.sort==="title_asc"&&(s.title="asc");try{f=await T.search(a,{filters:e,sort:s}),F.textContent=f.results.length.toString(),n=1,await C()}catch(i){console.error("Pagefind search execution failed:",i),g.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-triangle-exclamation"></i></span>
          <p class="empty-title">检索发生错误</p>
          <p class="empty-desc">检索组件执行出错，请刷新重试。</p>
        </div>
      `}}async function C(){if(!f)return;const e=f.results.length,a=Math.ceil(e/v)||1;n>a&&(n=a),n<1&&(n=1);const s=(n-1)*v,i=s+v,r=f.results.slice(s,i);if(r.length===0){g.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-folder-open"></i></span>
          <p class="empty-title">无检索结果</p>
          <p class="empty-desc">没有找到符合当前过滤条件的番剧，请尝试更换关键词或重置筛选。</p>
        </div>
      `,S.style.display="none";return}g.innerHTML=`
      <div class="loading-state">
        <i class="fa-solid fa-circle-notch fa-spin"></i> 正在加载页面数据...
      </div>
    `;try{const E=(await Promise.allSettled(r.map(c=>c.data()))).filter(c=>c.status==="fulfilled").map(c=>{const p=c.value.meta;return{id:parseInt(p.id),title:p.title,orig:p.orig,cover:p.cover,score:parseFloat(p.score||"0"),date:p.date,studio:p.studio,tags:p.tags?p.tags.split(","):[]}});g.innerHTML=E.map(c=>`
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
              ${c.tags.slice(0,3).map(P=>`<span class="tag-pill">${P}</span>`).join("")}
            </div>
          </div>
        </a>
      `).join(""),S.style.display=a>1?"flex":"none",_(a)}catch(d){console.error("Failed to render Pagefind results:",d),g.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-triangle-exclamation"></i></span>
          <p class="empty-title">加载页面数据失败</p>
        </div>
      `}}async function $(){await C()}function _(e){M.classList.toggle("disabled",n===1),k.classList.toggle("disabled",n===e);let a="";const s=5;let i=Math.max(1,n-2),r=Math.min(e,i+s-1);r-i<s-1&&(i=Math.max(1,r-s+1)),i>1&&(a+='<button class="page-num" data-page="1">1</button>',i>2&&(a+='<span class="page-dots">...</span>'));for(let d=i;d<=r;d++)a+=`
        <button class="page-num ${d===n?"active":""}" data-page="${d}">
          ${d}
        </button>
      `;r<e&&(r<e-1&&(a+='<span class="page-dots">...</span>'),a+=`<button class="page-num" data-page="${e}">${e}</button>`),H.innerHTML=a,document.querySelectorAll(".page-num").forEach(d=>{d.addEventListener("click",async E=>{const c=E.target;n=parseInt(c.dataset.page),await $(),window.scrollTo({top:g.offsetTop-120,behavior:"smooth"})})})}q();
