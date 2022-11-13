document.querySelector("#login").addEventListener('click',loginUser);


let registeredUser = JSON.parse(localStorage.getItem('registered'));
console.log(registeredUser);

let user = document.querySelector('#name').value ;
let password = document.querySelector("#password").value;


function loginUser(event){console.log(password)
   event.preventDefault();
 for (i=0;i<registeredUser.length;i++){
    
   console.log(registeredUser[i]);
 
}
}