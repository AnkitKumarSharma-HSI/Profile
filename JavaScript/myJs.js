let bars=document.getElementById("bars");
let header=document.getElementById("header-main");

bars.addEventListener("click",()=>{
  mySideBar();
});
let sideBar = document.getElementsByClassName("sideBar")[0];

function mySideBar() {
  let barsClass = document.getElementById("bars");
  if (barsClass.name == "reorder-three-outline") {
    barsClass.name = "close-outline";
    sideBar.style = "left:0%;";
    // console.log(sideBar);
  } else {
    barsClass.name = "reorder-three-outline";
    sideBar.style = "left:-100%;";
  }
  // alert("Hello It's Working");
}
let resumeBtn=document.getElementById("closeBtnResume");
let resumeViewAndDownloadBtn=document.getElementById("resumeViewAndDownloadBtn");

let resumeContainer=document.getElementById("resumeViewerAndDownloader");

resumeBtn.addEventListener("click",()=>{
  resumeContainer.classList.add("d-none");
// alert("Hello");
});
resumeViewAndDownloadBtn.addEventListener("click",()=>{
  resumeContainer.classList.remove("d-none");
});