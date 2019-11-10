import React, {Component, Fragment} from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Col, Container, Row} from "react-bootstrap";
import Rawshan from '../../assets/img/rawshan.png';

class ClientReview extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            vertical: true,
            verticalSwiping: true,
        };
        return (
            <Fragment>
                <Container className="pb-5">
                    <h1 className="sectionTitle text-center">Clients Reviews</h1>
                    <Row className="text-center justify-content-center">
                        <Col lg={8} md={8} sm={12}>
                            <div className="clientReviewArea">
                                <Slider {...settings}>
                                    <div ClassName="clientReviesSingle">
                                        <img className="clientReviewImg" src={Rawshan} alt=""/>
                                        <h2 className="clientReviesTitle">Web Development</h2>
                                        <p className="clientReviesdesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores beatae dignissimos eum exercitationem ipsum provident quod ullam veniam voluptatem. Doloremque doloribus ea eligendi laudantium quam repellat rerum saepe, sunt?</p>
                                    </div>
                                    <div ClassName="clientReviesSingle">
                                        <img className="clientReviewImg" src={Rawshan} alt=""/>
                                        <h2 className="clientReviesTitle">Web Development</h2>
                                        <p className="clientReviesdesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores beatae dignissimos eum exercitationem ipsum provident quod ullam veniam voluptatem. Doloremque doloribus ea eligendi laudantium quam repellat rerum saepe, sunt?</p>
                                    </div>
                                    <div ClassName="clientReviesSingle">
                                        <img className="clientReviewImg" src={Rawshan} alt=""/>
                                        <h2 className="clientReviesTitle">Web Development</h2>
                                        <p className="clientReviesdesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad asperiores beatae dignissimos eum exercitationem ipsum provident quod ullam veniam voluptatem. Doloremque doloribus ea eligendi laudantium quam repellat rerum saepe, sunt?</p>
                                    </div>
                                </Slider>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default ClientReview;