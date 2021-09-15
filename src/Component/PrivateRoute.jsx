import { useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";
import Authcontext from "./auth";

const PrivateRoute = ({children,...rest})=>{
   const auth = useContext(Authcontext);
   const location = useLocation()
  return( <Route
     {...rest}
     render={({location})=>localStorage.getItem("User") ? (children) : (<Redirect to={{
        pathname: "/login",
        state: { from: location }
      }} />
      )
    
}
   />)
}

export default PrivateRoute;