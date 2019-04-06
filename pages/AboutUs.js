import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";

render() {
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
                        <h3>jose</h3>
                        <h3>nick</h3>
                        <h3>marco</h3>
                        <h3>matt</h3>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;
