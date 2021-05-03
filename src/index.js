import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import "./style/bootstrap.rtl.min.css";
import "./style/mystyle.css";

import reducers from "./redux/reducers";
import App from "./App";

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
