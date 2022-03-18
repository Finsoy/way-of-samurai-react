import React from "react";
import ReactDOM from "react-dom";
import store from "./redux/redux-store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.scss";

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App
        appState={store.getState()}
        dispatch={store.dispatch.bind(store)}
        store={store}
      />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
