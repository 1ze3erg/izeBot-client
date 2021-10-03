import { Redirect, Route, Switch } from "react-router";
import { routes } from "../../config/routes";
import { useAppContext } from "../../contexts/AppContext";

function Content() {
    const { auth } = useAppContext();
    const role = auth ? "user" : "guest";
    return (
        <Switch>
            {routes[role].map((elem, idx) => (
                <Route key={idx} path={elem.path} component={elem.component} />
            ))}
            <Redirect from="/" to={role === "user" ? "/dashboard" : "/home"} />
        </Switch>
    );
}

export default Content;
