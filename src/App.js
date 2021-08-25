import './scss/main.scss'
import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import AboutUs from "./pages/aboutUs";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Class from "./pages/class";
import Coming from "./pages/coming";
import Login from "./pages/login";
import Team from "./pages/team";
import Todoapp from "./pages/todoapp";
import Shopping from "./pages/shopping"
import Instagram from "./pages/instagram"

function App() {
  return (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/login" exact component={Login} />
            <Route path="/aboutUs" exact component={AboutUs}/>
            <Route path="/contact" exact component={Contact}/>
            <Route path="/class" exact component={Class}/>
            <Route path="/team" exact component={Team}/>
            <Route path="/coming" exact component={Coming}/>
            <Route path="/todoapp" exact component={Todoapp}/>
            <Route path="/shopping" exact component={Shopping}/>
            <Route path="/instagram" exact component={Instagram}/>
        </Switch>
    </BrowserRouter>
  );
}

export default App;
