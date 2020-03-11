import React , { Component, lazy, Suspense }from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Coaching from '../containers/Coaching';
import ContactUs from '../containers/ContactUs';
import AboutUs from '../containers/AboutUs';
import FAQ from '../containers/FAQ';
import NotFound from '../containers/NotFound';
import Profile from '../containers/Profile';
import Wrapper from '../containers/Wrapper';


const App = ({ isLogged }) => (
    <BrowserRouter>
        <Switch>
                {/* <Route exact path="/" component={Wrapper(Home)} /> DEBE SER ASI! */}
                <Route exact path="/" component={(Home)} />
                <Route exact path="/login" component={(isLogged ? Home : Login)} />
                <Route exact path="/register" component={(isLogged ? Home : Register)} />
                <Route exact path="/coaching" component={(isLogged ? Coaching : Login)} />
                <Route exact path="/contactanos" component={(ContactUs)} />
                <Route exact path="/sobre-nosotros" component={(AboutUs)} />
                <Route exact path="/perfil" component={(isLogged ? Profile : Login)} />
                <Route exact path="/faq" component={(FAQ)} />
                <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App;