import React,{useState,useContext,useEffect} from "react"; 

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect,
    useLocation,
    useHistory
  } from "react-router-dom";
import Authcontext from "./auth";  
import ham from "./images/ham.png"

const Navbar=()=>{
    const [user,setuser] = useState(localStorage.getItem("Signed") === "true" ? true:false);
    const [user1,setuser1] = useState({});

    const history = useHistory();
    // const [nuser,setnuser] = useState(localStorage.getItem("Signed") === "true" ? false:true);
    const auth = useContext(Authcontext);

    const request = async()=>{
        const res = await fetch("http://localhost:3001/friends/"+localStorage.getItem("User"));
        try{
          const result = await res.json();
          return result;
        }catch(err){
            console.log(err)
        }
    };
   
    useEffect(()=>{

      const input = document.createElement("input");
input.classList.add("search");
const ham = document.createElement("img");
ham.setAttribute("src","./assets/images/ham.png");
// ham.setAttribute("class","img");
ham.classList.add("img");
var x = 0; 


if(window.innerWidth<960 && x%2!=0){
  document.getElementById("ham").style.display="inherit";
  document.getElementById("nav-items").classList.add("cola");
}else if (window.innerWidth<960 && x%2===0){
    document.getElementById("ham").style.display="inherit";
    document.getElementById("nav-items").style.display="none";
}else{
    document.getElementById("ham").style.display="none";
    document.getElementById("nav-items").classList.add("rowa");
}


window.addEventListener("resize",()=>{

    if(window.innerWidth<960 && x%2!=0){
        document.getElementById("ham").style.display="inherit";
        document.getElementById("nav-items").style.display="flex";
        document.getElementById("nav-items").classList.add("cola");
        document.getElementById("nav-items").classList.remove("rowa");
      }else if (window.innerWidth<960 && x%2===0){
          document.getElementById("ham").style.display="inherit";
          document.getElementById("nav-items").style.display="none";
      }else{
          document.getElementById("ham").style.display="none";
          document.getElementById("nav-items").style.display="flex";
          document.getElementById("nav-items").classList.remove("cola");
          document.getElementById("nav-items").classList.add("rowa");
      }
});
document.querySelector(".img").addEventListener("click",()=>{
    if(x%2!=0){
        document.getElementById("nav-items").style.display="none";
        x=0
    }else{
        x++;
        document.getElementById("nav-items").style.display="flex";
        document.getElementById("nav-items").classList.add("cola");
        document.getElementById("nav-items").classList.remove("rowa");
    }
})

        request().then((result)=>{setuser1(result)});
      },[]);

    const Signout = ()=>{
        return ( 
        <button onClick={()=>{
            auth.signout();
            history.replace("/login");
            setuser(false);
            setuser1({});
        }} >Signout</button>)
    }
    
    return (
  //   <nav>
   
  //   <ul className="linka">
  //       {auth.user === true || user===true ? <li>{auth.userobj.Username || user1.Username}</li> :null}
  //     { auth.user === true || user===true ? <li><Link to="/Home">Home</Link></li>:null}
  //     {  auth.user === false && user===false ? <li><Link to="/register">Register</Link></li>:null}
  //     { auth.user === false && user===false ? <li><Link to="/login">Login</Link></li>:null}
  //     {  auth.user === true || user===true ? <li><Link to="/friends">friends</Link></li>:null}
  //     {  auth.user === true || user===true ? <li><Signout /></li>:null}
  //   </ul>
   
  // </nav>
  <nav id="navbar" >
  <div id="logocontain" >
      
       <img className="img" id="ham" src={ham}/> 
     
  
  <ul id="nav-items">
    
  {auth.user === true || user===true ? <li className="menu">{auth.userobj.Username || user1.Username}</li> :null}
       { auth.user === true || user===true ? <li className="menu" ><Link className="Link2" to="/Home">Home</Link></li>:null}
       {  auth.user === false && user===false ? <li className="menu"><Link className="Link2" style={{textDecoration:"none"}} to="/register">Register</Link></li>:null}
      { auth.user === false && user===false ? <li className="menu"><Link className="Link2" style={{textDecoration:"none"}} to="/login">Login</Link></li>:null}
      {  auth.user === true || user===true ? <li className="menu"><Link className="Link2" style={{textDecoration:"none"}} to="/friends">friends</Link></li>:null}
      {  auth.user === true || user===true ? <li className="signout"><Signout /></li>:null}
  </ul>
 </div> 
</nav>

  )
};



export default Navbar