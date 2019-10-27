import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import playingimg from "../../assets/img/playing.png";

class Courses extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className="sectionTitle text-center">OUR COURSES</h1>
                    <Row>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={playingimg}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="courseTitle">Web Development</h4>
                                    <p className="courseDesc">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <a className="courseButton" href="#">Details</a>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={playingimg}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="courseTitle">Web Development</h4>
                                    <p className="courseDesc">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <a className="courseButton" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <Row>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={playingimg}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="courseTitle">Web Development</h4>
                                    <p className="courseDesc">I build native and cross platfrom mobile app for your business and instiution as per as your requirements.</p>
                                    <a className="courseButton" href="#">Details</a>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <img className="courseImg" src={playingimg}/>
                                </Col>
                                <Col lg={6} md={6} sm={12}>
                                    <h4 className="courseTitle">Web Development</h4>
                                    <p className="courseDesc">I build native and cross platfrom mobile app for your business app for your business</p>
                                    <a className="courseButton" href="#">Details</a>
                                </Col>
                            </Row>
                        </Col>

                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Courses;