import React, {Component, Fragment} from 'react';
import TopNavigation from "../components/TopNavigation/TopNavigation";
import AllCourses from "../components/AllCourses/AllCourses";
import PageTop from "../components/PageTop/PageTop";
import Footer from "../components/Footer/Footer";
import FooterBottom from "../components/Footer/FooterBottom";

class AllCoursesPage extends Component {
    render() {
        return (
            <div>
                <TopNavigation/>
                <PageTop pageTitle="Our All Courses"/>
                <AllCourses/>
                <Footer/>
                <FooterBottom/>
            </div>
        );
    }
}

export default AllCoursesPage;