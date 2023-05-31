let divscroll=document.querySelector(".divscroll");
fetch("./Hindimovie.json")
  .then((response) => response.json())
  .then((data) =>{
    // console.log(data);
    
    // for(let i=0;i<=data.length;i++){
    //      const a=`<div href="gg.html" class="inside"><img height="60%" width="100%"src=${data[i].image}><p>${data[i].video}</div>`;
    
    //      divscroll.insertAdjacentHTMLap(afterbegin,a);
    // }
    for(let i=0;i<=data.length;i++){
      let a = document.createElement("a");
      // let pa=document.createElement("p");
      // console.log(p);
      a.classList.add("inside");
      a.setAttribute("href","hindimovievideo.html");
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

    let divscroll1=document.querySelector(".divscroll1");
    fetch("./Englishmovie.json")
  .then((response) => response.json())
  .then((data) =>{
    console.log('english',data);
    
    // for(let i=0;i<=data.length;i++){
    //      const a=`<div href="gg.html" class="inside"><img height="60%" width="100%"src=${data[i].image}><p>${data[i].video}</div>`;
    
    //      divscroll.insertAdjacentHTMLap(afterbegin,a);
    // }comedymovies
    for(let i=0;i<=data.length;i++){
      let a = document.createElement("a");
      // let pa=document.createElement("p");
      // console.log(p);
      a.classList.add("inside");
      a.setAttribute("href","Englishmovies.html");
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
      console.log('after');
     
      // divscroll.appendChild(p);
      console.log(a);
      console.log(im);
      
    }
    console.log(data)});