let videoss=[
    {
      "id":"1",
      "name":"Thor",
      
      "link":"./video/Justice league best scene batman WhatsApp status.mp4"
    },
   {
    "id":"2",
    "name":"Jumanji",
   
    "link":"./video/Justice league best scene batman WhatsApp status.mp4"
   },
{
    "id":"3",
    "name":"hari",
    "link":"./video/Bhediya status _ bhediya first-person scene _ bhediya concept teaser _ howling scene _ video link.mp4"
},
{
    "id":"3",
    "name":"hari",
    "link":"./video/Bhediya status _ bhediya first-person scene _ bhediya concept teaser _ howling scene _ video link.mp4"
},
{
    "id":"3",
    "name":"hari",
    "link":"./video/Bhediya status _ bhediya first-person scene _ bhediya concept teaser _ howling scene _ video link.mp4"
},{
    "id":"3",
    "name":"hari",
    "link":"./video/Bhediya status _ bhediya first-person scene _ bhediya concept teaser _ howling scene _ video link.mp4"
}


// ${value.name}

  ];
let container=document.querySelector(".container");

  videoss.forEach((value,index)=>{let data=`<div  class="video"><video class="vid" height="60%" width="100% class="in" src="${value.link}"></video><h1 class="h1">${value.name}</h1></div>`

  container.innerHTML +=data;
//   container.innerHTML +=h1;
  console.log(value.name);
console.log(value)});







let allvideo=document.querySelectorAll(".video  video");
let small
let mainvideo=document.querySelector(".mainvideo");
let popup=document.querySelector(".popup");
allvideo.forEach((value)=>{
    value.addEventListener("click",function(){
        
        mainvideo.src=value.src;
        popup.style.display="block";

    })
})

let close=document.querySelector(".close");
close.addEventListener("click",function(){
    popup.style.display="none";
   mainvideo.pause();
})


