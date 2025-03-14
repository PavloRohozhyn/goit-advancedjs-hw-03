import{S as a}from"./assets/vendor-qvgbjSeY.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();const i="49335646-80c9a1e6c5c5033cc7f2a4c93",u="https://pixabay.com/api/",f=t=>{t=t.lenght?t:"";const r={key:i,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return fetch(u+"?"+new URLSearchParams(r))},d=t=>{if(t&&t.total>0){s(!1),console.log(t);const r=document.querySelector(".gallery");r.innerHTML=t.hits.map(({webformatURL:l,largeImageURL:n,tags:e})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${n}">
              <img
                class="gallery-image"
                src="${l}"
                alt="${e}"
                width="350"
                height="290"
            />
            </a>
          </li>`).join(""),new a(".gallery a",{captionsData:"alt",captionDelay:250})}else console.log("no data yet")},s=(t=!0)=>{const r=document.querySelector("div#loader");t?r.classList.add("loader"):r.classList.remove("loader")};s(!1);document.querySelector(".form").addEventListener("submit",t=>{t.preventDefault(),s(!0),document.querySelector("ul.gallery").innerHTML="";const r=new FormData(t.target),l=Object.fromEntries(r),n=document.querySelector("#loader");f(l.search).then(e=>{if(!e.ok)throw new Error("Server response fail");return e.json()}).then(e=>{n.innerHtml=d(e)}).catch(e=>{console.log(e),s(!1)})});
//# sourceMappingURL=index.js.map
