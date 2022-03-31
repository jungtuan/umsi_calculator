(()=>{var e,t={195:()=>{},107:()=>{!function(){"use strict";var e=document.querySelector("#footprint");if(!e)return null;e.addEventListener("submit",(function(t){e.checkValidity(),t.preventDefault(),t.stopPropagation();var r=document.querySelector("#spinner");r&&(r.closest("button").setAttribute("disabled",!0),r.classList.remove("d-none"),r.classList.add("d-inline-flex")),e.classList.add("was-validated");var n=new FormData(e);n.append("sector_id",27),n.append("location_id",1309);var o=new URL("https://coolclimate.org/business-calculator/stage/api/calculator/defaults");for(var a of n.entries())"electricity"!=a[0]&&o.searchParams.append(a[0],a[1]);fetch(o,{method:"GET",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((e=>e.json())).then((e=>{e.sqFeet=Number.parseInt(n.get("sqFeet")),e.electricity=Number.parseInt(n.get("electricity")),e.naturalGas=Number.parseInt(n.get("naturalGas")),e.otherFuel=Number.parseInt(n.get("otherFuel")),e.electronics=Number.parseInt(n.get("electronics")),e.solidWaste=Number.parseInt(n.get("solidWaste")),e.recycling=Number.parseInt(n.get("recycling")),console.info(e);var t=new URL("https://coolclimate.org/business-calculator/stage/api/calculator/compute");fetch(t,{method:"POST",mode:"cors",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((e=>e.json())).then((e=>{console.info(e);var t=document.querySelector("#total-carbon");t&&(t.innerText=e.totalEmissions?Math.round(100*e.totalEmissions)/100:0);var r=document.querySelector("#facilities-carbon");r&&(r.innerText=e.facilitiesEmissions?Math.round(100*e.facilitiesEmissions)/100:0);var n=document.querySelector("#electricity-carbon");n&&(n.innerText=e.electricity?Math.round(100*e.electricity)/100:0);var o=document.querySelector("#naturalGas-carbon");o&&(o.innerText=e.naturalGas?Math.round(100*e.naturalGas)/100:0);var a=document.querySelector("#otherFuel-carbon");a&&(a.innerText=e.otherFuel?Math.round(100*e.otherFuel)/100:0);var i=document.querySelector("#electronics-carbon");i&&(i.innerText=e.electronics?Math.round(100*e.electronics)/100:0);var c=document.querySelector("#solidWaste-carbon");c&&(c.innerText=e.solidWaste?Math.round(100*e.solidWaste)/100:0);var s=document.querySelector("#recycling-carbon");s&&(s.innerText=e.recycling?Math.round(100*e.recycling)/100:0);var l=document.querySelector("#procurement-carbon");l&&(l.innerText=e.procurementEmissions?Math.round(100*e.procurementEmissions)/100:0);var u=document.querySelector("#transportation-carbon");u&&(u.innerText=e.transportationEmissions?Math.round(100*e.transportationEmissions)/100:0);var d=document.querySelector("#food-carbon");d&&(d.innerText=e.foodEmissions?Math.round(e.foodEmissions):0);var m=document.querySelector("#spinner");m&&(m.closest("button").removeAttribute("disabled"),m.classList.add("d-none"),m.classList.remove("d-inline-flex"))}))}))}),!1);var t=document.querySelector("#reset-form");t&&t.addEventListener("submit",(function(e){var t=document.querySelector("#total-carbon");t&&(t.innerText=0);var r=document.querySelector("#facilities-carbon");r&&(r.innerText=0);var n=document.querySelector("#electricity-carbon");n&&(n.innerText=0);var o=document.querySelector("#procurement-carbon");o&&(o.innerText=0);var a=document.querySelector("#transportation-carbon");a&&(a.innerText=0);var i=document.querySelector("#food-carbon");i&&(i.innerText=0);var c=document.querySelector("#spinner");c&&(c.closest("button").removeAttribute("disabled"),c.classList.add("d-none"),c.classList.remove("d-inline-flex"))}))}()},971:(e,t,r)=>{"use strict";r(169),r(107);var n,o,a,i,c=r(711),s=r.n(c);s().init({duration:800}),n=document.body,o=function(){s().refresh()},i=n.clientHeight,function e(){a=n.clientHeight,i!==a&&o(),i=a,n.heightChangeTimer&&clearTimeout(n.heightChangeTimer),n.heightChangeTimer=setTimeout(e,200)}()}},r={};function n(e){var o=r[e];if(void 0!==o)return o.exports;var a=r[e]={exports:{}};return t[e].call(a.exports,a,a.exports,n),a.exports}n.m=t,e=[],n.O=(t,r,o,a)=>{if(!r){var i=1/0;for(u=0;u<e.length;u++){for(var[r,o,a]=e[u],c=!0,s=0;s<r.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((e=>n.O[e](r[s])))?r.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(u--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var u=e.length;u>0&&e[u-1][2]>a;u--)e[u]=e[u-1];e[u]=[r,o,a]},n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={826:0};n.O.j=t=>0===e[t];var t=(t,r)=>{var o,a,[i,c,s]=r,l=0;if(i.some((t=>0!==e[t]))){for(o in c)n.o(c,o)&&(n.m[o]=c[o]);if(s)var u=s(n)}for(t&&t(r);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(u)},r=self.webpackChunkumich=self.webpackChunkumich||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.O(void 0,[736],(()=>n(971)));var o=n.O(void 0,[736],(()=>n(195)));o=n.O(o)})();
//# sourceMappingURL=index.bundle.js.map