import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import AboutDescription from "../components/AboutDescription/AboutDescription";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";

class AboutUs extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation/>
                <PageTop pageTitle="About Us"/>
                <AboutDescription/>
                <Footer/>
                <FooterBottom/>
            </Fragment>
        );
    }
}

export default AboutUs;