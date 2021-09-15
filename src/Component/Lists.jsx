import react , {useState , useEffect} from "react";
import {Link} from "react-router-dom";
const Lists = ()=>{
    const [object, setobject] = useState([])
    const recieve = async ()=>{
      const response = await fetch('http://localhost:3001/');
      try{
        const recieved = await response.json();
        // const gender = recieved[0].Name
        return recieved;
      }catch(error){
         console.log(error)
      }
    };
    useEffect(()=>{
      recieve().then(recieved=>{setobject(recieved); console.log(recieved)})
    },[])
   
    return (<div className="lists-container">
        <div className="lists">
            {object.map((element)=>{
                    return(<div className="item" key={element._id}>
                        <ul style={{listStyleType: "none"}} >
                            <li><img src={element.photos[0].url}/></li>
                            <li><Link className="Link" to = {`/profile/${element._id}`}    >{element.Username}</Link></li>
                            <li>{element.Interests}</li>
                        </ul>
                   </div>)  
              })}
        </div>
        </div>
        );
}
export default Lists