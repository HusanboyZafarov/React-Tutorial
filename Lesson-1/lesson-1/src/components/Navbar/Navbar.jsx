import React, { useState } from 'react'

const Navbar = () => {

    const [username, setUsername] = useState("F")
    const [count, setCount] = useState(0)


    return (
        <nav className="navbar bg-body-tertiary">
            <div className="container">
                <a className="navbar-brand" href="#">Navbar {username} -- {count}</a>
            </div>

            <button className='btn btn-sm btn-primary' onClick={() => setCount(count + 1)}>click me</button>
        </nav>
    )
}

export default Navbar