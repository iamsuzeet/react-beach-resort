import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";

import logo from "../images/logo.svg";

export class Navbar extends Component {
  state = {
    navIsOpen: false
  };

  handleToggle = () => {
    this.setState({ navIsOpen: !this.state.navIsOpen });
  };

  render() {
    const { navIsOpen } = this.state;
    return (
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="beach resort" />
            </Link>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul className={navIsOpen ? "nav-links show-nav" : "nav-links"}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rooms">Rooms</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
