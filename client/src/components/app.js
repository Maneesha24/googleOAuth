import React from "react";
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from "./header";
import { BrowserRouter, Route } from "react-router-dom";
import Login from './login.js';
import Logout from './logout.js';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Login} />
		    <Route path="/login" component={Logout} />

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null,actions)(App);
