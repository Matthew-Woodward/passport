import React, from "react";
import Jumbotron from "../components/Jumbotron";


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
            <Link to="/Home">← START THE ADVENTURES</Link>
            <Link to="/HTOP">← HOW TO PLAY </Link>
            <Link to="/AboutUs">← ABOUT US</Link>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
