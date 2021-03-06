import React, { Component } from 'react'
import Jumbotron from "../components/Jumbotron"
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";

class Home extends Component {
    constructor() {
        super()
    }


    render() {
        const imageStyle = {
            width: 400
        }
        return (

            <Container fluid>
                <Row>
                    <Col size="md-6">
                        <Jumbotron>
                            <h1>Code Adventures</h1>
                        </Jumbotron>

                    </Col>
                    <Col size="md-6 sm-12">
                        <Jumbotron>
                            <Link to="/Home">← START THE ADVENTURES</Link>
                            <Link to="/HTOP">← HOW TO PLAY </Link>
                            <Link to="/AboutUs">← ABOUT US</Link>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        );

    }
}

export default Home
