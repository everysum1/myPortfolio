import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div className="Contact">
        <h1>Contact</h1>
        <h3>Send me a message...</h3>
        <form action="#" method="POST">
          <label for="">Name</label>
          <input type="text" name="name" />
          <label for="">Email</label>
          <input type="text" name="email" />
          <label for="">Message</label>
          <input type="text" name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
    )
  }
}

export default Contact;
