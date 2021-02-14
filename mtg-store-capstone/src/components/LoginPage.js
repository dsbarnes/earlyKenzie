import React, { Component } from "react";
import { Form, FormGroup, FormInput, Button } from "shards-react";
import { connect } from "react-redux";
import { loginThenGoToInventory as login } from "../actions";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import { Container, Row, Col, Jumbotron, Image } from "react-bootstrap";

const myModule = require('./manaImages')
const whiteMana = myModule.whiteMana
const redMana = myModule.redMana
const greenMana = myModule.greenMana
const blueMana = myModule.blueMana
const blackMana = myModule.blackMana

class LoginPage extends Component {
  state = {
    loginEmail: "",
    loginPassword: ""
  };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleLogin = event => {
    event.preventDefault();
    this.props.login({
      email: this.state.loginEmail,
      password: this.state.loginPassword
    });
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Jumbotron>
            <h1>Hello, world!</h1>
            <p>This is a simple hero unit, a simple jumbotron-style component for calling 
            extra attention to featured content or information.</p>
          </Jumbotron>


          <Container style={{
            width: "66.6%",
            textAlign: "center"
          }}>
          <Row>

            <Col style={{marginTop: "8%", width: "10vw"}}>
              <Row><Image style={{width: "33%", height: "33%", margin: "5px"}} src={whiteMana}></Image></Row>
              <Row><Image style={{width: "33%", height: "33%", margin: "5px"}} src={redMana}></Image></Row>
              <Row><Image style={{width: "33%", height: "33%", margin: "5px"}} src={greenMana}></Image></Row>
              <Row><Image style={{width: "33%", height: "33%", margin: "5px"}} src={blueMana}></Image></Row>
              <Row><Image style={{width: "33%", height: "33%", margin: "5px"}} src={blackMana}></Image></Row>
            </Col>

            <Col style={{width: "70vw"}}>
              <Form style={{marginBottom: "5vw", marginTop: "5vw"}}>
                <FormGroup>
                  <h1 style={{ color: "#4A999C" }}>Login</h1>

                  <FormInput
                  style={{marginBottom: "24px"}}
                  name="loginEmail"
                  type="text"
                  value={this.state.loginEmail}
                  onChange={this.handleChange}
                  id="#username"
                  placeholder="Username"/>

                  <FormInput
                  style={{marginBottom: "24px"}}
                  name="loginPassword"
                  type="password"
                  value={this.state.loginPassword}
                  onChange={this.handleChange}
                  id="#password"
                  placeholder="Password"/>
                  
                  <Button 
                    style={{width: "66.6%"}} 
                    type="submit" 
                    theme="success"
                    onClick={this.handleLogin}
                    > 
                  Log In </Button>
                </FormGroup>
              {/* {this.props.loginError && <p>{this.props.loginError}</p>} */}
              </Form>

              <Form>
                <FormGroup>
                  <h1 style={{ color: "#D4848F" }}>Register</h1>

                  <FormInput
                  style={{marginBottom: "24px"}}
                  name="username"
                  type="text"
                  // value={registerEmail} onChange={e => setRegisterEmail(e.target.value)}
                  id="#username"
                  placeholder="Username"/>

                  <FormInput
                  style={{marginBottom: "24px"}}
                  name="password"
                  type="password"
                  // value={registerPassword} onChange={e => setRegisterPassword(e.target.value)}
                  id="#password"
                  placeholder="Password"/>

                  <Button style={{width: "66.6%"}} type="submit" theme="danger"> Register </Button>
                </FormGroup>
              </Form>
            </Col>
          </Row>
          </Container>
        </Container>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    loginError: state.auth.loginError
  };
};
const mapActionsToProps = {
  login: login
};

export default connect(mapStateToProps, mapActionsToProps)(LoginPage);
