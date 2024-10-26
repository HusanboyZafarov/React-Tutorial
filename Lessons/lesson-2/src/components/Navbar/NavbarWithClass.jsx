import React, { Component } from 'react'

class NavbarWithClass extends Component {
    state = {
        number: 0,
        isLoggedIn: false
    }
    
    componentDidMount() {
        console.log("Navbar Mounted");
    }

    componentDidUpdate() {
        console.log("Navbar Updated!");
    }


    handleIncrease = () => {
        const number = this.state.number++
        const isLoggedIn = !(this.state.isLoggedIn)
        this.setState({ isLoggedIn })
    }

    render() {
        return (
            <div className='container'>
                <h1>This is number: {this.state.number}</h1>
                <button className='btn btn-primary' onClick={() => this.handleIncrease()}>Click</button>
            </div>
        );
    }
}

export default NavbarWithClass;