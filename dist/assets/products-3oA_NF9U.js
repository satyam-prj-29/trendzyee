import"./modulepreload-polyfill-B5Qt9EMX.js";/* empty css              */import{g as m,s,u as p,p as y}from"./showToast2-CWT3mgRc.js";m();const S=(u,c,d)=>{let n=m();const o=document.querySelector(`#card${c}`);let t=o.querySelector(".productQuantity").innerText,r=o.querySelector(".productPrice").innerText;r=r.replace("₹","");let i=n.find(a=>a.id===c);if(i&&t>1){t=Number(i.quantity)+Number(t),r=Number(r*t);let a={id:c,quantity:t,price:r};a=n.map(e=>e.id===c?a:e),localStorage.setItem("cartProductLS",JSON.stringify(a)),s("add")}if(i)return!1;r=Number((r*t).toFixed(2)),t=Number(t),n.push({id:c,quantity:t,price:r}),localStorage.setItem("cartProductLS",JSON.stringify(n)),p(n),s("add")},q=(u,c,d)=>{const o=document.querySelector(`#card${c}`).querySelector(".productQuantity");let t=parseInt(o.getAttribute("data-quantity"))||1;return u.target.className==="cartIncrement"&&(t<d?t+=1:t===d&&(t=d)),u.target.className==="cartDecrement"&&t>1&&(t-=1),o.innerText=t,console.log(t),o.setAttribute("data-quantity",t.toString()),t},g=document.querySelector("#productContainer"),C=document.querySelector("#productTemplate"),f=u=>{if(!u)return!1;u.forEach(c=>{const{category:d,description:n,id:o,image:t,name:r,price:i,stock:a}=c,e=document.importNode(C.content,!0);e.querySelector("#cardValue").setAttribute("id",`card${o}`),e.querySelector(".category").textContent=d,e.querySelector(".productName").textContent=r,e.querySelector(".productImage").src=t,e.querySelector(".productImage").alt=r,e.querySelector(".productStock").textContent=a,e.querySelector(".productDescription").textContent=n,e.querySelector(".productPrice").textContent=`₹${i}`,e.querySelector(".productActualPrice").textContent=`₹${(i*3).toFixed(2)}`,e.querySelector(".stockElement").addEventListener("click",l=>{q(l,o,a)}),e.querySelector(".add-to-cart-button").addEventListener("click",l=>{S(l,o)}),g.append(e)})};f(y);
