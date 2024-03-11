import React from "react";
import { NavLink } from "react-router-dom";
import './Header.css'

const Header = ({title}) => {
    return(
        <div className="Header">
            <div className="title_topo">{title}</div>
            <div className="nav-container">
                <NavLink className="nav" to="/" >Home</NavLink>
                <NavLink className="nav" to="/Cep" >CEP</NavLink>
                <NavLink className="nav" to="/Cnpj" >CNPJ</NavLink>
                <NavLink className="nav" to="/Fipe" >Fipe</NavLink>

            </div>

        </div>
    )
}

export default Header;