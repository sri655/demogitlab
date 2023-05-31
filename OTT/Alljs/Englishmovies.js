let videoss=[
    {
      "id":"1",
      "name":"Aqua man 2",
      
      "link":"./video/Aquaman 2 And The Lost Kingdom Teaser Trailer (2023) Jason Momoa _ Warner Bros _ DCEU.mp4"
    },
   {
    "id":"2",
    "name":"Guardians of the Galaxy",
   
    "link":"./video/Marvel Studios’ Guardians of the Galaxy Vol. 3 _ Official Trailer.mp4"
   },
{
    "id":"3",
    "name":"Secret Invasion _ Official Trailer _ Disney+",
    "link":"./video/Marvel Studios’ Secret Invasion _ Official Trailer _ Disney+.mp4"
},
{
    "id":"4",
    "name":"MISSION IMPOSSIBLE 7_ Dead Reckoning",
    "link":"./video/MISSION IMPOSSIBLE 7_ Dead Reckoning - New Trailer (2023) Tom Cruise & Hayley Atwell.mp4"
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


