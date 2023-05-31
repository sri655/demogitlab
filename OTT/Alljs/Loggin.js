function clearErrors(){

    errors = document.getElementsByClassName('formerror');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    //sets error inside tag of id 
    element = document.getElementById(id);
    element.getElementsByClassName('formerror')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    //perform validation and if validation fails, set the value of returnval to false
    var name = document.forms['myForm']["fname"].value;
    if (name.length<5){
        seterror("name", "*Length of name is too short");
        returnval = false;
    }

    if (name.length == 0){
        seterror("name", "*Length of name cannot be zero!");
        returnval = false;
    }

    var email = document.forms['myForm']["femail"].value;
    if (email.length>15){
        seterror("email", "*Email length is too long");
        returnval = false;
    }

    var phone = document.forms['myForm']["fphone"].value;
    if (phone.length != 10){
        seterror("phone", "*Phone number should be of 10 digits!");
        returnval = false;
    }

    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6){

        // Quiz: create a logic to allow only those passwords which contain atleast one letter, one number and one special character and one uppercase letter
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }

    return returnval;
}



// Registration start
var myArr =[["srikanta","9040720090","sri@gmail.com","sri@12456"]];




// localStorage.setItem('signupdetail',JSON.stringify(myArr));





function register()

{




  let name1 = document.getElementById("name1").value;

  let phone1 = document.getElementById("phone1").value;

  let email1 = document.getElementById("email1").value;

 let pass1= document.getElementById("pass1").value;








let arr =[name1, phone1, email1, pass1];





let myData = localStorage.getItem('signupdetail');


let Getdata = JSON.parse(myData);






Getdata.push(arr);

localStorage.setItem('signupdetail',JSON.stringify(Getdata));




alert( name1 +"'"+ ", Welcome To Entertainment World");






}





function loadd(arr)

{

 const myData = localStorage.getItem('arr');




 let dataa = JSON.parse(myData);




 dataa.push(arr);
 localStorage.setItem('arr',JSON.stringifydataa);

}
