import React, {Component, Fragment} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Bar, BarChart, ResponsiveContainer, Tooltip, XAxis} from "recharts";



class Analysis extends Component {

    constructor(){
        super();

        this.state = {
            data: [
                {
                    Technology: 'HTML', Project: 90
                },
                {
                    Technology: 'CSS', Project: 80
                },
                {
                    Technology: 'Javascript', Project: 60
                },
                {
                    Technology: 'PHP', Project: 90
                },
                {
                    Technology: 'WordPress', Project: 70
                },
                {
                    Technology: 'React', Project: 50
                }
            ]
        }
    }

    render() {
        const blue = "rgba(0,115,230,0.7)";
        return (
            <Fragment>
                <Container className="pb-5">
                    <h1 className="sectionTitle text-center">Technology Used</h1>
                    <Row>
                        <Col style={{height:300}} lg={6} md={12} sm={12}>
                            <ResponsiveContainer>
                                <BarChart data={this.state.data}>
                                    <XAxis dataKey="Technology" />
                                    <Tooltip />
                                    <Bar dataKey="Project" fill={blue}/>
                                </BarChart>
                            </ResponsiveContainer>
                        </Col>
                        <Col lg={6} md={12} sm={12}>
                            <p className="text-justify desc">To build native android apps i use Java as well as kotline mainly. React JS is used for cross platform mobile application. I use MySQL database for relational database system. To build NoSQL application i use MongoDB. Firebase database system is used where it is necessary to provide realtime data flow facilities. I always build dynamic application. Admin panel is the heart of such kinds of application. I always try to provide sufficient features in admin panel to dominate application. According to client demand I use PHP OOP, CodeIgniter and Laravel to build admin panel section. Application security is a big deal for commercial application. I always ensure security portion of my application, moreover i build a security alert system, to notify admin when his system at risk.</p>
                        </Col>
                    </Row>
                </Container>
            </Fragment>
        );
    }
}

export default Analysis;