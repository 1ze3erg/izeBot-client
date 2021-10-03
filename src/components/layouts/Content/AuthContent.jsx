import { Redirect, Route, Switch } from "react-router";
import { useAppContext } from "../../../contexts/AppContext";
import ChatLogs from "../../pages/ChatLogs";
import CommandForm from "../../pages/CommandForm";
import CustomCommands from "../../pages/CustomCommands";
import Dashboard from "../../pages/Dashboard";
import DefaultCommands from "../../pages/DefaultCommands";
import Intregrations from "../../pages/Intregrations";
import PreviewBotTest from "../../pages/PreviewBotTest";
import Profile from "../../pages/Profile";
import TimerForm from "../../pages/TimerForm";
import Timers from "../../pages/Timers";
import Sidebar from "../Sidebar/Sidebar";

function AuthContent() {
    const { haveSidebar } = useAppContext();
    const classes = haveSidebar
        ? "grid grid-cols-5 lg:grid-cols-1 md:contents"
        : "grid grid-cols-5 bg-gray-400 lg:grid-cols-none lg:grid-rows-3";
    return (
        <div className={classes}>
            {haveSidebar && <Sidebar />}
            <Switch>
                <Route path="/profile" component={Profile} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/default-commands" component={DefaultCommands} />
                <Route path="/custom-commands" component={CustomCommands} />
                <Route path="/timers" component={Timers} />
                <Route path="/preview-bot-test" component={PreviewBotTest} />
                <Route path="/chat-logs" component={ChatLogs} />
                <Route path="/intregrations" component={Intregrations} />
                <Route path="/command-form" component={CommandForm} />
                <Route path="/timer-form" component={TimerForm} />
                <Redirect from="/home" to="/dashboard" />
            </Switch>
        </div>
    );
}

export default AuthContent;
