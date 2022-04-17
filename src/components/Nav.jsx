import React, { useState } from 'react'
import { NavBar, NavLogo, NavMenu, NavList, NavLink, Bars } from '../styles/styledElements'

function Nav() {

    const [show, setShow] = useState(false);
    console.log(show);
  return (
    <>
        <NavBar show={show}>
            <Bars onClick={() => setShow(!show)} />

            <NavLogo to='/'>
                MyReactSite
            </NavLogo>
            <NavMenu show={show}>
                <NavList>
                    <NavLink to='/'>
                        Home
                    </NavLink>
                </NavList>
                <NavList>
                    <NavLink to='/about'>
                        About
                    </NavLink>
                </NavList>
                <NavList>
                    <NavLink to='/Blog'>
                        Blog
                    </NavLink>
                </NavList>
            </NavMenu>
        </NavBar>
    </>
  )
}

export default Nav