import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

class PageTop extends Component {
    render() {
        return (
            <Fragment>
                <Container className="pageTopFixed p-0" fluid="true">
                    <div className="pageTopFixedOverlay">
                        <Container className="pageTopFixedContent">
                            <Row>
                                <Col>
                                    <h1 className="topPageTitle text-center">{this.props.pageTitle}</h1>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </Container>
            </Fragment>
        );
    }
}

export default PageTop;