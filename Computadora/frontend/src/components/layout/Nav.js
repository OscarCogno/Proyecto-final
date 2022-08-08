import '../../styles/components/layout/Nav.css';
import { useState } from 'react';
import { NavLink } from "react-router-dom";

import React from 'react';

const Nav = (props) => {

    const [menuToggle, setMenuToggle] = useState(false);

    const handleButtonClick = e => {
        setMenuToggle(prevState => {
            return !prevState;
        })
    }

    return (
        <nav>
            <button className="nav-boton" onClick={handleButtonClick}>Menú</button> 
            <NavLink to="/" className={`nav-enlace ${!menuToggle && 'desaparece'}`}>Home</NavLink>
            <NavLink to="/Cuenta" className={`nav-enlace ${!menuToggle && 'desaparece'}`}>Cuenta</NavLink>
            <NavLink to="/Empresa" className={`nav-enlace ${!menuToggle && 'desaparece'}`}>Empresa</NavLink>
            <NavLink to="/Servicio-al-cliente" className={`nav-enlace ${!menuToggle && 'desaparece'}`}> Servicio al cliente</NavLink>
            <NavLink to="/Contacto" className={`nav-enlace ${!menuToggle && 'desaparece'}`}>Contacto</NavLink>
            <NavLink to="/Productos" className={`nav-enlace ${!menuToggle && 'desaparece'}`}>Productos</NavLink>
        </nav>
    );
}

export default Nav;