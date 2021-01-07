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

import { HomeScreen } from './HomeScreen';
import { NavBar } from '../components/NavBar';
import { Contacto } from '../components/contacto';
  
export const AppRouter = () => {
    return (
       
            <Router>
        <div>

            <NavBar/>
            <Switch>
                <Route exact path="/about" component={About}/>
                <Route exact path="/proyectos" component={Proyectos}/>
                <Route exact path="/contacto" component={Contacto}/>
                <Route exact path="/" component={HomeScreen}/>
                
                <Redirect to="/about"/>

                
            </Switch>
        </div>
            </Router>
            
    )
}
