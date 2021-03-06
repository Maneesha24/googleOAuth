import React from "react";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <li><a href="/auth/google">Login</a></li>;
      default:
        return <li> <a href="/api/logout">Logout</a></li>
        ;
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
         <Link to ={this.props.auth ? '/surveys' : '/'} className = "left brand-logo">googleoAuth</Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps ({auth}){
	return {auth};
}

export default connect(mapStateToProps)(Header);
