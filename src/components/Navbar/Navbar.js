import React, {useState} from 'react'
import {Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks} from './Navbar.elements'
import {FaTimes, FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {Fragment} from 'react'
import {Button} from '../../globalStyles'
const Navbar = () => {

    const [click, setClick] = useState(false)
    const [button, setButton] = useState(true)
    
    const handleClick = () => setClick(!click)

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    return (
        <Fragment>
        <IconContext.Provider value={{color: "#fff"}}>
        <Nav>
            <NavbarContainer>
                <NavLogo>
                    <NavIcon/>
                    LinkHat
                </NavLogo>
                <MobileIcon onClick={handleClick}>{click ? <FaTimes/> : <FaBars/>}</MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to="/">Página Inicial</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to="/services">Serviços</NavLinks>
                    </NavItem>

                    <NavItem>
                        <NavLinks to="/">Contato</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </Fragment>
    )
}

export default Navbar
