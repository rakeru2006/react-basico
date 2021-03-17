import React, { Component } from 'react';
import './style.css';
import Alert from 'react-bootstrap/Alert';

class NotFound extends Component {
  render() {
    return (
      <Alert variant="success">
  <Alert.Heading>Oh snap! You got an error  404 Not Found :(</Alert.Heading>
  <p>
  Try again.

  </p>
  <hr />
  <p className="mb-0">

  Return to main page and success for the next time.
  </p>
</Alert>
     
    )
  }
}

export default NotFound;