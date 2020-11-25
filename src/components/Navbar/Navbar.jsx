import React from 'react'
import './_Navbar.scss';
import Logo from './Logo';
import { MenuItems } from "./MenuItems";
import {Link as LinkR} from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <header className="header">
                <nav className="header__nav">
                    <Logo />
                    <ul className="header__menu">
                        {MenuItems.map((item, index) => {
                            return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>{item.title}</a>
                            </li>
                            )                       
                        })}
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Navbar
