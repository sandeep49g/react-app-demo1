import React from 'react'
import {Link} from 'react-router-dom';


export default function Nav() {
    return (
        <nav>
            <ul className='nav-links'>
                <Link to='/home'>
                    <li>Home</li>
                </Link>
                <Link to='/about'>
                    <li>About</li>
                </Link>
                <Link to='/users'>
                    <li>Users</li>
                </Link>
            </ul>
        </nav>
    )
}
