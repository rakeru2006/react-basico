import React, { Component } from 'react';
import './style.css';
import  Form  from 'react-bootstrap/Form';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Button , Col} from 'reactstrap';



class Contact extends Component {
  render() {
    return (
     
        <Form>
            <Jumbotron fluid>
            <h1>GYM Join Now!</h1>
            <p>
           Get free 1 day access pass 
            </p>
      </Jumbotron>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
        </Form.Row>
 

        <Form.Group controlId="formGridAddress1">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Your Name " />
        </Form.Group>
      
        <Form.Group controlId="formGridAddress2">
          <Form.Label>Address 2</Form.Label>
          <Form.Control placeholder="1234 Main St,Apartment, floor" />
        </Form.Group>
      
        <Form.Row>
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Mexico</option>
              <option>Guadalajara</option>
              <option>Monterrey</option>
            </Form.Control>
          </Form.Group>
      
          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>
      
        <Form.Group id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out, you agree Privacy Policy" />
        </Form.Group>
      
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

//Form with botoom submet 

        


    )
  }
}

export default Contact;