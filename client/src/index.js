import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import 'materialize-css/dist/css/materialize.min.css';
import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import App from "./components/app";
import reduxThunk from 'redux-thunk';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
