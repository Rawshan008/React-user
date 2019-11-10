import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faYoutube} from "@fortawesome/free-brands-svg-icons";
class Footer extends Component {
    render() {
        return (
            <Fragment>
                <Container fluid={true} className="footerArea mt-4">
                    <Row>
                        <Col lg={3} md={6} sm={12} className="p-5">
                            <h3 className="footerWidgetsTitle">Follow Me</h3>
                            <p className="widgetsDesc socialLink">
                                <a href=""> <FontAwesomeIcon icon={faFacebook}/> Facebook</a>
                                <a href=""><FontAwesomeIcon icon={faYoutube}/> YouTube</a>
                            </p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5">
                            <h3 className="footerWidgetsTitle">Address</h3>
                            <p className="widgetsDesc">#79/6 Padma Residential Aria, 3rd Floor Front Side, Rajshahi</p>
                            <p className="widgetsDesc"><FontAwesomeIcon icon={faEnvelope}/> Engr.Rabbil@yahoo.com</p>
                            <p className="widgetsDesc"> <FontAwesomeIcon icon={faPhone}/> +8801701063280</p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5">
                            <h3 className="footerWidgetsTitle">Information</h3>
                            <p className="widgetsDesc">
                                <a href="">About Me</a>
                                <a href="">My Resume</a>
                                <a href="">Contact Me</a>
                            </p>
                        </Col>
                        <Col lg={3} md={6} sm={12} className="p-5">
                            <h3 className="footerWidgetsTitle">Legal</h3>
                            <p className="widgetsDesc">
                                <a href="">Refund Policy</a>
                                <a href="">Terms And Condition</a>
                                <a href="">Privacy Policy</a>
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Footer;