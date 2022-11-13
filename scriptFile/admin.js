let data = JSON.parse(localStorage.getItem('registered'));

document.querySelector("#login").addEventListener('click',showData);

 function showData(event){
    event.preventDefault()
    
    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let adminid = document.querySelector("#adid").value;
    let password = document.querySelector("#password").value;
    let mobile = document.querySelector("#mobile").value;
    if(name=="vidhi sharma" && email=="vidhi98sharma@gmail.com" && adminid=="vidhi" && password=="12345" && mobile=="9999999999"){
        displayCard(data);
        alert("Login successful");
    }

}

function displayCard(data){
    data.forEach((elem)=>{
        let div = document.createElement('div');

        let name = document.createElement('h2');
        name.innerText = elem.name;

        let email = document.createElement('h3');
        email.innerText = elem.email;

        let mobile = document.createElement('h3');
        mobile.innerText = elem.mobile;

        document.querySelector("#info").append(div);
        div.append(name,email,mobile);

    })
}
