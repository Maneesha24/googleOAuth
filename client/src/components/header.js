import React from "react";
import { Link } from 'react-router-dom';


export default class Header extends React.Component {
renderContent(){
  switch(this.props.auth){
    case null:
    return ;
    case false:
    return(
      <li><a href= "/auth/google">Login</a></li>
    )
    default:
    return (<li><a href = "/api/logout">Logout</a></li>)
  }
}
  render() {
    return (
      <nav>
              <div className="nav-wrapper">


                <ul className="right">
                  {this.renderContent()}
                </ul>
              </div>
            </nav>
    );
  }
}
