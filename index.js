import{S as i}from"./assets/vendor-qvgbjSeY.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&n(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const a="49335646-80c9a1e6c5c5033cc7f2a4c93",u="https://pixabay.com/api/",f=t=>{t=t.lenght?t:"";const r={key:a,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0};return fetch(u+"?"+new URLSearchParams(r))},m=t=>{if(t&&t.total>0){l(!1),console.log(t);const r=document.querySelector(".gallery");r.innerHTML=t.hits.map(({webformatURL:s,largeImageURL:n,tags:e})=>`
          <li class="gallery-item">
            <a class="gallery-link" href="${n}">
              <img
                class="gallery-image"
                src="${s}"
                alt="${e}"
                width="350"
                height="290"
            />
            </a>
          </li>`).join(""),new i(".gallery a",{captionsData:"alt",captionDelay:250})}else console.log("no data yet")},l=(t=!0)=>{const r=document.querySelector("div#result");t?r.classList.add("loader"):r.classList.remove("loader")};l(!1);document.querySelector(".form").addEventListener("submit",t=>{t.preventDefault(),l(!0),document.querySelector("ul.gallery").innerHTML="";const r=new FormData(t.target),s=Object.fromEntries(r),n=document.querySelector("#result");f(s.search).then(e=>{if(!e.ok)throw new Error("Server response fail");return e.json()}).then(e=>{n.innerHtml=m(e)}).catch(e=>{console.log(e),l(!1)})});
//# sourceMappingURL=index.js.map
