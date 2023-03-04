import React from 'react';

class Interactions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ul className="interactions display-flex">
        <li>Comments</li>
        <li>Remove</li>
        <li>Edit</li>
      </ul>
    );
  }
}

export default Interactions;
