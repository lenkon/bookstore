import React from 'react';

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="m-3">
        <h2 className="form-title">Add NEW BOOK</h2>
        <form className="book-card display-flex form-container">
          <input className="p-1" type="text" name="title" placeholder="Book title" />
          <input className="p-1" type="text" name="author" placeholder="Book author" />
          <input className="p-1 button" type="submit" value="Add Book" />
        </form>
      </div>
    );
  }
}

export default Form;
