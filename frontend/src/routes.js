import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Login from './pages/Login/login'
import Register from './pages/Register/register'
import Dashboard from './pages/Dashboard/dashboard'
import CreateClassroom from './pages/CreateClassroom/createClassroom'


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/create_classroom" component={CreateClassroom}/>
            </Switch>
        </BrowserRouter>
    )
}