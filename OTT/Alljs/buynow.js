let gold=document.querySelector(".gold  h1");
let silver=document.querySelector(".silver  h1");
let diamond=document.querySelector(".Diamond  h1");
console.log(silver,diamond);

let gp=document.querySelector(".gold p");

let sp=document.querySelector(".silver p");
let dp=document.querySelector (".Diamond p");
console.log(sp,dp);
// console.log(gp);
// console.log(gold);
// dp.style.visibility="hidden";
// gp.style.visibility="visible";
// sp.style.visibility="hidden";
gold.addEventListener("click",function(){
gp.style.visibility="visible";
sp.style.visibility="hidden";
dp.style.visibility="hidden";
})

silver.addEventListener("click",function(){
    gp.style.visibility="hidden";
    sp.style.visibility="visible";
    dp.style.visibility="hidden";
    })

    diamond.addEventListener("click",function(){
        console.log("jjjjjjj");
        dp.style.visibility="visilble";
        gp.style.visibility="hidden";
        sp.style.visibility="hidden";
    
        })