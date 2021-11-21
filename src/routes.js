import React from "react";
import Home from './containers/home/index'
import Users from "./containers/Order";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
} from "react-router-dom";

function Routes() {
    return(
    <Router>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/users" component={Users}/>
        </Switch>
    </Router>
    )

}
export default Routes