import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import ContactSection from "../components/ContactSection/ContactSection";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";
import Services from "../components/Services/Services";

class ServicesPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Services"/>
                <PageTop pageTitle="Get My Services"/>
                <Services/>
                <ContactSection/>
                <Footer/>
                <FooterBottom/>
            </Fragment>
        );
    }
}

export default ServicesPage;