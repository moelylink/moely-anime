import"./hoisted.Bm2gTzGr.js";let S=null,y=null,r=1;const E=40;let o=null;function I(e){if(!e)return"";const a=e.replace(/[\u200B-\u200D\uFEFF]/g,""),s={獨:"独",搖:"摇",滾:"滚",畫:"画",製:"制",劇:"剧",場:"场",戰:"战",鬥:"斗",無:"无",樂:"乐",擊:"击",進:"进",雙:"双",隻:"只",愛:"爱",戀:"恋",風:"风",雲:"云",門:"门",東:"东",極:"极",國:"国",體:"体",開:"开",關:"关",萬:"万",與:"与",實:"实",麗:"丽",總:"总",編:"编",鐵:"铁",鋼:"钢",彈:"弹",錄:"录",薦:"荐",熱:"热",時:"时",間:"间",貓:"猫",殺:"杀",誰:"谁",藥:"药",藝:"艺",聽:"听",覽:"览",觀:"观",覺:"觉",譯:"译",議:"议",讀:"读",讓:"让",讚:"赞",貝:"贝",負:"负",貢:"贡",財:"财",責:"责",貨:"货",質:"质",購:"购",費:"费",贈:"赠",賽:"赛",贏:"赢",趨:"趋",躍:"跃",車:"车",軌:"轨",軍:"军",輪:"轮",輸:"输",轄:"辖",轉:"转",轟:"轰",驚:"惊",髮:"发",鬧:"闹",魔:"魔",魚:"鱼",鳥:"鸟",鳴:"鸣",鶴:"鹤",鷗:"鸥",鷹:"鹰",鸞:"鸾",點:"点",辦:"办",蘇:"苏",葉:"叶",薩:"萨",藍:"蓝",簡:"简",繁:"繁",網:"网",頁:"页",尋:"寻",類:"类",樣:"样",說:"说",話:"话",認:"认",真:"真",機:"机",動:"动",艦:"舰",長:"长",爭:"争",線:"线",結:"结",約:"约",給:"给",統:"统",絲:"丝",綠:"绿",練:"练",緯:"纬",績:"绩",緒:"绪",續:"续",綏:"绥",經:"经",綜:"综",縉:"缙",綁:"绑",絨:"绒",繞:"绕",繪:"绘",絢:"绚",降:"降",隊:"队",陽:"阳",陰:"阴",陣:"阵",除:"除",陪:"陪",陳:"陈",陵:"陵",陶:"陶",陷:"陷",陸:"陆",險:"险",隆:"隆",隱:"隐",離:"离",難:"难",雁:"雁",雅:"雅",雄:"雄",夢:"梦",圓:"圆",氣:"气",強:"强",鄉:"乡",憂:"忧",傷:"伤",鬱:"郁",靈:"灵",響:"响",影:"影",聲:"声",視:"视",頻:"频",課:"课",題:"题",審:"审",美:"美",義:"义",寶:"宝",單:"单",復:"复",複:"复",寧:"宁",靜:"静",願:"愿",望:"望",滅:"灭",滿:"满",漢:"汉",語:"语",華:"华",豐:"丰",富:"富",春:"春",秋:"秋",冬:"冬",夏:"夏",歲:"岁",歷:"历",史:"史",歐:"欧",亞:"亚",洲:"洲",際:"际",育:"育",龍:"龙",鳳:"凤",獸:"兽",騎:"骑",士:"士",聖:"圣",劍:"剑",傳:"传",奇:"奇",談:"谈",討:"讨",論:"论",會:"会",員:"员",區:"区",發:"发",表:"表",選:"选",擇:"择",優:"优",秀:"秀",限:"限",終:"终",始:"始"};return a.split("").map(i=>s[i]||i).join("")}const t={search:"",score:"all",year:"all",tag:"all",sort:"rank"},B=document.getElementById("search-wrapper"),x=document.getElementById("search-tags"),d=document.getElementById("search-input"),T=document.getElementById("search-clear-btn"),$=document.getElementById("sort-select"),h=document.getElementById("score-select"),w=document.getElementById("year-select"),A=document.getElementById("results-count"),u=document.getElementById("anime-grid"),M=document.getElementById("prev-page"),C=document.getElementById("next-page"),q=document.getElementById("page-numbers"),P=document.getElementById("pagination-controls");function R(){if(typeof Intl>"u"||typeof Intl.Segmenter>"u")return;const e=Intl.Segmenter,a=n=>n?(Array.isArray(n)?n:[n]).some(p=>/^(zh|ja|ko)\b/i.test(String(p))):!1,s=n=>/[㐀-鿿豈-﫿]/.test(n);function i(n,l){const p=new e(n,l);if(l&&l.granularity==="word"&&a(n)){const c=p.segment.bind(p);p.segment=function(m){if(typeof m=="string"&&s(m)){const g=[],H=/[㐀-鿿豈-﫿]+|[^\s㐀-鿿豈-﫿]+|\s+/g;let L;for(;(L=H.exec(m))!==null;)g.push({segment:L[0],index:L.index,input:m,isWordLike:!/^\s+$/.test(L[0])});return g}return c(m)}}return p}i.prototype=e.prototype,i.supportedLocalesOf=e.supportedLocalesOf.bind(e),Intl.Segmenter=i}async function j(){R();try{S=await new Function('return import("/pagefind/pagefind.js")')(),console.log("Pagefind static index loaded successfully."),await S.options({ranking:{metaWeights:{title:5,orig:4,director:3,studio:3,tags:2}}})}catch{console.warn("Pagefind not available."),u.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-triangle-exclamation"></i></span>
          <p class="empty-title">未检测到 Pagefind 静态索引</p>
          <p class="empty-desc">如果是本地开发环境，请先运行 <code>npm run build:index</code> 生成检索索引；如果是生产环境，请重新构建部署。</p>
        </div>
      `;return}D(),_(),await f(!0)}function D(){const e=new URLSearchParams(window.location.search);e.has("q")&&(t.search=I(e.get("q").trim().toLowerCase())),e.has("tag")&&(t.tag=e.get("tag")),e.has("score")&&(t.score=e.get("score")),e.has("year")&&(t.year=e.get("year")),e.has("sort")&&(t.sort=e.get("sort")),U()}function U(){d&&(d.value=t.search,T.style.display=t.search?"block":"none"),$&&($.value=t.sort),h&&(h.value=t.score),w&&(w.value=t.year),document.querySelectorAll('[data-filter-type="tag"]').forEach(e=>{const a=e;e.classList.toggle("active",a.dataset.value===t.tag)}),v()}function v(){if(!x)return;if(x.innerHTML="",t.score!=="all"){const a=h.options[h.selectedIndex]?.text||t.score;b("score",`评分：${a}`)}t.year!=="all"&&b("year",`年份：${t.year}年`),t.tag!=="all"&&b("tag",`标签：${t.tag}`);const e=t.score!=="all"||t.year!=="all"||t.tag!=="all";d&&(e?d.setAttribute("placeholder","搜索更多..."):d.setAttribute("placeholder","输入番剧名称、导演、制作公司、标签以搜索..."))}function b(e,a){const s=document.createElement("span");s.className="search-tag";const i=document.createElement("span");i.textContent=a,s.appendChild(i);const n=document.createElement("span");n.className="search-tag-remove",n.innerHTML="&times;",n.addEventListener("click",async l=>{l.stopPropagation(),await N(e)}),s.appendChild(n),x.appendChild(s)}async function N(e){o&&clearTimeout(o),e==="score"?(t.score="all",h&&(h.value="all")):e==="year"?(t.year="all",w&&(w.value="all")):e==="tag"&&(t.tag="all",document.querySelectorAll('[data-filter-type="tag"]').forEach(a=>{const s=a;s.classList.toggle("active",s.dataset.value==="all")})),r=1,v(),await f()}function O(){const e=new URLSearchParams;t.search&&e.set("q",t.search),t.tag!=="all"&&e.set("tag",t.tag),t.score!=="all"&&e.set("score",t.score),t.year!=="all"&&e.set("year",t.year),t.sort!=="rank"&&e.set("sort",t.sort);const a=e.toString(),s=window.location.pathname+(a?"?"+a:"");window.history.replaceState({path:s},"",s)}function _(){B&&d&&B.addEventListener("click",e=>{const a=e.target;a!==d&&!a.closest(".search-tag")&&!a.closest("#search-clear-btn")&&d.focus()}),d.addEventListener("input",e=>{const a=e.target;t.search=I(a.value.trim().toLowerCase()),T.style.display=t.search?"block":"none",r=1,o&&clearTimeout(o),o=setTimeout(async()=>{await f()},500)}),d.addEventListener("keydown",async e=>{if(e.key==="Enter"){o&&clearTimeout(o);const a=e.target;t.search=I(a.value.trim().toLowerCase()),r=1,await f(),d.blur()}}),T.addEventListener("click",async()=>{o&&clearTimeout(o),d.value="",t.search="",T.style.display="none",r=1,await f(),d.focus()}),$.addEventListener("change",async e=>{o&&clearTimeout(o);const a=e.target;t.sort=a.value,r=1,await f()}),w.addEventListener("change",async e=>{o&&clearTimeout(o);const a=e.target;t.year=a.value,r=1,v(),await f()}),h.addEventListener("change",async e=>{o&&clearTimeout(o);const a=e.target;t.score=a.value,r=1,v(),await f()}),document.querySelectorAll('[data-filter-type="tag"]').forEach(e=>{e.addEventListener("click",async()=>{o&&clearTimeout(o);const a=e;document.querySelectorAll('[data-filter-type="tag"]').forEach(s=>s.classList.remove("active")),e.classList.add("active"),t.tag=a.dataset.value,r=1,v(),await f()})}),M.addEventListener("click",async()=>{r>1&&(r--,await k(),window.scrollTo({top:u.offsetTop-120,behavior:"smooth"}))}),C.addEventListener("click",async()=>{const e=y?y.results.length:0,a=Math.ceil(e/E);r<a&&(r++,await k(),window.scrollTo({top:u.offsetTop-120,behavior:"smooth"}))})}async function f(e=!1){e||O(),await G()}async function G(){u.innerHTML=`
      <div class="loading-state">
        <i class="fa-solid fa-circle-notch fa-spin"></i> 正在检索数据...
      </div>
    `,P.style.display="none";const e={};t.score!=="all"&&(e.score=t.score),t.year!=="all"&&(e.year=t.year),t.tag!=="all"&&(e.tag=t.tag);const a=t.search||null,s={};t.sort==="rank"?a||(s.rank="asc"):t.sort==="score_desc"?s.score="desc":t.sort==="date_desc"?s.date="desc":t.sort==="date_asc"?s.date="asc":t.sort==="title_asc"&&(s.title="asc");try{y=await S.search(a,{filters:e,sort:s}),A.textContent=y.results.length.toString(),r=1,await F()}catch(i){console.error("Pagefind search execution failed:",i),u.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-triangle-exclamation"></i></span>
          <p class="empty-title">检索发生错误</p>
          <p class="empty-desc">检索组件执行出错，请刷新重试。</p>
        </div>
      `}}async function F(){if(!y)return;const e=y.results.length,a=Math.ceil(e/E)||1;r>a&&(r=a),r<1&&(r=1);const s=(r-1)*E,i=s+E,n=y.results.slice(s,i);if(n.length===0){u.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-folder-open"></i></span>
          <p class="empty-title">无检索结果</p>
          <p class="empty-desc">没有找到符合当前过滤条件的番剧，请尝试更换关键词或重置筛选。</p>
        </div>
      `,P.style.display="none";return}u.innerHTML=`
      <div class="loading-state">
        <i class="fa-solid fa-circle-notch fa-spin"></i> 正在加载页面数据...
      </div>
    `;try{const p=(await Promise.allSettled(n.map(c=>c.data()))).filter(c=>c.status==="fulfilled").map(c=>{const g=c.value.meta;return{id:parseInt(g.id),title:g.title,orig:g.orig,cover:g.cover,score:parseFloat(g.score||"0"),date:g.date,studio:g.studio,tags:g.tags?g.tags.split(","):[]}});u.innerHTML=p.map(c=>`
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
              ${c.tags.slice(0,3).map(m=>`<span class="tag-pill">${m}</span>`).join("")}
            </div>
          </div>
        </a>
      `).join(""),P.style.display=a>1?"flex":"none",J(a)}catch(l){console.error("Failed to render Pagefind results:",l),u.innerHTML=`
        <div class="empty-state glass">
          <span class="empty-icon"><i class="fa-solid fa-triangle-exclamation"></i></span>
          <p class="empty-title">加载页面数据失败</p>
        </div>
      `}}async function k(){await F()}function J(e){M.classList.toggle("disabled",r===1),C.classList.toggle("disabled",r===e);let a="";const s=5;let i=Math.max(1,r-2),n=Math.min(e,i+s-1);n-i<s-1&&(i=Math.max(1,n-s+1)),i>1&&(a+='<button class="page-num" data-page="1">1</button>',i>2&&(a+='<span class="page-dots">...</span>'));for(let l=i;l<=n;l++)a+=`
        <button class="page-num ${l===r?"active":""}" data-page="${l}">
          ${l}
        </button>
      `;n<e&&(n<e-1&&(a+='<span class="page-dots">...</span>'),a+=`<button class="page-num" data-page="${e}">${e}</button>`),q.innerHTML=a,document.querySelectorAll(".page-num").forEach(l=>{l.addEventListener("click",async p=>{const c=p.target;r=parseInt(c.dataset.page),await k(),window.scrollTo({top:u.offsetTop-120,behavior:"smooth"})})})}j();
