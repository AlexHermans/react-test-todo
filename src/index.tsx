import React from "react";
import ReactDOM from "react-dom";
import { TodoApp } from "./TodoApp";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-bootstrap";
import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoApp />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
