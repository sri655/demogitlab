// let movies=document.querySelector(".videos");
// fetch("./newmovies.json")
//   .then((response) => response.json())
//   .then((data) =>{
//     let video=document.createElement("video");
//     // console.log(video);
//     video.setAttribute("src",`${data[0].video}`);
//     video.controls=true;
//     console.log(video);
//     movies.appendChild(video);
//   });

let create=document.querySelector(".allvideo");
let videoss=[
  {
    "id":"1",
    "name":"Thor",
    "image":"./images/Thorrr.png",
    "link":"./video/Justice league best scene batman WhatsApp status.mp4"
  },
 {
  "id":"2",
  "name":"Jumanji",
  "image":"./images/jumanji.png",
  "link":"./video/Justice league best scene batman WhatsApp status.mp4"
 }
]
let mainvid=document.querySelector(".hh");

videoss.forEach((value,index)=>{let data=`<div id="${value.id}" class="right"><img height="60%" width="100% class="in" src="${value.image}"><p>${value.name}</p><h6>${value.link}</h6></div>`
create.innerHTML +=data;
console.log(value)});



let all=document.querySelectorAll(".right");
console.log(all);

all.forEach(value=>{
  value.onclick=()=>{
    let selectedvid=value.querySelector("h6");
  //  let match=videoss.find(video=>video.id==value.dataset.id);
  //  console.log(match);
  console.log(selectedvid);
  let link=selectedvid.innerText;
  console.log(link);
mainvid.src=link;
console.log(mainvid);
  }
  
 
})