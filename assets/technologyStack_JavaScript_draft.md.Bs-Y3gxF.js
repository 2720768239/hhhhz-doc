import{_ as s,c as a,o as i,a4 as n}from"./chunks/framework.ChnUdrHZ.js";const b=JSON.parse('{"title":"js 同步之宏队列和微队列","description":"","frontmatter":{},"headers":[],"relativePath":"technologyStack/JavaScript/draft.md","filePath":"technologyStack/JavaScript/draft.md","lastUpdated":null}'),e={name:"technologyStack/JavaScript/draft.md"},t=n(`<h1 id="js-同步之宏队列和微队列" tabindex="-1">js 同步之宏队列和微队列 <a class="header-anchor" href="#js-同步之宏队列和微队列" aria-label="Permalink to &quot;js 同步之宏队列和微队列&quot;">​</a></h1><h1 id="es6" tabindex="-1">ES6 <a class="header-anchor" href="#es6" aria-label="Permalink to &quot;ES6&quot;">​</a></h1><h2 id="let-声明变量" tabindex="-1">let 声明变量 <a class="header-anchor" href="#let-声明变量" aria-label="Permalink to &quot;let 声明变量&quot;">​</a></h2><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 声明变量</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> a;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> b, c, d;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> e </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 100</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> f </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;hello&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  g </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> [];</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 1.</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div>`,4),l=[t];function p(h,r,k,c,d,o){return i(),a("div",null,l)}const g=s(e,[["render",p]]);export{b as __pageData,g as default};
