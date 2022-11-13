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
    document.querySelector("#container").innerHTML ="";
    data.forEach((elem)=>{
        let div = document.createElement("div");

        let comName = document.createElement("h2");
        comName.innerText = elem.company;
        
        let logo = document.createElement("img");
        logo.setAttribute("src","https://img.naukimg.com/logo_images/groups/v1/4656415.gif");

        let rate = document.createElement('p');
        rate.innerText = " Rating : ⭐️ "+elem.rating;

        let exp = document.createElement('p');
        exp.innerText = "Experience : "+elem.experience;

        let expect = document.createElement('p');
        expect.innerText = "Salary : Not Disclosed";

        let location =document.createElement("p");
        location.innerText = "Location : "+elem.location;

        let position = document.createElement('p');
        position.innerText = "Position : "+elem.position;

        let require = document.createElement('p');
        require.innerText = "Requirement : "+elem.requirements;

        div.append(comName,logo,rate,exp,expect,location,position,require);
        document.querySelector("#container").append(div);
    })
}
document.querySelector("#exp").addEventListener('change',handleSort);

function handleSort(){ console.log("sun")
    let selected = document.querySelector('#exp').value;
    if(selected=="HTL"){
        data.sort((a,b)=> b.experience - a.experience);
    }
    if (selected == "LTH") {
      data.sort((a, b) => a.experience - b.experience);
    }
    displayCard(data)
}


document.querySelector("#rate").addEventListener("change", doSort);

function doSort() {
  console.log("sun");
  let selected = document.querySelector("#rate").value;
  if (selected == "HTL") {
    data.sort((a, b) => b.rating - a.rating);
  }
  if (selected == "LTH") {
    data.sort((a, b) => a.rating - b.rating);
  }
  displayCard(data);
}