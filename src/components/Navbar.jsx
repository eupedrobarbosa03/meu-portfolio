import { useState } from 'react'
import './css/Navbar.css'

const Navbar = () => {

    const [navLinks] = useState([
        {id: 1, href: "#", name: "Home"},
        {id: 2, href: "#chat-bph", name: "Chat-Bph"},
        {id: 3, href: "#projects", name: "Projetos"},
        {id: 4, href: "https://github.com/eupedrobarbosa03", target: "_blank", name: "Github"}
    ])

    const [menu, setMenu ] = useState("");

    const handleChangeStateNavbar = () => {
        setMenu((prevMenu) => prevMenu === "" ? "show-navbar" : "");
    };

    return (
        <>
            <nav className={`navbar-container ${menu}`}>
                {navLinks.map((link) => (
                    <a key={link.id} href={link.href} onClick={handleChangeStateNavbar} target={link.target}>{link.name}</a>
                ))}
            </nav>
            <button className='button-menu-navbar' onClick={handleChangeStateNavbar}>☰</button>
        </>
    )
}

export default Navbar