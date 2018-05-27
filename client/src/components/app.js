import React from "react";
import {connect} from 'react-redux';
import * as actions from '../actions';
import Header from "./header";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from './landing';

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
            <Route exact path="/" component={Landing} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null,actions)(App);
