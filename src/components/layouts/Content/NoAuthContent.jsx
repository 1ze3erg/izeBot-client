import { Redirect, Route, Switch } from "react-router";
import Home from "../../pages/Home";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

function NoAuthContent() {
    return (
        <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Redirect from="/" to="/home" />
        </Switch>
    );
}

export default NoAuthContent;
