import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/landing-page';
import About from '../About/about';
import Projects from '../Projects/projects';
import Contact from '../Contact/contact';
import Resume from '../Resume/resume';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
    </Switch>
)
    


export default Main;