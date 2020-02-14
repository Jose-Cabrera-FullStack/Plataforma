import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Coaching from '../containers/Coaching';
import ContactUs from '../containers/ContactUs';
import AboutUs from '../containers/AboutUs';
import FAQ from '../containers/FAQ';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout'

const App = () => (
    <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/coaching" component={Coaching} />
                    <Route exact path="/contactanos" component={ContactUs} />
                    <Route exact path="/sobre-nosotros" component={AboutUs} />
                    <Route exact path="/faq" component={FAQ} />
                    <Route component={NotFound} />
                </Switch>
            </Layout>
    </BrowserRouter>
)

export default App;