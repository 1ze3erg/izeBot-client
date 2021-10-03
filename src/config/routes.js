import ChatLogs from "../components/pages/ChatLogs";
import CommandForm from "../components/pages/CommandForm";
import CustomCommands from "../components/pages/CustomCommands";
import Dashboard from "../components/pages/Dashboard";
import DefaultCommands from "../components/pages/DefaultCommands";
import Docs from "../components/pages/Docs";
import Home from "../components/pages/Home";
import Intregrations from "../components/pages/Intregrations";
import Login from "../components/pages/Login";
import PreviewBotTest from "../components/pages/PreviewBotTest";
import Profile from "../components/pages/Profile";
import Register from "../components/pages/Register";
import TimerForm from "../components/pages/TimerForm";
import Timers from "../components/pages/Timers";
import TryBot from "../components/pages/TryBot";

const routes = {
    guest: [
        { path: "/home", component: Home },
        { path: "/login", component: Login },
        { path: "/register", component: Register },
        { path: "/try-bot", component: TryBot },
        { path: "/docs", component: Docs },
    ],
    user: [
        { path: "/profile", component: Profile },
        { path: "/dashboard", component: Dashboard },
        { path: "/default-commands", component: DefaultCommands },
        { path: "/custom-commands", component: CustomCommands },
        { path: "/timers", component: Timers },
        { path: "/preview-bot-test", component: PreviewBotTest },
        { path: "/chat-logs", component: ChatLogs },
        { path: "/intregrations", component: Intregrations },
        { path: "/command-form", component: CommandForm },
        { path: "/timer-form", component: TimerForm },
        { path: "/docs", component: Docs },
    ],
};

function createMenu(auth) {
    const leftMenu = auth
        ? [
              { name: "Docs", bgColor: "bg-indigo-700", textColor: "text-white", to: "/docs" },
              { name: "Dashboard", bgColor: "bg-indigo-700", textColor: "text-white", to: "/dashboard" },
          ]
        : [
              { name: "Docs", bgColor: "bg-indigo-700", textColor: "text-white", to: "/docs" },
              { name: "Try izeBot", bgColor: "bg-indigo-700", textColor: "text-white", to: "/try-bot" },
          ];
    const rightMenu = auth
        ? [
              {
                  name: "Sign out",
                  bgColor: "bg-indigo-700",
                  textColor: "text-white",
                  to: "/login",
              },
          ]
        : [
              { name: "Register", bgColor: "bg-indigo-400", textColor: "text-white", to: "/register" },
              { name: "Sign in", bgColor: "bg-indigo-700", textColor: "text-white", to: "/login" },
          ];
    return { leftMenu, rightMenu };
}

const sidebarMenu = [
    { name: "Dashboard", to: "/dashboard", icon: "fa-chart-bar" },
    { name: "Default Commands", to: "/default-commands", icon: "fa-paint-brush" },
    { name: "Custom Commands", to: "/custom-commands", icon: "fa-magic" },
    { name: "Timers", to: "/timers", icon: "fa-stopwatch" },
    { name: "Preview Bot test", to: "/preview-bot-test", icon: "fa-comments" },
    { name: "Chat Logs", to: "/chat-logs", icon: "fa-database" },
    { name: "Intregrations", to: "/intregrations", icon: "fa-link" },
];

export { routes, createMenu, sidebarMenu };
