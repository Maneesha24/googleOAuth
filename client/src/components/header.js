import React from "react";

export default class Header extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Logout</a>
          </li>
        );
    }
  }
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <ul className="left ">
            <li className="">googleOAuth</li>
          </ul>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}
