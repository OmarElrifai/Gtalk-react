import { useState,useContext } from "react"
import Authcontext from "./auth" ;
import {useHistory} from "react-router-dom";


function Login(){
    const auth = useContext(Authcontext);
    let history = useHistory();
    const [Login,setLogin] = useState({
        Username:"",
        Hash:""
    })
    const [message,setmessage] = useState({
        
            UsernameExist:"",
            UsernameAlready:"",
            PasswordExist:"",
            LoginFail:"",
            AuthSuccess:false
          
    })

    

    const change = (event)=>{
       const {name,value} = event.target;
        setLogin(prev=>{
           return({
               ...prev,
               [name]:value
           })
       })
    }

    const submit = () =>{
       auth.signin(Login).then(res=>{
          setmessage(res);
          if(res.AuthSuccess){
              history.push("/friends")
          }
       })
        
    }

    return(
        <div className="login">
            
            <p>{message.LoginFail}</p>    
           <input onChange={change} type="text" name="Username" placeholder="Username" value={Login.Username} />
           <br/>
           <input onChange={change} type="text" name="Hash" placeholder="Password" value={Login.Hash} />
           <br/>
           <button onClick={submit} type="submit" >Submit</button>
           
        </div>
    )
    }
    export default Login