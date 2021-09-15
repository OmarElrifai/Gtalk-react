import React,{useState,useEffect,useContext} from "react";
import Authcontext from "./auth";
import {useHistory} from "react-router-dom";

function Register(){
    const auth = useContext(Authcontext);
    const history = useHistory();
    const [doc,setdoc]=useState({
        Username:"",
        Password:"",
        Gender:"Male",
        DateOfBirth:"",
        KnownAs:"",
        Introduction:"",
        Interests:"",
        City:"",
        Country:""
    });

    const [photo,setphoto]=useState({
            url:"",
            isMain:true
        });

    const [valido,setvalido]=useState({
            User:{},
            UsernameExist:"",
            UsernameAlready:"",
            PasswordExist:"",
            LoginFail:"",
            AuthSuccess:false
          }) 
        
    function change(event){
        const {name, value}=event.target;
       setdoc((prev)=>{
           return({
               ...prev,
               [name]:value
           })
       })
    }
    
    function changephoto(event){
        const {name,value} = event.target;
        setphoto((prev)=>{
            return({
                ...prev,
                [name]:value
            })
        })
    }
    
    

    function submit(){
        auth.signup({
        Username:doc.Username,
        Hash:doc.Password,
        Gender:doc.Gender,
        DateOfBirth:doc.DateOfBirth,
        KnownAs:doc.KnownAs,
        Introduction:doc.Introduction,
        Interests:doc.Interests,
        City:doc.City,
        Country:doc.Country,
        photos:[photo]    
        }).then((res)=>{
            setvalido(res);
          if(res.AuthSuccess){
              history.push("/friends")
          }
        })
        
    
    }

return(
    <div className="login">
        <input onChange={change} type="text" value={doc.Username} name="Username" placeholder="Username"/>
        <br/>
        <p>{valido.UsernameExist}</p>
        <p>{valido.UsernameAlready}</p>
        <input onChange={change} type="text" value={doc.Password} name="Password" placeholder="Password" />
        <br/>
        <p>{valido.PasswordExist}</p>
        <select onChange={change} name="Gender" style={{marginBottom:"20px",width:"80%"}} value={doc.Gender} placeholder="Gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>
        <br/>
        <input onChange={change} type="text" value={doc.DateOfBirth} name="DateOfBirth" placeholder="Date Of Birth"/>
        <br/>
        <input onChange={change} type="text" value={doc.KnownAs} name="KnownAs" placeholder="Known As" />
        <br/>
        <textarea onChange={change} rows={8} cols={44} style={{marginBottom:"20px"}} value={doc.Introduction} name="Introduction" placeholder="Introduction" />
        <br/>
        <textarea onChange={change} rows={8} cols={44}  value={doc.Interests} name="Interests" placeholder="Interests"></textarea>
        <br/>
        <p>{valido.Interests}</p>
        <input onChange={change} type="text" value={doc.City} name="City" placeholder="City" />
        <br/>
        <input onChange={change} type="text" value={doc.Country} name="Country" placeholder="Country" /> 
        <input onChange={changephoto} type="text" value={photo.url} name="url" placeholder="Profile Picture URL" />
        <br/>
        <p>{valido.ProfilePic}</p>
        <button type="submit" onClick={submit}>Submit</button>
    </div>
)
}
export default Register