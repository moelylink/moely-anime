import"./hoisted.CEIXwU9N.js";let L=null,f=null,n=1;const h=40,t={search:"",score:"all",year:"all",tag:"all",sort:"rank"},$=document.getElementById("search-wrapper"),b=document.getElementById("search-tags"),d=document.getElementById("search-input"),v=document.getElementById("search-clear-btn"),T=document.getElementById("sort-select"),u=document.getElementById("score-select"),y=document.getElementById("year-select"),M=document.getElementById("results-count"),g=document.getElementById("anime-grid"),P=document.getElementById("prev-page"),S=document.getElementById("next-page"),k=document.getElementById("page-numbers"),x=document.getElementById("pagination-controls");async function C(){try{L=await new Function('return import("/pagefind/pagefind.js")')(),console.log("Pagefind static index loaded successfully."),await L.options({ranking:{metaWeights:{title:5,orig:4,director:3,studio:3,tags:2}}})}catch{console.warn("Pagefind not available."),g.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-triangle-exclamation"></i></span>
          <p class="empty-title">未检测到 Pagefind 静态索引</p>
          <p class="empty-desc">如果是本地开发环境，请先运行 <code>npm run build:index</code> 生成检索索引；如果是生产环境，请重新构建部署。</p>
        </div>
      `;return}H(),R(),await p(!0)}function H(){const e=new URLSearchParams(window.location.search);e.has("q")&&(t.search=e.get("q").trim().toLowerCase()),e.has("tag")&&(t.tag=e.get("tag")),e.has("score")&&(t.score=e.get("score")),e.has("year")&&(t.year=e.get("year")),e.has("sort")&&(t.sort=e.get("sort")),q()}function q(){d&&(d.value=t.search,v.style.display=t.search?"block":"none"),T&&(T.value=t.sort),u&&(u.value=t.score),y&&(y.value=t.year),document.querySelectorAll('[data-filter-type="tag"]').forEach(e=>{const a=e;e.classList.toggle("active",a.dataset.value===t.tag)}),m()}function m(){if(!b)return;if(b.innerHTML="",t.score!=="all"){const a=u.options[u.selectedIndex]?.text||t.score;E("score",`评分：${a}`)}t.year!=="all"&&E("year",`年份：${t.year}年`),t.tag!=="all"&&E("tag",`标签：${t.tag}`);const e=t.score!=="all"||t.year!=="all"||t.tag!=="all";d&&(e?d.setAttribute("placeholder","搜索更多..."):d.setAttribute("placeholder","输入番剧名称、导演、制作公司、标签以搜索..."))}function E(e,a){const s=document.createElement("span");s.className="search-tag";const l=document.createElement("span");l.textContent=a,s.appendChild(l);const i=document.createElement("span");i.className="search-tag-remove",i.innerHTML="&times;",i.addEventListener("click",async r=>{r.stopPropagation(),await F(e)}),s.appendChild(i),b.appendChild(s)}async function F(e){e==="score"?(t.score="all",u&&(u.value="all")):e==="year"?(t.year="all",y&&(y.value="all")):e==="tag"&&(t.tag="all",document.querySelectorAll('[data-filter-type="tag"]').forEach(a=>{const s=a;s.classList.toggle("active",s.dataset.value==="all")})),n=1,m(),await p()}function A(){const e=new URLSearchParams;t.search&&e.set("q",t.search),t.tag!=="all"&&e.set("tag",t.tag),t.score!=="all"&&e.set("score",t.score),t.year!=="all"&&e.set("year",t.year),t.sort!=="rank"&&e.set("sort",t.sort);const a=e.toString(),s=window.location.pathname+(a?"?"+a:"");window.history.replaceState({path:s},"",s)}function R(){$&&d&&$.addEventListener("click",e=>{const a=e.target;a!==d&&!a.closest(".search-tag")&&!a.closest("#search-clear-btn")&&d.focus()}),d.addEventListener("input",async e=>{const a=e.target;t.search=a.value.trim().toLowerCase(),v.style.display=t.search?"block":"none",n=1,await p()}),v.addEventListener("click",async()=>{d.value="",t.search="",v.style.display="none",n=1,await p(),d.focus()}),T.addEventListener("change",async e=>{const a=e.target;t.sort=a.value,n=1,await p()}),y.addEventListener("change",async e=>{const a=e.target;t.year=a.value,n=1,m(),await p()}),u.addEventListener("change",async e=>{const a=e.target;t.score=a.value,n=1,m(),await p()}),document.querySelectorAll('[data-filter-type="tag"]').forEach(e=>{e.addEventListener("click",async()=>{const a=e;document.querySelectorAll('[data-filter-type="tag"]').forEach(s=>s.classList.remove("active")),e.classList.add("active"),t.tag=a.dataset.value,n=1,m(),await p()})}),P.addEventListener("click",async()=>{n>1&&(n--,await I(),window.scrollTo({top:g.offsetTop-120,behavior:"smooth"}))}),S.addEventListener("click",async()=>{const e=f?f.results.length:0,a=Math.ceil(e/h);n<a&&(n++,await I(),window.scrollTo({top:g.offsetTop-120,behavior:"smooth"}))})}async function p(e=!1){e||A(),await U()}async function U(){g.innerHTML=`
      <div class="loading-state">
        <i class="fa-solid fa-circle-notch fa-spin"></i> 正在检索数据...
      </div>
    `,x.style.display="none";const e={};t.score!=="all"&&(e.score=t.score),t.year!=="all"&&(e.year=t.year),t.tag!=="all"&&(e.tag=t.tag);const a=t.search||null,s={};t.sort==="rank"?a||(s.rank="asc"):t.sort==="score_desc"?s.score="desc":t.sort==="date_desc"?s.date="desc":t.sort==="date_asc"?s.date="asc":t.sort==="title_asc"&&(s.title="asc");try{f=await L.search(a,{filters:e,sort:s}),M.textContent=f.results.length.toString(),n=1,await B()}catch(l){console.error("Pagefind search execution failed:",l),g.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-triangle-exclamation"></i></span>
          <p class="empty-title">检索发生错误</p>
          <p class="empty-desc">检索组件执行出错，请刷新重试。</p>
        </div>
      `}}async function B(){if(!f)return;const e=f.results.length,a=Math.ceil(e/h)||1;n>a&&(n=a),n<1&&(n=1);const s=(n-1)*h,l=s+h,i=f.results.slice(s,l);if(i.length===0){g.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-folder-open"></i></span>
          <p class="empty-title">无检索结果</p>
          <p class="empty-desc">没有找到符合当前过滤条件的番剧，请尝试更换关键词或重置筛选。</p>
        </div>
      `,x.style.display="none";return}g.innerHTML=`
      <div class="loading-state">
        <i class="fa-solid fa-circle-notch fa-spin"></i> 正在加载页面数据...
      </div>
    `;try{const w=(await Promise.all(i.map(c=>c.data()))).map(c=>{const o=c.meta;return{id:parseInt(o.id),title:o.title,orig:o.orig,cover:o.cover,score:parseFloat(o.score||"0"),date:o.date,studio:o.studio,tags:o.tags?o.tags.split(","):[]}});g.innerHTML=w.map(c=>`
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
              ${c.tags.slice(0,3).map(o=>`<span class="tag-pill">${o}</span>`).join("")}
            </div>
          </div>
        </a>
      `).join(""),x.style.display=a>1?"flex":"none",N(a)}catch(r){console.error("Failed to render Pagefind results:",r),g.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-triangle-exclamation"></i></span>
          <p class="empty-title">加载页面数据失败</p>
        </div>
      `}}async function I(){await B()}function N(e){P.classList.toggle("disabled",n===1),S.classList.toggle("disabled",n===e);let a="";const s=5;let l=Math.max(1,n-2),i=Math.min(e,l+s-1);i-l<s-1&&(l=Math.max(1,i-s+1)),l>1&&(a+='<button class="page-num" data-page="1">1</button>',l>2&&(a+='<span class="page-dots">...</span>'));for(let r=l;r<=i;r++)a+=`
        <button class="page-num ${r===n?"active":""}" data-page="${r}">
          ${r}
        </button>
      `;i<e&&(i<e-1&&(a+='<span class="page-dots">...</span>'),a+=`<button class="page-num" data-page="${e}">${e}</button>`),k.innerHTML=a,document.querySelectorAll(".page-num").forEach(r=>{r.addEventListener("click",async w=>{const c=w.target;n=parseInt(c.dataset.page),await I(),window.scrollTo({top:g.offsetTop-120,behavior:"smooth"})})})}C();
