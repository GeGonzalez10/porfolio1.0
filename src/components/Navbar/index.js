import React from 'react'
import {FaBars} from 'react-icons/fa'
import {Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn, NavBtnLink} from './NavbarComponents'

export const Navbar = ({toggle}) => {
    return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                    Genesis Gonzalez
                </NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem><NavLinks to="Home">Home</NavLinks></NavItem>
                    <NavItem><NavLinks to="About">Sobre mí</NavLinks></NavItem>
                    {/* <NavItem><NavLinks to="Experience">Experiencia</NavLinks></NavItem> */}
                    <NavItem><NavLinks to="Proyects">Proyectos</NavLinks></NavItem>                 
                </NavMenu>
                <NavBtn> <NavBtnLink to="/Contact">Contacto</NavBtnLink></NavBtn>
                {/* Estaría cool un botón para cambiar a modo oscuro */}
            </NavbarContainer>
        </Nav>
    </>
    );
};
export default Navbar;