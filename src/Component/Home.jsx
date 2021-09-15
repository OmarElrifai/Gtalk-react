import {useState,useContext,useEffect} from "react";
import { Link } from "react-router-dom"; 
const Home = ()=>{
 const [user, setuser] = useState([]);
 const [post, setpost] = useState("");
 
 const request = async()=>{
     const res = await fetch("http://localhost:3001/getposts");
     try{
       const result = await res.json();
       return result;
     }catch(err){
         console.log(err)
     }
 };

 const writepost = async(data)=>{
  const postRequest = await fetch("http://localhost:3001/post/" + localStorage.getItem("User"),{
      method:"POST",
      credentials:"include",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(data)
  });
  try{
     const res = await postRequest.json();
     return res; 
  } catch(err){
     console.log(err)
  } 
 }
 const changeText=(event)=>{
     const {name,value}=event.target;
     setpost(value)
 }
 const SubmitPost = ()=>{
   writepost({post:post}).then(()=>{
     request().then((result)=>{setuser(result)})
    })
  
 }
 useEffect(()=>{
   request().then((result)=>{setuser(result)})
 },[])
 return (
   <div className="lists-container">
    <div className="posting">
   <textarea rows="10" cols="100" name="Post" value={post} onChange={changeText} />
   <br/>
   <button type="submit" onClick={SubmitPost} > Post</button>
   </div> 
   <div className="post-container">
  { user.map((item)=>{
      return(
         <div className="home-item" key={item.id}>
           <div className="img-card">
           <img width="100%" height="100%" src={item.user.photos[0].url} />
          <p><Link className="Link" to = {`/profile/${item.user._id}`}> {item.user.Username}</Link></p>
          </div>
           <p>{item.posts}</p>
         </div>
      )
   })
   }
   </div>
   </div>
 )
};

function postform(){
    
}
export default Home;