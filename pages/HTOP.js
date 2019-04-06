import React, from "react";
import Jumbotron from "../components/Jumbotron";
import HTOP from "../routes/apiRoutes";

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
                        <p color="red">how to play </p>
                        <p>choose the player</p>
                        <p>take your chance with your quiz and fight</p>
                    </Jumbotron>
                </Col>
            </Row>
        </Container>
    );
}

export default HTOP;
