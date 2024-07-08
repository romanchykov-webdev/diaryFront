import React from 'react';
import Home from './pages/home';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/router/privateRoute';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { ColorModeContext, useMode } from './theme';
import LayoutComponent from "./components/layout";
import SettingsPage from "./pages/settings/SettingsPage";
import AuthRootComponents from "./pages/auth";


function App() {
    const [theme, colorMode] = useMode();

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="App" >
                    <Routes>
                        <Route element={<LayoutComponent />}>
                            <Route element={<PrivateRoute />}>
                                <Route path="/" element={<Home />} />
                                <Route path="/settings" element={<SettingsPage />} />
                            </Route>
                            <Route path="/login" element={<AuthRootComponents />} />
                            <Route path="/register" element={<AuthRootComponents />} />
                        </Route>
                    </Routes>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    );
}

export default App;
