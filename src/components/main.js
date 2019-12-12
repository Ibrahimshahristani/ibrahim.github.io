import React from 'react';
import Landingpage from './Landingpage';
import { Switch, Route } from 'react-router-dom';

import Contact from './contact';
import Aboutme from './aboutme';
//import Resume from './resume';
import Projects from './project';

const Main = () =>(
    
    <Switch>
        <Route exact path="/" component = {Landingpage}/>
        <Route  path="/aboutme" component = {Aboutme}/>
        <Route  path="/contact" component = {Contact}/>
        <Route  path="/project" component = {Projects}/>

    </Switch>

);
export default Main;