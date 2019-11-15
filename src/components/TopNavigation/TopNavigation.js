import React, {Component, Fragment} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/custom.css';
import whiteLogo from '../../assets/img/navlogo.svg';
import blueLogo from '../../assets/img/navlogoScroll.svg';

class TopNavigation extends Component {

    constructor(){
        super();

        this.state={
            navTitleBar: "navTitle",
            navTitleLogo: [whiteLogo],
            navBack: "navBackground",
            navItem: "navItem",
            navVariant: "dark"
        }
    }

    onScroll=()=>{
        if(window.scrollY >100){
            this.setState({navVariant: "light",navTitleBar: 'navTitleScroll', navTitleLogo: [blueLogo], navBack: "navBackgroundScroll", navItem: "navItemScroll"})
        }else if(window.scrollY <100){
            this.setState({navVariant: "dark", navTitleBar: 'navTitle', navTitleLogo: [whiteLogo], navBack: "navBackground", navItem: "navItem",})
        }
    }

    componentDidMount(){
        window.addEventListener("scroll", this.onScroll)
    }

    render() {
        return (
            <Fragment>
                <Navbar className={this.state.navBack} fixed="top" collapseOnSelect expand="lg" variant={this.state.navVariant}>
                    <Navbar.Brand className={this.state.navTitleBar} href="#home"><img src={this.state.navTitleLogo} alt=""/> Rawshan Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link className={this.state.navItem} href="#">Home</Nav.Link>
                            <Nav.Link className={this.state.navItem} href="#">Services</Nav.Link>
                            <Nav.Link className={this.state.navItem} href="#">Courses</Nav.Link>
                            <Nav.Link className={this.state.navItem} href="#">Portfolio</Nav.Link>
                            <Nav.Link className={this.state.navItem} href="#">Contact</Nav.Link>
                            <Nav.Link className={this.state.navItem} href="#">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;