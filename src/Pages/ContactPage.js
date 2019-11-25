import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import Services from "../components/Services/Services";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Contact us"/>
                <PageTop pageTitle="Contact Us"/>
                <ContactSection/>
                <Footer/>
                <FooterBottom/>
            </Fragment>
        );
    }
}

export default ContactPage;