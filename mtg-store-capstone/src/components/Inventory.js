import React, { Component } from "react";
import { connect } from "react-redux";
import { getUserCards } from '../actions'

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css"
import{ 
        FormInput, 
        Card, CardHeader, CardBody, CardTitle,
  } from "shards-react";
import {
        Accordion,
        Container, Row,
        Jumbotron,
        Navbar, Nav,
  } from "react-bootstrap";


  
class Inventory extends Component {

  componentDidMount(){
    console.log('something??')
    this.props.getUserCards()
  }


  render() {
    return (
      <React.Fragment>
      <Container>

        <Jumbotron style={{ margin: "0px"}}>
          <h1>Hello, world!</h1>
          <p>This is a simple hero unit, a simple jumbotron-style component for calling 
          extra attention to featured content or information.</p>
        </Jumbotron>


        <Navbar>
          <Nav className="mr-auto">
            <Nav.Link href="*">Upcoming</Nav.Link>
            <Nav.Link href="*">Near Me</Nav.Link>
            <Nav.Link href="*">All Events</Nav.Link>
          </Nav>

          <Nav>
            <Nav.Link href="*">My Inventory</Nav.Link>
            <Nav.Link href="*">Search Users</Nav.Link>
            <Nav.Link href="*">Logout</Nav.Link>
          </Nav>
      </Navbar>
      <hr style={{marginBottom: "111.11px"}}></hr>

      <FormInput size="lg" placeholder="Search"/>
      <hr></hr>

      <Accordion style={{marginBottom: "166.6px"}} defaultActiveKey="0">
        <Card>
          <CardHeader style={{textAlign:'center'}}>
            <Accordion.Toggle as={CardTitle} variant="link" eventKey="0"> Cards in box 1 </Accordion.Toggle>
          </CardHeader>

          <Accordion.Collapse eventKey="0">
            <CardBody>

            <Row>
            {/* This is commented out so the site will work w/o the db */}
            {/* {this.props.user.cards.map( (card, i) => {
              return card.locations[0].location === 'box1' &&
                <Col>
                <Card style={{width: "325px", marginBottom: "42px", textAlign: 'center'}}>
                  <CardBody>
                    <CardTitle>{JSON.stringify(card.cardName)}</CardTitle>
                    <small>Quantity: {JSON.stringify(card.locations[0].quantity)}</small><br></br>
                    <small>Spot Price: $USD</small>
                  </CardBody>
                  <CardFooter>
                    <Button outline theme="danger" style={{marginRigh: '15px', width: "43%"}}>Buy</Button>
                    <Button outline theme="success" style={{marginLeft: "15px", width: "43%"}}>Sell</Button>
                  </CardFooter>
                </Card>
                </Col>
              }
            )} */}
            </Row>

            </CardBody>
          </Accordion.Collapse>
        </Card>

        <Card>
          <CardHeader style={{textAlign:'center'}} >
            <Accordion.Toggle as={CardTitle} variant="link" eventKey="1"> Cards in box 2 </Accordion.Toggle>
          </CardHeader>

          <Accordion.Collapse eventKey="1">
            <CardBody>
              
              
            <Row>
            {/* {this.props.user.cards.map( (card, i) => {
              return card.locations[0].location === 'box2' &&
                <Col>
                <Card style={{width: "325px", marginBottom: "42px", textAlign: 'center'}}>
                  <CardBody>
                    <CardTitle>{JSON.stringify(card.cardName)}</CardTitle>
                    <small>Quantity: {JSON.stringify(card.locations[0].quantity)}</small><br></br>
                    <small>Spot Price: $USD</small>
                  </CardBody>
                  <CardFooter>
                    <Button outline theme="danger" style={{marginRight: '15px', width: "43%"}}>Buy</Button>
                    <Button outline theme="success" style={{marginLeft: '15px', width: "43%"}}>Sell</Button>
                  </CardFooter>
                </Card>
                </Col>
              }
            )} */}
            </Row>
            </CardBody>
          </Accordion.Collapse>
        </Card>
      </Accordion>
      </Container>
      </React.Fragment>
    );
  }
}


const mapStateToProps = state => {
  return {
    user: state.auth.login
  };
};
const mapActionsToProps = {
  getUserCards: getUserCards
};

export default connect(mapStateToProps, mapActionsToProps)(Inventory);
