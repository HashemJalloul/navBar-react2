
import { useState } from 'react'
import './Nav.css'
import NavButton from './NavButton'

const Nav = ({ logo, items, btn }) => {

    const [navActive, setNavActive] = useState(items[0]?.content)
    const [showMobileMenu, setShowMobileMenu] = useState(false)

    return (
        <nav>
            <h1 className="logo">{logo}</h1>
            <ul className="nav-items">
                {items?.map((item, index) => {
                    return (
                        <li key={index}>
                            <a href={item?.link}
                                onClick={() => setNavActive(item?.content)}
                                className={navActive === item?.content ? 'active' : ''}>
                                {item?.content}
                            </a>
                        </li>
                    )
                })}
            </ul>
            <button className="nav-btn">{btn}</button>
            <button
                className="mobile-menu-btn"
                onClick={() => setShowMobileMenu(!showMobileMenu)}>< NavButton />
            </button>
            <ul className={`mobile-menu ${showMobileMenu && 'show'}`}>
                {items?.map((item, index) => {
                    return (
                        <li
                            key={index}>
                            <a href={item?.link}
                                onClick={() => setNavActive(item?.content)}
                                className={navActive === item?.content ? 'active' : ''}>
                                {item?.content}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav >
    )
}

export default Nav
