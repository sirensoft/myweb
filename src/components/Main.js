import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from '../App';
import MyFormdata from './MyFormData';

const Main = () => (

    <BrowserRouter>
        <div>
            <Link to='/app'>หน้าแรก</Link> |
            <Link to='/data'>กรอกข้อมูล</Link>
            
            <Switch>
                <Route exact path='/app' component={App} />
                <Route path='/data' component={MyFormdata} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default Main;
