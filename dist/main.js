(()=>{"use strict";const e=(()=>{const e=document.getElementById("infoContainer");return{create:t=>{console.log("creating");for(let a=0;a<t.length-1;a++){const n=Array.from(e.children)[a],d=t[a].dateNumber,o=t[a].weatherVag,r=Math.round(t[a].dayTemp),s=Math.round(t[a].nightTemp);let c;switch(o){case"Clear":c=document.createElement("i"),c.classList.add("wi","wi-day-sunny");break;case"Clouds":c=document.createElement("i"),c.classList.add("wi","wi-day-cloudy")}const i=document.createElement("div");i.classList.add("tempDiv"),i.appendChild(document.createTextNode(`${r}/${s}`)),n.appendChild(document.createTextNode(d)),n.appendChild(c),n.appendChild(i)}}}})(),t=(console.log("finding datestuffs"),{futureDate:e=>{const t=new Date,a=new Date(t),n=a.getDate()+e;return a.setDate(n),[["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][a.getDay()],`${a.getMonth()+1}/${a.getDate()}`]}});(async(a,n)=>{try{const a="https://api.openweathermap.org/data/2.5/onecall?lat=37.3229978&lon=-122.0321823&exclude=current,hourly,minutely,alerts&units=imperial&appid=daab30e51d1d719de2096678f035d4bf";(await fetch(a,{mode:"cors"})).json().then((a=>{(a=>{const n=a.daily,d=[];for(const e in n){const a=t.futureDate(parseInt(e));d.push({dayName:a[0],dateNumber:a[1],dayTemp:n[e].temp.day,nightTemp:n[e].temp.night,weatherVag:n[e].weather[0].main,weatherDes:n[e].weather[0].description})}console.log(d),e.create(d)})(a)}))}catch(e){alert(e)}})(),document.querySelectorAll(".indivInfo").forEach((e=>{const t=document.createElement("i");t.classList.add("arrow-down"),e.addEventListener("mouseover",(()=>{e.appendChild(t)})),e.addEventListener("mouseout",(()=>{e.removeChild(t)}))}));const a=document.getElementById("searchContainer"),n=document.getElementById("searchInput");a.addEventListener("submit",(e=>{console.log(n.value),e.preventDefault()}))})();