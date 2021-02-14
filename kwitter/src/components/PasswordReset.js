import React, { Component } from "react";
import { Button, Form, Grid, Header, Icon, Segment } from "semantic-ui-react";

class PasswordReset extends Component {
  render() {
    return (
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h1" color="blue" textAlign="center">
            <Icon name="twitter" /> Reset Password
          </Header>
          <Form size="large">
            <Segment stacked>
              <Form.Input
                fluid
                name="username"
                required
                icon="user"
                iconPosition="left"
                placeholder="Username"
              />
              <Form.Input
                fluid
                name="password"
                required
                icon="lock"
                iconPosition="left"
                placeholder="Password"
                type="password"
              />
              <Form.Input
                fluid
                name="password"
                icon="lock"
                iconPosition="left"
                placeholder="Confirm Password"
                type="password"
              />

              <Button color="blue" fluid size="large">
                Submit
              </Button>
            </Segment>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default PasswordReset;
