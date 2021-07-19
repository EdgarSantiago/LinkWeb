import React, {useState, useEffect} from 'react'
import {Nav, NavbarContainer, NavLogo, NavIcon, MobileIcon, NavMenu, NavItem, NavLinks, NavItemBtn,
    NavBtnLink,} from './Navbar.elements'
import {FaTimes, FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {Fragment} from 'react'
import {Button} from '../../globalStyles'

import {Link} from 'react-scroll'

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

        useEffect(() => {
            showButton()
        }, [])

        window.addEventListener('resize', showButton)
    return (
        <Fragment>
        <IconContext.Provider value={{color: "#fff"}}>
        <Nav>
            <NavbarContainer>
                <NavLogo>
                <Link to="obj1">

                    <NavIcon/>
                    LinkHat
                </Link>

                </NavLogo>
                <MobileIcon onClick={handleClick}>{click ? <FaTimes/> : <FaBars/>}</MobileIcon>
                <NavMenu click={click}> 
                    <NavItem>
                        <Link onClick={handleClick} to="obj1" spy={true} smooth={true}>
                          <NavLinks >Inicio</NavLinks>
                        </Link>
                    </NavItem>

                    <NavItem>
                        <Link onClick={handleClick} to="services" spy={true} smooth={true}>
                        <NavLinks >Serviços</NavLinks>
                        </Link>
                    </NavItem>

                    <NavItem>
                        <Link onClick={handleClick} to="finances" spy={true} smooth={true}>
                        <NavLinks >Preços</NavLinks>
                        </Link>
                    </NavItem>
                    

                    <NavItem>
                        <Link onClick={handleClick} to="footerzin" spy={true} smooth={true}>
                        <NavLinks >Contato</NavLinks>
                        </Link>
                    </NavItem>

                   
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </Fragment>
    )
}

export default Navbar
