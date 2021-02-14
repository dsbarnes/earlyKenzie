import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllOfTheUsers as getAllUsers} from "../actions";


import { Container, Navbar, Nav, Jumbotron } from 'react-bootstrap';
import {
    FormInput
    } from "shards-react";


class UserSearch extends Component {
    componentDidMount(){
        this.props.getAllUsers()
    }

    render() {
        return (
        <React.Fragment>
            <Container>

            <Jumbotron style={{margin: "0px"}}>
                <h1>Hello, world!</h1>
                <p>This is a simple hero unit, a simple jumbotron-style component for calling 
                extra attention to featured content or information.</p>
            </Jumbotron>


            <Navbar bg="dark" variant="dark">
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
            <br></br>
            <p>{ JSON.stringify(this.props.allUsers[0]) }</p>

            </Container>
        </React.Fragment>
    );
    }
}
const mapStateToProps = state => {
    return {
        allUsers: state.users.allUsers
    };
};
const mapActionsToProps = {
    getAllUsers: getAllUsers
};
export default connect(mapStateToProps, mapActionsToProps)(UserSearch);
