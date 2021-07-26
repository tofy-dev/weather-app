(()=>{"use strict";const e=(()=>{const e=document.getElementById("infoContainer"),t=document.getElementById("cityTitle"),a=document.getElementById("weatherTitle"),d=document.querySelectorAll(".indivInfo"),r=e=>{for(;e.lastChild;)e.removeChild(e.lastChild)};return{updateToday:(e,d,n,s="none")=>{r(t),r(a),"US"===n?(t.appendChild(document.createTextNode(`${d}, ${s}`)),a.appendChild(document.createTextNode(e))):(t.appendChild(document.createTextNode(`${d}, ${n}`)),a.appendChild(document.createTextNode(e)))},create:t=>{for(let a=0;a<t.length-1;a++){const d=Array.from(e.children)[a],r=t[a].dateNumber,n=t[a].weatherVag,s=t[a].weatherDes,i=Math.round(t[a].dayTemp),c=Math.round(t[a].nightTemp);let o=document.createElement("i");switch(n){case"Thunderstorm":o.classList.add("wi","wi-thunderstorm");break;case"Drizzle":o.classList.add("wi","wi-showers");break;case"Rain":o.classList.add("wi","wi-rain");break;case"Clear":o.classList.add("wi","wi-day-sunny");break;case"Clouds":"scattered clouds"===s?o.classList.add("wi","wi-cloudy"):o.classList.add("wi","wi-day-cloudy");break;case"Mist":o.classList.add("wi","wi-sprinkle");break;case"Smoke":o.classList.add("wi","wi-smoke");break;case"Haze":o.classList.add("wi","wi-day-haze");break;case"Dust":o.classList.add("wi","wi-dust");break;case"Fog":o.classList.add("wi","wi-fog");break;case"Sand":case"Ash":o.classList.add("wi","wi-sandstorm");break;case"Tornado":o.classList.add("wi","wi-tornado");break;default:o=document.createElement("i"),o.classList.add("wi","wi-na")}const l=document.createElement("div");l.classList.add("tempDiv"),l.appendChild(document.createTextNode(`${i}/${c}`)),d.appendChild(document.createTextNode(r)),d.appendChild(o),d.appendChild(l)}},remove:()=>{d.forEach((e=>{r(e)}))}}})(),t=(console.log("finding datestuffs"),{futureDate:e=>{const t=new Date,a=new Date(t),d=a.getDate()+e;return a.setDate(d),[["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][a.getDay()],`${a.getMonth()+1}/${a.getDate()}`]}}),a=async(e,t)=>{const a=`https://api.openweathermap.org/data/2.5/onecall?lat=${e}&lon=${t}&exclude=current,hourly,minutely,alerts&units=imperial&appid=daab30e51d1d719de2096678f035d4bf`;try{const e=await fetch(a,{mode:"cors"});return await e.json()}catch(e){Promise.reject(e)}},d=async(e,t,a)=>{let d;d="US"===t?`http://api.openweathermap.org/geo/1.0/direct?q=${e},${a},${t}&limit=1&appid=daab30e51d1d719de2096678f035d4bf`:`http://api.openweathermap.org/geo/1.0/direct?q=${e},${t}&limit=1&appid=daab30e51d1d719de2096678f035d4bf`;try{const e=await fetch(d,{mode:"cors"});return await e.json()}catch(e){Promise.reject(e)}},r=async(e,t,a)=>{let d;d="US"===t?`http://api.openweathermap.org/data/2.5/weather?q=${e},${a},${t}&units=imperial&appid=daab30e51d1d719de2096678f035d4bf`:`http://api.openweathermap.org/data/2.5/weather?q=${e},${t}&units=imperial&appid=daab30e51d1d719de2096678f035d4bf`;try{const e=await fetch(d,{mode:"cors"});return await e.json()}catch(e){Promise.reject(e)}},n=async(n,s,i="none")=>{try{const c=await(async(e,t,a="none")=>{try{const r=await d(e,t,a);return[r[0].lat,r[0].lon]}catch(e){Promise.reject(e)}})(n,s,i),o=await(async(e,t)=>{try{return await a(e,t)}catch(e){Promise.reject(e)}})(c[0],c[1]),l=await(async e=>{const a=e.daily,d=[];for(const e in a){const r=t.futureDate(parseInt(e));d.push({dayName:r[0],dateNumber:r[1],dayTemp:a[e].temp.day,nightTemp:a[e].temp.night,weatherVag:a[e].weather[0].main,weatherDes:a[e].weather[0].description})}return d})(o),m=await(async(e,t,a="none")=>{try{return(await r(e,t,a)).main.temp}catch(e){Promise.reject(e)}})(n,s,i);e.remove(),e.create(l),e.updateToday(m,n,s,i)}catch(e){console.error("err",e)}};document.querySelectorAll(".indivInfo").forEach((e=>{const t=document.createElement("i");t.classList.add("arrow-down"),e.addEventListener("mouseover",(()=>{e.appendChild(t)})),e.addEventListener("mouseout",(()=>{e.removeChild(t)}))})),(()=>{const e=document.getElementById("searchContainer"),t=document.getElementById("searchInput");e.addEventListener("submit",(e=>{e.preventDefault();const a=t.value.split(", ");3===a.length?n(a[0],a[2],a[1]):n(a[0],a[1]),t.value=""}))})(),n("London","GB")})();