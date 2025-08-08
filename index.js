import{a as f,S as g,i as n}from"./assets/vendor-CaRFiM55.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="51669150-fb97c08ffc3fd3823d92d526e",y="https://pixabay.com/api/";function L(i){return f.get(`${y}?key=${h}&q=${i}&image_type=photo&orientation=horizontal&safesearch=true`).then(s=>s.data)}const u=document.querySelector(".gallery"),m=document.querySelector(".loader"),b=new g(".gallery a",{captionsData:"alt",captionDelay:250});function S(i){const s=i.map(({webformatURL:r,largeImageURL:o,tags:e,likes:t,views:a,comments:p,downloads:d})=>`
        <li class="gallery-item">
          <a href="${o}">
            <img src="${r}" alt="${e}" width="360" height="200" />
          </a>
          <ul class="image-stats">
            <li class="stat-item"><span class="stat-label">Likes:</span> ${t}</li>
            <li class="stat-item"><span class="stat-label">Views:</span> ${a}</li>
            <li class="stat-item"><span class="stat-label">Comments:</span> ${p}</li>
            <li class="stat-item"><span class="stat-label">Downloads:</span> ${d}</li>
          </ul>
        </li>
      `).join("");u.innerHTML=s,b.refresh()}function $(){u.innerHTML=""}function w(){m.style.display="inline"}function c(){m.style.display="none"}const q=document.querySelector(".form");q.addEventListener("submit",i=>{i.preventDefault();const s=i.currentTarget.elements["search-text"].value.trim();if(!s){n.warning({title:"Warning",message:"Please enter a search query.",position:"topRight"});return}$(),w(),L(s).then(r=>{if(c(),!r.hits.length){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}n.success({title:"Success",message:`Found ${r.hits.length} images.`,position:"topRight"}),S(r.hits)}).catch(r=>{c(),n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),console.error(r)})});const l=document.querySelector("input");l.addEventListener("input",()=>{l.value.trim()!==""?l.classList.add("filled"):l.classList.remove("filled")});
//# sourceMappingURL=index.js.map
