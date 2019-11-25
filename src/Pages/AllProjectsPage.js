import React, {Component, Fragment} from 'react';
import AllProjects from "../components/AllProjects/AllProjects";
import TopNavigation from "../components/TopNavigation/TopNavigation";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";

class AllProjectsPage extends Component {
    render() {
        return (
            <Fragment>
                <TopNavigation title="Projects"/>
                <PageTop pageTitle="All Projects"/>
                <AllProjects/>
                <Footer/>
                <FooterBottom/>
            </Fragment>
        );
    }
}

export default AllProjectsPage;