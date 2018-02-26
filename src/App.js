import React from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from "./pages/SearchPage";
// import NoMatch from "./components/NoMatch";
import NanaProfile from "./components/NanaProfile";
import NanaRegister from "./components/NanaRegister";
import UserRegister from "./components/UserRegister";
import UserProfile from "./components/UserProfile";
import LoginPage from "./pages/LoginPage";
import LandingPage from "./pages/LandingPage";
import NavBar from "./components/NavBar/NavBar";
import Section1 from "./components/Landing/Section1";
import Section2 from "./components/Landing/Section2";
// authenticate = userInfo => {
//   this.setState({userInfo})
// }

const App = () => {

 {/* <Landing />
<Section1 />
<Section2 />  */}
return (
 <Router>
   <div>
    {/* <NavBar /> */}
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/search" component={SearchPage} />
      <Route path="/nana_register" component={NanaRegister} />
      <Route path="/user_register" component={UserRegister} />
      <Route path="/nanaprofile/:id" component={NanaProfile} />
      <Route path="/userprofile/:id" component={UserProfile} />
    </Switch>
   </div>
</Router>);
}

    
export default App;


