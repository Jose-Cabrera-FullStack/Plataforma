import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from '../containers/Home';
import Login from '../containers/Login';
import Register from '../containers/Register';
import NotFound from '../containers/NotFound';
import Footer from '../components/Footer'

const App = () => (
    <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route component={NotFound} />
            </Switch>

        <Footer/>
    </BrowserRouter>
)

export default App;