import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Form, FormText, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";

class ContactSection extends Component {
    render() {
        return (
            <Fragment>
                <Container className="contactSection">
                    <Row>
                        <Col lg={6} md={6} sm={12}>
                            <h3 className="contactTitle">Quick Connect</h3>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" />
                                </Form.Group>

                                <Form.Group>
                                    <Form.Label>Your Message</Form.Label>
                                    <Form.Control as="textarea" rows="3" />
                                </Form.Group>

                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col lg={6} md={6} sm={12}>
                            <h3 className="contactTitle">Discuss Now</h3>
                            <p className="widgetsDesc">#79/6 Padma Residential Aria, 3rd Floor Front Side, Rajshahi</p>
                            <p className="widgetsDesc"><FontAwesomeIcon icon={faEnvelope}/> Engr.Rabbil@yahoo.com</p>
                            <p className="widgetsDesc"> <FontAwesomeIcon icon={faPhone}/> +8801701063280</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ContactSection;