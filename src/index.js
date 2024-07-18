import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from './store/index';
import {BrowserRouter} from "react-router-dom";
// import { ThemeProvider, CssBaseline } from '@mui/material';
// import {CssBaseline} from '@mui/material';
// import { ColorModeContext, useMode } from './theme';
import './i18n'; //перевод app
const Root = () => {
    // const [theme, colorMode] = useMode();

    return (
        <Provider store={store}>
            {/*<ColorModeContext.Provider value={colorMode}>*/}
            {/*    <ThemeProvider theme={theme}>*/}
            {/*<CssBaseline/>*/}

            <BrowserRouter>
                <App/>
            </BrowserRouter>

            {/*    </ThemeProvider>*/}
            {/*</ColorModeContext.Provider>*/}
        </Provider>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Root/>
    </React.StrictMode>
);

reportWebVitals();
