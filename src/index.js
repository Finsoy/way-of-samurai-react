import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/redux-store";
import "./index.scss";

let renderEntireTree = (store) => {
  ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          appState={store.getState()}
          dispatch={store.dispatch.bind(store)}
          store={store}
        />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

renderEntireTree(store);

store.subscribe(() => {
  renderEntireTree(store);
});
