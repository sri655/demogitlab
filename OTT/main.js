let caras= document.querySelectorAll(".caraimg");



let counter=0;

caras.forEach((value,index)=>{
    value.style.left=`${index*100}%`;
}
)

let right=document.querySelector(".right");
let left =document.querySelector(".left");
// right.addEventListener("click",function(){
//  caras.forEach((value)=>{
//     // value.style.transform=`translateX(-${counter*100}%)`
//     console.log(value);
//  })
// })

// let indexfile1 = document.querySelector(".indexfile");
// console.log("consoling", indexfile1);

// document.getElementById("demo")
// let h = document.getElementById("kk");
// console.log("consoling", h);

// let a=document.createElement("a");
// let divscroll=document.querySelector(".divscroll");
// a.classList.add("inside");
// a.setAttribute("href","gg.html");
 let divscroll=document.querySelector(".divscroll");

fetch("./indi.json")
  .then((response) => response.json())
  .then((data) =>{
    
    // for(let i=0;i<=data.length;i++){
    //      const a=`<div href="gg.html" class="inside"><img height="60%" width="100%"src=${data[i].image}><p>${data[i].video}</div>`;
    
    //      divscroll.insertAdjacentHTMLap(afterbegin,a);
    // }
    for(let i=0;i<=data.length;i++){
      let a = document.createElement("a");
      // let pa=document.createElement("p");
      // console.log(p);
      a.classList.add("inside");
      a.setAttribute("href","allvideo.html");
      let im=document.createElement('img');
      let p=document.createElement('p');
        p.innerHTML=`${data[i].name}`;
     console.log(p);
      im.setAttribute("height","60%");
      im.setAttribute("width","100%");
      
      im.setAttribute("src",data[i].image);
      
      a.appendChild(im);
      a.appendChild(p);
      divscroll.appendChild(a);
     
      // divscroll.appendChild(p);
      console.log(a);
      console.log(im);
      
    }
  




    
    
    console.log(data)});

// This is for scroll in dex page

    let rightscroll=document.querySelector(".fa-forward-step");
    rightscroll.addEventListener("click",function(){
      divscroll.scrollLeft+=190;
    });

    let leftscroll=document.querySelector(".fa-backward-step");
    leftscroll.addEventListener("click",function(){
      divscroll.scrollLeft-=190;
    });

    let divscrolll=document.querySelector(".divscroll1");

     


    
  
//     console.log(allvideos);

//  let allvideos=document.querySelector(".allvideo");
//     fetch("./indi.json")
//   .then((response) => response.json())
//   .then((data) =>{
    
//     // for(let i=0;i<=data.length;i++){
//     //      const a=`<div href="gg.html" class="inside"><img height="60%" width="100%"src=${data[i].image}><p>${data[i].video}</div>`;
    
//     //      divscroll.insertAdjacentHTMLap(afterbegin,a);
//     // }
//     for(let i=0;i<=data.length;i++){
//       let a = document.createElement("a");
//       // let pa=document.createElement("p");
//       // console.log(p);
//       a.classList.add("in");
      
//       let im=document.createElement('img');
//       let p=document.createElement('p');
//         p.innerHTML=`${data[i].name}`;
//      console.log(p);
//       im.setAttribute("height","60%");
//       im.setAttribute("width","100%");
      
//       im.setAttribute("src",data[i].image);
      
//       a.appendChild(im);
//       a.appendChild(p);
//  allvideos.appendChild(a);
     
//       // divscroll.appendChild(p);
//       console.log(a);
//       console.log(im);
      
//     }
  




    
    
//     console.log(data)});

let divscroll1=document.querySelector(".divscroll1");
console.log("yti",divscroll1);

fetch("./comedymovies.json")
  .then((response) => response.json())
  .then((data) =>{
    
    // for(let i=0;i<=data.length;i++){
    //      const a=`<div href="gg.html" class="inside"><img height="60%" width="100%"src=${data[i].image}><p>${data[i].video}</div>`;
    
    //      divscroll.insertAdjacentHTMLap(afterbegin,a);
    // }comedymovies
    for(let i=0;i<=data.length;i++){
      let a = document.createElement("a");
      // let pa=document.createElement("p");
      // console.log(p);
      a.classList.add("inside");
      a.setAttribute("href","comedymovies.html");
      let im=document.createElement('img');
      let p=document.createElement('p');
        p.innerHTML=`${data[i].name}`;
     console.log(p);
      im.setAttribute("height","60%");
      im.setAttribute("width","100%");
      
      im.setAttribute("src",data[i].image);
      
      a.appendChild(im);
      a.appendChild(p);
      divscroll1.appendChild(a);
     
      // divscroll.appendChild(p);
      console.log(a);
      console.log(im);
      
    }
    console.log(data)});




    let divscroll2=document.querySelector(".divscroll2");

    fetch("./action.json")
      .then((response) => response.json())
      .then((data) =>{
        
        // for(let i=0;i<=data.length;i++){
        //      const a=`<div href="gg.html" class="inside"><img height="60%" width="100%"src=${data[i].image}><p>${data[i].video}</div>`;
        
        //      divscroll.insertAdjacentHTMLap(afterbegin,a);
        // }
        for(let i=0;i<=data.length;i++){
          let a = document.createElement("a");
          // let pa=document.createElement("p");
          // console.log(p);
          a.classList.add("inside");
          a.setAttribute("href","allvideo.html");
          let im=document.createElement('img');
          let p=document.createElement('p');
            p.innerHTML=`${data[i].name}`;
         console.log(p);
          im.setAttribute("height","60%");
          im.setAttribute("width","100%");
          
          im.setAttribute("src",data[i].image);
          
          a.appendChild(im);
          a.appendChild(p);
          divscroll2.appendChild(a);
         
          // divscroll.appendChild(p);
          console.log(a);
          console.log(im);
          
        }
      
    
    
    
    
        
        
        console.log(data)});