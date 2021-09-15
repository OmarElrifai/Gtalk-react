import react , {useEffect , useState} from "react";
import {
    useParams,
    Link
} from "react-router-dom";

function Profile(){
    const [object,setobject] = useState({});
    const [url,seturl] = useState("");
    const [pos,setpos] = useState([]);
    let {id}=useParams();
    const recieve= async (id)=>{
        const response = await fetch("http://localhost:3001/friends/"+id);
        try {
            const recieved = await response.json();
            console.log(recieved)
            return recieved
        }catch(err){
            console.log(err)
        }
    }
    useEffect(()=>{
      recieve(id).then((doc)=>{
          setobject(doc);
          seturl(doc.photos[0].url);
          setpos(doc.Posts.reverse())     
        });
      
    },[]);
    
    return(
        <div>
        <div className = "profile">
        
        <img className="profile-img" src={url}/> 
        
        <div className="profile-list-container">
        <ul >
            
            <li><strong>Username:</strong> {object.Username}</li>
            <li><strong>Born:</strong>{object.DateOfBirth}</li>
            <li><strong>Nickname:</strong>{object.KnownAs}</li>
            <li><strong>Introducion:</strong></li>
            <li>{object.Introduction}</li>
            <li><strong>Interests:</strong></li>
            <li>{object.Interests}</li>
            <li><strong>City:</strong>{object.City}</li>
            <li><strong>Country:</strong>{object.Country}</li>
            
        </ul>
        </div>
        </div>
        
        <div className="post-container">
        { pos.map((item)=>{
      return(
         <div className="home-item2" key={object.id}>
           <div className="img-card2">
           <img width="100%" height="100%" src={object.photos[0].url} />
          <p><Link className="Link" to = {`/profile/${object._id}`}> {object.Username}</Link></p>
          </div>
           <p>{item}</p>
         </div>
      )
       })}
         </div>


        </div>)
}

export default Profile