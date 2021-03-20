import React, { Component } from 'react';
import './style.css';


import { Button } from 'reactstrap';
import { Accordion  } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';



class Help extends Component {
  render() {
    return (
   
 
  
        <Accordion defaultActiveKey="0">
         
            <h1>Recursos</h1>


        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
            Paso #01:  Solicita las denominaciones a la Secretaría de Economía.
Paso #02: Elabora el acta constitutiva de tu empresa
Paso #03. Obtén tu Registro Federal de Contribuyentes (RFC) ante el Servicio de Administración Tributaria (SAT)
Paso #04. Inscripción del Acta Constitutiva en el Registro Público de la Propiedad y Comercio (RPPC)

Paso #05. Registro en el Instituto Mexicano del Seguro Social (IMSS)

            </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>COMO CREAR UNA EMPRESA EN MÉXICO 
            <a href="https://celularia.com.mx/2020/03/25/como-crear-empresa-mexico/">Link</a>
            </Card.Body>
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

export default Help;