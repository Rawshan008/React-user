import React, {Component, Fragment} from 'react';
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import mobileponidit from "../../assets/img/mobilepondit.png";

class RecentProjects extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className="sectionTitle text-center">RECENT PROJECTS</h1>
                    <Row>
                        <Col className={"p-2"} lg={4} md={6} sm={12}>
                            <Card className="projectsCard text-center" >
                                <Card.Img variant="top" src={mobileponidit} />
                                <Card.Body>
                                    <Card.Title className="projectsCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectsCardDesc">
                                        Some quick example text to build on the card title and make.
                                    </Card.Text>
                                    <Button variant="primary" className="projectsCardButton">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className={"p-2"} lg={4} md={6} sm={12}>
                            <Card className="projectsCard text-center" >
                                <Card.Img variant="top" src={mobileponidit} />
                                <Card.Body>
                                    <Card.Title className="projectsCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectsCardDesc">
                                        Some quick example text to build on the card title and make.
                                    </Card.Text>
                                    <Button variant="primary" className="projectsCardButton">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col className={"p-2"} lg={4} md={6} sm={12}>
                            <Card className="projectsCard text-center" >
                                <Card.Img variant="top" src={mobileponidit} />
                                <Card.Body>
                                    <Card.Title className="projectsCardTitle">Card Title</Card.Title>
                                    <Card.Text className="projectsCardDesc">
                                        Some quick example text to build on the card title and make.
                                    </Card.Text>
                                    <Button variant="primary" className="projectsCardButton">Details</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default RecentProjects;