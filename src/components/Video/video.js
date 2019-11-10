import React, {Component, Fragment} from 'react';
import {Button, Col, Container, Modal, Row} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlayCircle} from "@fortawesome/free-solid-svg-icons";
import 'video-react/dist/video-react.css';
import { Player, BigPlayButton, PosterImage } from 'video-react';

class Video extends Component {
    constructor(){
        super();
        this.state = {
            show: false,
        }
    }

    modalShow = () => this.setState({show:true});
    modalHide = () => this.setState({show:false});
    render() {
        return (
            <Fragment>
                <Container>
                    <Row>
                        <Col>
                            <div className="videoCard text-center">
                                <h2 className="videoCatdTitle">How I Do</h2>
                                <p className="viderCardDesc">First i analysis the requirement of project. According to the requirement i make a proper technical analysis, then i build a software architecture. According to the planning i start coding. Testing is also going on with coding. Final testing take place after finishing coding part. After successful implementation i provide 6 month free bug fixing service for corresponding project.</p>
                                <p><FontAwesomeIcon onClick={this.modalShow} className="videoPlayButton" icon={faPlayCircle} /></p>
                            </div>
                        </Col>
                    </Row>
                </Container>
                <Modal size="lg" show={this.state.show} onHide={this.modalHide}>
                    <Modal.Body>
                        <Player poster="https://scontent.fdac17-1.fna.fbcdn.net/v/t1.0-9/73370506_2545154588939774_9168627687915257856_o.jpg?_nc_cat=102&_nc_oc=AQnYibHm6TrAQjXQwQ4Y8-H_hb5GNQK_NUb8OlJobr-wHK74rFpA1YFZjfwFizlqVG8&_nc_ht=scontent.fdac17-1.fna&oh=2add32550860b5d2bcdbe2e464d54ddc&oe=5E178D38">
                            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
                            <BigPlayButton position="center" />
                        </Player>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="primary" onClick={this.modalHide}>
                            Close
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Fragment>
        );
    }
}

export default Video;