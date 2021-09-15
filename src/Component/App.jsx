import react , {useContext,createContext,useState} from "react";
import Lists from "./Lists";
import Profile from "./Profile";
import Login from "./Login";
import Own from "./Own";
import Register from "./Register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useHistory
} from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Authcontext , { ProvideAuth } from "./auth";
import Navbar from "./navbar";
import Home from "./Home";
import Welcome from "./Welcome";

// const object = recieve("http://localhost:3001")

function App() {
  const auth = useContext(Authcontext)
  return (
  <ProvideAuth>  
  <Router>
  <div className="App">
        <header className="App-header">
         {/* <Link to ="/friends">friends</Link>
         <Link to ="/">home</Link> */}
         <Navbar/>

         <hr/>
         <Switch>
           <Route exact path="/"><Welcome/></Route>
           <Route exact path="/register"><Register/></Route>
           <Route exact path="/login"><Login/></Route>
           <PrivateRoute exact path="/Home"><Home/></PrivateRoute>
           <PrivateRoute exact path="/friends"><Lists/></PrivateRoute>
           <PrivateRoute exact path="/own"><Own/></PrivateRoute>
           <PrivateRoute exact path="/profile/:id"><Profile/></PrivateRoute>
           
           
         </Switch>
         
        </header>
        <footer id="footer" >
   <p1> &#169; Develop with Rif</p1>
    </footer>
      </div>
  </Router>
  </ProvideAuth>
      );
}



function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

export default App;
