import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main';

export default function Routes() {
    return(
        <BrowserRouter>
            <Route path="/" exact component={Login}/>
            <Route path="/main" component={Main}/>
            <Route path="/register" component={Register}/>
        </BrowserRouter>
    );
}