import React, {useContext, useEffect, useRef} from 'react';
import {NavLink} from "react-router-dom";
import cx from "classnames";
import styles from './NavMenu.module.scss';
import {NavMenuContext} from "../../contexts";

const NavMenu = () => {
    const navRef = useRef(null);
    const {isMenuOpen, setIsMenuOpen} = useContext(NavMenuContext);
    const handleMenuClose = () => {setIsMenuOpen(false)}
    const classNames = cx (styles.container,{
        [styles.open]: isMenuOpen
    });
    useEffect(()=> {
       const handleClick = () => {
           if (isMenuOpen) {
               alert (123);
               handleMenuClose ()
           }
       };
window.addEventListener("click", handleClick);
return () => {
window.removeEventListener("click", handleClick )};
    };
}, [isMenuOpen, handleMenuClose]);
        return (
            <nav classNames={ styles['nav-menu']}>
            <ul>
                <li>
                    <NavLink to="/">home</NavLink>
                </li>
                <li>
                    <NavLink to="/load">load data</NavLink>
                </li>
                <li>
                    <NavLink to="/signup">signup</NavLink>
                </li>
                <li>
                    <NavLink to="/chat">chat</NavLink>
                </li>
            </ul>
        </nav>
        )
    };


export default NavMenu;