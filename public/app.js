const input = document.createElement("input");
input.classList.add("search");
const ham = document.createElement("img");
ham.setAttribute("src","./assets/images/ham.png");
// ham.setAttribute("class","img");
ham.classList.add("img");
var x = 0; 


if(window.innerWidth<960 && x%2!=0){
  document.getElementById("ham").style.display="inherit";
  document.getElementById("nav-items").classList.add("col");
}else if (window.innerWidth<960 && x%2===0){
    document.getElementById("ham").style.display="inherit";
    document.getElementById("nav-items").style.display="none";
}else{
    document.getElementById("ham").style.display="none";
    document.getElementById("nav-items").classList.add("row");
}


window.addEventListener("resize",()=>{

    if(window.innerWidth<960 && x%2!=0){
        document.getElementById("ham").style.display="inherit";
        document.getElementById("nav-items").style.display="flex";
        document.getElementById("nav-items").classList.add("col");
        document.getElementById("nav-items").classList.remove("row");
      }else if (window.innerWidth<960 && x%2===0){
          document.getElementById("ham").style.display="inherit";
          document.getElementById("nav-items").style.display="none";
      }else{
          document.getElementById("ham").style.display="none";
          document.getElementById("nav-items").style.display="flex";
          document.getElementById("nav-items").classList.remove("col");
          document.getElementById("nav-items").classList.add("row");
      }
});
document.querySelector(".img").addEventListener("click",()=>{
    if(x%2!=0){
        document.getElementById("nav-items").style.display="none";
        x=0
    }else{
        x++;
        document.getElementById("nav-items").style.display="flex";
        document.getElementById("nav-items").classList.add("col");
        document.getElementById("nav-items").classList.remove("row");
    }
})

