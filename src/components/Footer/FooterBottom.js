import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class FooterBottom extends Component {
    render() {
        return (
            <Fragment>
                <div className="footerBottom py-3 text-center">
                    <Container>
                        <Row>
                            <Col>
                                <p className="copywriteText m-0 p-0 text-white">Rawshan Ali &copy; 2019-2020</p>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Fragment>
        );
    }
}

export default FooterBottom;