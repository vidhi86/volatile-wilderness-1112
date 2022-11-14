document.querySelector("#login").addEventListener('click',loginUser);




function loginUser(event){
   event.preventDefault();
   let arr = JSON.parse(localStorage.getItem("registered"));
  
   let email = document.querySelector("#email").value;
   let password = document.querySelector("#password").value;
   let newObj ={
      email,password
   }
   
   for ( let i=0;i<arr.length;i++){
       if (arr[i].email === newObj.email && arr[i].password === newObj.password) {
         alert("login successful")
        return (window.location.href = "index.html");
       } else {
         return alert("Wrong Credentials");
       }
   }

}
