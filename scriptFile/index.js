document
  .querySelector("#upper2 >div:nth-child(2)")
  .addEventListener("click", movePage);

document
  .querySelector("#upper2 >div:nth-child(1)")
  .addEventListener("click", movePage);

document
    .querySelector("#mid1 >div")
    .addEventListener("click", movePage);
   
document.querySelector("#upper3 ").addEventListener("click", movePage);


function movePage(){
    window.location.href="job.html"
}