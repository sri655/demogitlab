let videoss=[
    {
      "id":"1",
      "name":"Flames Season 2",
      
      "link":"./video/Flames Season 2 _ Official Trailer _ MX Exclusive _ MX Player _ TVF.mp4"
    },
   {
    "id":"2",
    "name":"Mismatched",
   
    "link":"./video/Mismatched _ Official Trailer _ Prajakta Koli, Rohit Saraf & Rannvijay Singha _ Netflix India.mp4"
   },
{
    "id":"3",
    "name":"Panchayat",
    "link":"./video/Panchayat - Official Trailer _ New Series 2020 _ TVF _ Amazon Prime Video.mp4"
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


