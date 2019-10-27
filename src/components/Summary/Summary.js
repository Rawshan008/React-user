import React, {Component, Fragment} from 'react';
import {Card, Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheckCircle} from "@fortawesome/free-solid-svg-icons";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";

class Summary extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="summaryTopBarner p-0">
                    <div className="summeryOverlay">
                        <Container ClassName="pt-5 pb-5">
                            <Row>
                                <Col lg={8} md={6} sm={12}>
                                    <Row className="counterSection" >
                                        <Col className="text-white text-center">
                                            <h1 className="counterNumber">
                                                <CountUp start={0} end={100}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="counterTitle">Total Projects</h4>
                                            <hr className="w-25 bg-white"/>
                                        </Col>
                                        <Col className="text-white text-center">
                                            <h1 className="counterNumber">
                                                <CountUp start={0} end={80}>
                                                    {({ countUpRef, start }) => (
                                                        <VisibilitySensor onChange={start} delayedCall>
                                                            <span ref={countUpRef} />
                                                        </VisibilitySensor>
                                                    )}
                                                </CountUp>
                                            </h1>
                                            <h4 className="counterTitle">Total Clients</h4>
                                            <hr className="w-25 bg-white"/>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={5} sm={12}>
                                    <Card>
                                        <Card.Body>
                                            <Card.Title className="counterCartTitle">How i Work</Card.Title>
                                            <Card.Text>
                                                <p className="counterCartSubTitle"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Requirement Gathering</p>
                                                <p className="counterCartSubTitle"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> System Analysis</p>
                                                <p className="counterCartSubTitle"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Coding Testing</p>
                                                <p className="counterCartSubTitle"><FontAwesomeIcon className="iconBullet" icon={faCheckCircle} /> Implementation</p>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default Summary;