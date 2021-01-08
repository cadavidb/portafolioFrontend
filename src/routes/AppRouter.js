import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import { About } from '../components/info/About';
import { Proyectos } from '../components/proyectos/Proyectos';

import { NavBar } from '../components/NavBar';

  
export const AppRouter = () => {
    return (
       
            <Router>
        <div>

            <NavBar/>
            <Switch>
                <Route exact path="/" component={About}/>
                <Route exact path="/about" component={About}/>
                
                <Route exact path="/proyectos" component={Proyectos}/>
               
                
                <Redirect to="/about"/>

                
            </Switch>
        </div>
            </Router>
            
    )
}
