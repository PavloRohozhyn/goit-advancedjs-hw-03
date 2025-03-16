import{a as p,S as m,i as n}from"./assets/vendor-30VqbI-A.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const f="49335646-80c9a1e6c5c5033cc7f2a4c93",y="https://pixabay.com/api/",g=t=>{t=t.lenght?t:"";const r={key:f,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return p.get(y+"?"+new URLSearchParams(r))},d=t=>{if(t&&t.total>0){a(!1);const r=document.querySelector(".gallery");r.innerHTML=t.hits.map(({webformatURL:i,largeImageURL:s,tags:e,likes:o,views:l,comments:c,downloads:u})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${s}">
              <img
                class="gallery-image"
                src="${i}"
                alt="${e}"
                width="350"
                height="290"
            />
            </a>
            <ul class="gallery-info">
              <li class="gallery-info-item">
                <p>Downloads</p>
                <p>${u}</p>
              </li>
              <li class="gallery-info-item">
                <p>Comments</p>
                <p>${c}</p>
              </li>
              <li class="gallery-info-item">
                <p>Views</p>
                <p>${l}</p>
              </li>
              <li class="gallery-info-item">
                <p>Likes</p>
                <p>${o}</p>
              </li>
            </ul>
          </li>`).join(""),new m(".gallery a",{captionsData:"alt",captionDelay:250})}else n.success({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",timeout:5e3})},a=(t=!0)=>{const r=document.querySelector("span.loader");t?r.hasAttribute("style")&&r.removeAttribute("style"):r.hasAttribute("style")||r.setAttribute("style","display:none")};a(!1);document.querySelector(".search-form").addEventListener("submit",t=>{t.preventDefault(),a(!0),document.querySelector("ul.gallery").innerHTML="";const r=new FormData(t.target),i=Object.fromEntries(r),s=document.querySelector("span.loader");g(i.search).then(e=>{if(e.status!=200)throw new Error("Server response fail");s.innerHtml=d(e.data)}).catch(e=>{console.log(e),n.error({message:e.message,position:"topRight",timeout:5e3}),a(!1)})});
//# sourceMappingURL=index.js.map
