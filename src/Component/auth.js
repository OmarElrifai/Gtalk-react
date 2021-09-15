import React , {createContext, useState } from "react";


const Authcontext = createContext();


 
export const ProvideAuth =  ({children})=>{
    const [user, setuser] = useState(false);
    const [userobj, setuserobj] = useState({});
    const signup=async(data)=>{
        const request = await fetch("http://localhost:3001/register",{
            method:'POST',
            credentials:'include',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        });
        try{
            const response= await request.json();
            if(response.AuthSuccess) {
                localStorage.setItem("User", response.User._id);
                localStorage.setItem("Signed", true);
                setuser(true);
                setuserobj(response.User);
            };
            
            return response;
        }catch(error){
            console.log(error)
        }
    }
    
    const signin= async(data)=>{
        const req = await fetch("http://localhost:3001/login",{
            method:"POST",
            credentials:"include",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
        });
        try{
        const res = await req.json();
        if(res.AuthSuccess) {
            localStorage.setItem("User", res.User._id);
            localStorage.setItem("Signed", true);
            setuser(true);
            setuserobj(res.User);
        };
        return res;
        }catch(err){
            console.log(err.message)
        }
    }
    const signout = ()=>{
       localStorage.removeItem("User");
       localStorage.removeItem("Signed")
       setuser(false);
       setuserobj({});
    };
     
    
    
    const context={signout, signup, signin, user, userobj}
    return (<Authcontext.Provider value={context} >{children}</Authcontext.Provider>)
}
export default Authcontext;