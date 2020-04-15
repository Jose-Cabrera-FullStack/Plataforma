import React , { Component, lazy, Suspense }from 'react';
import {BrowserRouter,Switch,Route,Redirect} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Coaching from '../containers/Coaching';
import ContactUs from '../containers/ContactUs';
import AboutUs from '../containers/AboutUs';
import FAQ from '../containers/FAQ';
import NotFound from '../containers/NotFound';
import Profile from '../containers/Profile';
import Confirm from '../containers/Confirm';
import Wrapper from '../containers/Wrapper';


const App = ({ isLogged }) => (
    <BrowserRouter>
        <Switch>
                <Redirect exact from="/" to="/home" component={Wrapper(Home)} />
                <Route exact path="/home" component={Wrapper(Home)} />
                <Route exact path="/login" component={Wrapper(isLogged ? Home : Login)} />
                <Route exact path="/confirm:id" component={Wrapper(Confirm)} id/>
                <Route exact path="/register" component={Wrapper(isLogged ? Home : Register)} />
                <Route exact path="/coaching" component={Wrapper(isLogged ? Coaching : Login)} />
                <Route exact path="/contactanos" component={Wrapper(ContactUs)} />
                <Route exact path="/sobre-nosotros" component={Wrapper(AboutUs)} />
                <Route exact path="/perfil" component={Wrapper(isLogged ? Profile : Login)} />
                <Route exact path="/faq" component={Wrapper(FAQ)} />
                <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
)

export default App;