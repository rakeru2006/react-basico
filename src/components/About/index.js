import React, { Component } from 'react';
import './style.css';


import { Button } from 'reactstrap';
import { Accordion , Card  } from 'react-bootstrap';



class About extends Component {
  render() {
    return (
   
 
  
        <Accordion defaultActiveKey="0">
         
            <h1>About our Team</h1>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm Luis </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm Arturo</Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm Raquel</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>

    )
  }
}

export default About;