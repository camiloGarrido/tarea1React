import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <header>
        <div className="containerMenu">
          <div className="item">
            <Link to="/">Inicio</Link>
          </div>
          <div className="item">
            <Link to="/list">Lista completa</Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
