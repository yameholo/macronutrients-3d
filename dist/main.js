(()=>{"use strict";const t="#F88",e="#8F8",a="#FF8",o=[{text:["a","b","c","d","e"],x:[5,3,8,9,4],y:[1.2,7.2,4.2,3.2,8.2],z:[5.2,0,8.1,9.2,2.4],mode:"markers",opacity:.5,hovertemplate:'<b>%{text}</b><br><br><span style="color:#F88">Protein: %{x} g</span><br><span style="color:#8F8">Carbohydrates: %{y} g</span><br><span style="color:#FF8">Fat: %{z} g</span>',type:"scatter3d"}],r={title:"Macronutrients",scene:{xaxis:{title:"Protein",titlefont:{color:t},zerolinecolor:t,rangemode:"tozero",autorange:!0},yaxis:{title:"Carbohydrates",titlefont:{color:e},zerolinecolor:e,rangemode:"tozero",autorange:!0},zaxis:{title:"Fat",titlefont:{color:a},zerolinecolor:a,rangemode:"tozero",autorange:!0}},hoverlabel:{bgcolor:"#999",font:{color:"#FFF"}},margin:{l:0,r:0,b:0,t:0}},n={responsive:!0},l=document.getElementById("app");(t=>{Plotly.newPlot(t,o,r,n)})(l);const s=function(t,e){return(e,a,o,r)=>{t.data[0].text.push(e),t.data[0].x.push(a),t.data[0].y.push(o),t.data[0].z.push(r),Plotly.redraw(t)}}(l),c=function(t,e){return e=>{const a=t.data[0].text.indexOf(e);a>=0&&(t.data[0].text.splice(a,1),t.data[0].x.splice(a,1),t.data[0].y.splice(a,1),t.data[0].z.splice(a,1),Plotly.redraw(t))}}(l);[{name:"test",x:5,y:5,z:5}].forEach((t=>{const e=document.createElement("a");e.classList.add("card","horizontal","link-card","blue-grey-text"),e.innerText=t.name;const a=document.createElement("div");a.classList.add("col","s12","m4"),a.appendChild(e),a.addEventListener("click",(t=>{let e=!0;return()=>{e?s(t.name,t.x,t.y,t.z):c(t.name),e=!e}})(t)),document.getElementById("items").appendChild(a)}))})();