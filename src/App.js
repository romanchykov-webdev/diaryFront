import React from 'react';
import Home from './pages/home/HomePage';
import {Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import PrivateRoute from './utils/router/privateRoute';
import LayoutComponent from "./components/layout";
import SettingsPage from "./pages/settings/SettingsPage";
import AuthRootComponents from "./pages/auth";


// import {useSelector} from "react-redux";


function App() {

    // const [theme, colorMode] = useMode();
    // const backgroundTheme = useSelector((state) => state.auth?.user.themeModeDevice)
    //
    // useLayoutEffect(() => {
    //     if (backgroundTheme === 'tomato') {
    //         document.documentElement.setAttribute('data-theme', backgroundTheme);
    //     }
    //     console.log("useLayoutEffect", backgroundTheme)
    // }, [backgroundTheme]);
    // // console.log('backgroundTheme',backgroundTheme)

    const {pathname} = useLocation();
    // const navigate = useNavigate();
    console.log('pathname',pathname)
    // console.log('navigate',navigate)

    return (
        <>

            {/*<CssBaseline/>*/}
            {/*<div className="App" style={{backgroundColor: backgroundTheme === 'tomato' ? '#ff6347' : undefined}}>*/}

            <div className="App"  style={
                (pathname === '/login' || pathname === '/register')
                    ? { alignSelf: 'center' }
                    : {}
            }>
                <Routes>
                    <Route element={<LayoutComponent/>}>
                        <Route element={<PrivateRoute/>}>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/settings" element={<SettingsPage/>}/>
                        </Route>
                        <Route path="/login" element={<AuthRootComponents/>}/>
                        <Route path="/register" element={<AuthRootComponents/>}/>
                    </Route>
                </Routes>
            </div>

        </>


    );
}

export default App;
