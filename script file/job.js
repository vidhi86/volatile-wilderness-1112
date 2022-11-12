let url = "https://636e1776182793016f364613.mockapi.io/job";
let data =[];
async function getData(){
    try{
        let res =await fetch(url);
        let out = await res.json();
        data= out;
        console.log(out);
        displayCard(data);
    }
    catch(err){
        alert(err);
    }
}
getData()


function displayCard(data){
    data.forEach((elem)=>{
        let div = document.createElement("div");

        let comName = document.createElement("h2");
        comName.innerText = elem.company;
        
        let logo = document.createElement("img");
        logo.setAttribute("src",elem.logo);

        let exp = document.createElement('p');
        exp.innerText = elem.experience;

        let expect = document.createElement('p');
        expect.innerText = "Not Disclosed";

        let location =document.createElement("p");
        location.innerText = elem.location;

        let position = document.createElement('p');
        position.innerText = elem.position;

        let require = document.createElement('p');
        require.innerText = elem.requirements;

        div.append(comName,logo,exp,expect,location,position,require);
        document.querySelector("#container").append(div);
    })
}