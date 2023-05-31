// let arr=[
//     {
//         "name":"srikanta",
//         "pass":"hjk"
//     }
// ]
// // console.log(arr[0].name);
// let namee="sumanta";
// let pass="klkl";
// arr.push({
//     "name":namee,
//     "pass":pass
// })
// console.log(arr);
// JSON.stringify(arr);
// let av="navin";
// for(let i=0;i<=arr.length;i++){
//     // if(arr[i].name==av){
//     //     console.log();
//     // }
//     // else{
//     //     console.log("no");
//     // }
//     var ab = JSON.parse(arr[0].name);

//     arr[i].name;
//     console.log(ab);
// }
// let containerforsignup=document.querySelector(".containerforsignup");
// let register=document.querySelector(".register");
// register.addEventListener("click",function(){
//     containerforsignup.classList.remove("dis");
// })

// let Close=document.querySelector(".Close");
// Close.addEventListener("click",function(){
//     containerforsignup.classList.add("dis");
// })
function login()
{

    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
 


   let getUserDetail = localStorage.getItem("signupdetail");
   let getUserDetail2 = JSON.parse(getUserDetail);

   let booleanV ="No";


    for(let j=0;j<getUserDetail2.length;j++)
    {
      let inAr = getUserDetail2[j];
         for(let i=0;i<inAr.length;i++)
         {
                  //  if(inAr[i]==`${uname}` && inAr[i]==`${passwor}`)
                  if(inAr.includes(email) && inAr.includes(pass))
                       {
                             booleanV="Yes";
                             break;
                       }
                       
                       else{
                        booleanV="No";
                       }

       
         }
         if(booleanV=="Yes")
         {
          break;
         }
    }



   if(booleanV=="Yes"){

    window.location.href = "./index.html";
       
  alert("Welcome Back  " + email);
   
}
else{
    alert("invalid password");
}
}














