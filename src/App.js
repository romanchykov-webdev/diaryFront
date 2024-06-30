import {CssBaseline} from "@mui/material";
import './i18n';
import {Route, Routes} from "react-router-dom";
import AuthRootComponents from "./pages/auth/AuthRootComponents";
import {useToggleTheme} from "./utils/hooks/toggleTheme";  // Импортируйте файл конфигурации i18n
import './App.css'
import PrivateRoute from "./utils/router/privateRoute";
import LoginPage from "./pages/auth/login/LoginPage";

function App() {
    const { theme, setTheme } = useToggleTheme();
    return (
        <>
            <CssBaseline/>
            <div className="App">
                <Routes>
                    <Route element={<AuthRootComponents/>} >
                        {/*solo registration user*/}
                        <Route element={<PrivateRoute/>}>
                        {/*    /!*<Route path="/" element={<Home/>}/>*!/*/}
                        {/*    /!*<Route path="/watchlist" element={<WatchListPage/>}/>*!/*/}
                        {/*    /!*<Route path="/news" element={<NewsPage/>}/>*!/*/}
                        {/*    /!*<Route path="/settings" element={<SettingsPage/>}/>*!/*/}
                        {/*    /!*<Route path={"/single/:id"} element={<SingleAssetPage/>}/>*!/*/}
                        </Route>
                        {/*all users open routing*/}
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/register" element={<AuthRootComponents/>}/>
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
