import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import webLogo from '../../assets/img/web.svg';
import mobileLogo from '../../assets/img/mobile.svg';
import graphicsLogo from '../../assets/img/graphics.svg';

class Services extends Component {
    render() {
        return (
            <Fragment>
                <Container>
                    <h1 className="sectionTitle text-center">My Services</h1>
                    <Row>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={webLogo}/>
                                <h3 className="serviceName">Web Development</h3>
                                <p className="serviceDesc">I design and develop static and dynamic web sites as per your requirements as we believe, “web is world’s next home”.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={mobileLogo}/>
                                <h3 className="serviceName">Mobile Development</h3>
                                <p className="serviceDesc">I build native and cross platfrom mobile app for your business and instiution as per as your requirements.</p>
                            </div>
                        </Col>
                        <Col lg={4} md={6} sm={12}>
                            <div className="serviceCard text-center">
                                <img src={graphicsLogo}/>
                                <h3 className="serviceName">Graphics Design</h3>
                                <p className="serviceDesc">I desing modern user interface and other graphical components for your business and instiution.</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Services;