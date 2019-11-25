import React, {Component, Fragment} from 'react';
import { Switch, Route, Link } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import ServicesPage from "../Pages/ServicesPage";
import AllCoursesPage from "../Pages/AllCoursesPage";
import AllProjectsPage from "../Pages/AllProjectsPage";
import ContactPage from "../Pages/ContactPage";
import AboutUs from "../Pages/AboutUs";

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    <Route exact path="/" component={HomePage}/>
                    <Route exact path="/services" component={ServicesPage}/>
                    <Route exact path="/courses" component={AllCoursesPage}/>
                    <Route exact path="/portfolio" component={AllProjectsPage}/>
                    <Route exact path="/contact" component={ContactPage}/>
                    <Route exact path="/about" component={AboutUs}/>
                </Switch>
            </Fragment>
        );
    }
}

export default AppRoute;