import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'


import Login from './pages/Login/login.js';
import Register from './pages/Register/register.js';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/register" component={Register} />
            </Switch>
        </BrowserRouter>
    )
}