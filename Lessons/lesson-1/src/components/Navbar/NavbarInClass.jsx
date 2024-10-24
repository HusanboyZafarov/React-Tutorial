import React, { Component } from 'react'

class NavbarInClass extends Component {
    state = {
        name: "M"
    }
    render() {
        return (
            <nav className="navbar bg-body-tertiary">
                <div className="container">
                    <a className="navbar-brand" href="#">Navbar --{this.state.name}</a>
                </div>
            </nav>
        );
    }
}

export default NavbarInClass;