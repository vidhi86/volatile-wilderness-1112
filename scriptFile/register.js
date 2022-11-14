document.querySelector("#now").addEventListener("click", registerData );

let registerArr =JSON.parse(localStorage.getItem("registered"))  || [];

function registerData(event){
    event.preventDefault();
    let name = document.querySelector('#name').value ;

    let email = document.querySelector('#email').value ;

    let password = document.querySelector('#password').value;

    let mobile = document.querySelector('#mobile').value;
    
    
    let registerObj ={
        name,email,password,mobile,status
    }
    registerArr.push(registerObj)
    if (
      registerObj.name == "" ||
      registerObj.email == "" ||
      registerObj.password == "" ||
      registerObj.mobile == ""
    ) {
      alert("Fill all the details");
    } else {
        alert("Registeration Successful");
      localStorage.setItem("registered", JSON.stringify(registerArr));
      
    }
    
  }