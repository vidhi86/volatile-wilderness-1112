document.querySelector("#login").addEventListener('click',loginUser);




function loginUser(event){
   event.preventDefault();
   let obj = JSON.parse(localStorage.getItem("registered"));
  console.log(obj)
   let email = document.querySelector("#email").value;
   let password = document.querySelector("#password").value;
   let newObj ={
      email,password
   }
   console.log(newObj)
 if(obj.email===newObj.email && obj.password===newObj.password){
   return window.location.href ="index.html"
   
 }
 else{
   return alert("Wrong Credentials");
   
 }
}
