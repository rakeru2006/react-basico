import React, { Component } from 'react';
import './style.css';


import { Button } from 'reactstrap';
import { Accordion  } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';


class About extends Component {
  render() {
    return (
   
 
  
        <Accordion defaultActiveKey="0">
         
            <h1>About our Team</h1>

            <CardDeck>
  <Card>
    <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/47589546?s=460&u=b4f4c58b7a86406634b76c8c0c1072fd01640fd4&v=4/100px160" />
    <Card.Body>
      <Card.Title>Raquel Ceron </Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button href="https://github.com/rakeru2006"type="submit" >Github</Button> 
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/51728784?s=400&u=908592cec5cfc8816de843f06d03c2c2c9dc705a&v=4/100px160" />
    <Card.Body>
      <Card.Title>Luis Contreras</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button href="https://github.com/LuisContrerasGlz"type="submit" >Github</Button> 
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card>
    <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/53980116?s=400&u=158cfe7f23032458858000f6b15de4c9f0d53dd3&v=4/100px160" />
    <Card.Body>
      <Card.Title>Arturo Rodriguez</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    <Card.Footer>
    <Button href="https://github.com/arturorito"type="submit" >Github</Button> 
      <small className="text-muted">Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
   
      </Accordion>

    )
  }
}

export default About;