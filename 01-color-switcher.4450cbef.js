!function(){var t,e=document.querySelector("[data-start]"),a=document.querySelector("[data-stop]"),r=document.querySelector("body");function d(){var t="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));r.style.backgroundColor=t}e.addEventListener("click",(function(){d(),t=setInterval(d,1e3),e.setAttribute("disabled","disabled")})),a.addEventListener("click",(function(){clearInterval(t),e.removeAttribute("disabled","disabled")}))}();
//# sourceMappingURL=01-color-switcher.4450cbef.js.map
