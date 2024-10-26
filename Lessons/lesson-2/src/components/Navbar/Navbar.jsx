import React, { useState } from 'react'
import NavbarHeader from '../NavbarHeader'
const Navbar = () => {
    const [count, setCount] = useState(0)
    const fruits = ["olma", "banan", "ananas"]

    return (
        <div>
            <NavbarHeader count={count} />
            {/* <ul>
                {
                    fruits.map((fruit) => (
                        <li key={fruit}>{fruit}</li>
                    ))
                }
            </ul> */}
            {/* {isLoggedIn ? <h1>Xush kelibsiz!</h1> : <h1>Kabinetga kiring, iltimos!</h1>} */}
            <button className='btn btn-primary btn-sm' onClick={() => setCount(count + 1)}>click</button>
        </div>
    )
}

export default Navbar;
