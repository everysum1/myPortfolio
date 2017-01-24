import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h1>Contact</h1>
        <h3>Send me a message...</h3>
        <form action="#" method="POST">
          <label htmlFor="">Name</label>
          <input type="text" name="name" />
          <label htmlFor="">Email</label>
          <input type="text" name="email" />
          <label htmlFor="">Message</label>
          <input type="text" name="message" />
          <input type="submit" value="Send" />
        </form>
        <hr />
      </div>
    )
  }
}

export default Contact;
