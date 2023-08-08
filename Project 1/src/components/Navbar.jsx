import React from 'react'

export default function navbar() {
    return (
        <div>
            <nav className='container'>
                <div className="logo">
                    <img src="\img\brand_logo.png" alt="" />
                </div>
                <ul>
                    <li href="#">Menu</li>
                    <li href="#">Location</li>
                    <li href="#">About</li>
                    <li href="#">Contact</li>

                </ul>
                <button>Login</button>
            </nav>
        </div>
    )
}
