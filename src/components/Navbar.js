import React from 'react';
import { NavLink } from 'react-router-dom';
import 'font-awesome/css/font-awesome.min.css';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const links = [
      { id: 1, text: 'Books', path: '/books' },
      { id: 2, text: 'Categories', path: '/categories' },
    ];

    return (
      <nav className="display-flex space-between m-3 align-center">
        <div className="display-flex">
          <h1>Bookstore CMS</h1>
          <ul className="display-flex align-center">
            {
              links.map((link) => (
                <li key={link.id}>
                  <NavLink to={link.path}>{link.text}</NavLink>
                </li>
              ))
            }
          </ul>
        </div>
        <div className="display-flex align-center user-icon">
          <i className="fa fa-user" />
        </div>
      </nav>
    );
  }
}

export default Navbar;
