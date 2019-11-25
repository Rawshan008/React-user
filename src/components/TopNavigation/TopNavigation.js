import React, {Component, Fragment} from 'react';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
import '../../assets/css/bootstrap.min.css';
import '../../assets/css/custom.css';
import whiteLogo from '../../assets/img/navlogo.svg';
import blueLogo from '../../assets/img/navlogoScroll.svg';
import {NavLink} from "react-router-dom";

class TopNavigation extends Component {

    constructor(props){
        super(props);

        this.state={
            navTitleBar: "navTitle",
            navTitleLogo: [whiteLogo],
            navBack: "navBackground",
            navItem: "navItem",
            navVariant: "dark",
            pageTitle: this.props.title,
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
                <title>{this.state.pageTitle}</title>
                <Navbar className={this.state.navBack} fixed="top" collapseOnSelect expand="lg" variant={this.state.navVariant}>
                    <Navbar.Brand className={this.state.navTitleBar} href="#home"><img src={this.state.navTitleLogo} alt=""/> Rawshan Home</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Link><NavLink exact activeStyle={{color:'#007bff'}} className={this.state.navItem} to="/">Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#007bff'}} className={this.state.navItem} to="/services">Services</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#007bff'}} className={this.state.navItem} to="/courses">Courses</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#007bff'}} className={this.state.navItem} to="/portfolio">Portfolio</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#007bff'}} className={this.state.navItem} to="/contact">Contact</NavLink></Nav.Link>
                            <Nav.Link><NavLink exact activeStyle={{color:'#007bff'}} className={this.state.navItem} to="/about">About</NavLink></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </Fragment>
        );
    }
}

export default TopNavigation;