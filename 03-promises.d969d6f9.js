function e(e,o){return new Promise(((t,n)=>{setTimeout((()=>{Math.random()>.3?t({position:e,delay:o}):n({position:e,delay:o})}),o)}))}const o=document.querySelector(".form");o.addEventListener("submit",(t=>{t.preventDefault();const n=Number(o.elements.delay.value),l=Number(o.elements.step.value),s=Number(o.elements.amount.value);for(let o=1;o<=s;o++)e(o,n+l*(o-1)).then((({position:e,delay:o})=>{console.log(`✅ Fulfilled promise ${e} in ${o}ms`)})).catch((({position:e,delay:o})=>{console.log(`❌ Rejected promise ${e} in ${o}ms`)}))}));
//# sourceMappingURL=03-promises.d969d6f9.js.map
