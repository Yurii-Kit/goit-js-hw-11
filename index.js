import{a as g,S as h,i as a}from"./assets/vendor-5l-LjSpL.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const L="49318399-651ca0146c73ba5cb36d392c8",q="https://pixabay.com/api/";function b(n){const t={key:L,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15};return g.get(q,{params:t})}const p=document.querySelector(".gallery");let c=null;function d(n){l();const t=n.map(({webformatURL:o,largeImageURL:s,tags:e,likes:r,views:i,comments:m,downloads:y})=>`<li>
          <a href="${s}">
            <img src="${o}" alt="${e}" loading="lazy"/>
          </a>
          <div class="info">
            <p>Likes: ${r}</p>
            <p>Views: ${i}</p>
            <p>Comments: ${m}</p>
            <p>Downloads: ${y}</p>
          </div>
        </li>`).join("");p.insertAdjacentHTML("beforeend",t),c?c.refresh():c=new h(".gallery a")}function l(){p.innerHTML=""}function f(){document.querySelector(".loader").style.display="block"}function S(){document.querySelector(".loader").style.display="none"}const u=document.querySelector(".form"),P=u.querySelector("input");a.info({title:"Hello",message:"Please enter a search query"});u.addEventListener("submit",n=>{n.preventDefault();const t=P.value.trim();if(console.log(t),!t){console.log("Empty query detected"),a.warning({title:"Warning",message:"Please enter a search query correctly"}),n.currentTarget.reset(),l(),f();return}l(),f(),console.log("Loader shown"),b(t).then(o=>{const s=o.data;console.log(s),s.hits.length===0?(a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),l(),u.reset()):d(s.hits)}).catch(o=>{console.log(o),a.error({title:"Error",message:`${o.message}`})}).finally(()=>{d(data.hits)&&S()})});
//# sourceMappingURL=index.js.map
