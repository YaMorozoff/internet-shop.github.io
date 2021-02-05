import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import "semantic-ui-css/semantic.min.css";

import Routes from "./routes/Routes";
import { Provider } from "react-redux";
import { store } from "./store";

import "./style/index.css";

import ThemeProvider from "./context/theme_context";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <ThemeProvider>
        <div>{renderRoutes(Routes)}</div>
      </ThemeProvider>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
