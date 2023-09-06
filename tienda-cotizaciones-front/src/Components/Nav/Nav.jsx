import React from 'react'
import './Nav.css'
import { NavLink } from 'react-router-dom'

function NavBar() {
    return (
        <aside className='sidebar'>
        <nav className="nav">
            <ul>
                <NavLink style={{textDecoration: 'none'}} to="/" className='li'><button className='btn-nav'>Salir</button></NavLink>
                <NavLink style={{textDecoration: 'none'}} to="/home" className='li'><button className='btn-nav'>Home</button></NavLink>
                <NavLink style={{textDecoration: 'none'}} to="/cotizar" className='li'><button className='btn-nav'>Cotizar</button></NavLink>
            </ul>
        </nav>
        </aside>
    )
}

export default NavBar