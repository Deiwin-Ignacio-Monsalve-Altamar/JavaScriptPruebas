import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from '../containers/Home';
import Login from '../containers/Login';
import NotFound from '../containers/NotFound';
import Register from '../containers/Registrer';
import Layout from '../componets/Layout'; 

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route component={NotFound} />
            </Switch>

        </Layout>
    </BrowserRouter>
);

export default App;
