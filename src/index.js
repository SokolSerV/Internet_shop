import React from "react";
import ReactDOM from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import App from "./App";
import SomethingWentWrong from "./components/SomethingWentWrong/SomethingWentWrong";
import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <ErrorBoundary fallback={<SomethingWentWrong />}>
            <BrowserRouter>
                {/* <React.StrictMode> */}
                <App />
                {/* </React.StrictMode> */}
            </BrowserRouter>
        </ErrorBoundary>
    </Provider>
);
