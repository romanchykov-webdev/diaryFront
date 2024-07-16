import React, {useLayoutEffect} from 'react';
import Home from './pages/home';
import {Route, Routes} from 'react-router-dom';
import PrivateRoute from './utils/router/privateRoute';
// import {CssBaseline} from '@mui/material';
// import {ColorModeContext, useMode} from './theme';
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
    return (
        <>

            {/*<CssBaseline/>*/}
            {/*<div className="App" style={{backgroundColor: backgroundTheme === 'tomato' ? '#ff6347' : undefined}}>*/}
            <div className="App">
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
