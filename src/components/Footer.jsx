import { useState } from 'react'
import './css/Footer.css'
import { useIcons } from '../hooks/useIcons';
import Reveal from './animations/Reveal';

const Footer = () => {

    const { IconHtml, IconCss, IconJs, IconTs, IconReact } = useIcons();
    
    const [stacks] = useState([
        {icon: IconHtml, name: "html"},
        {icon: IconCss, name: "css"},
        {icon: IconJs, name: "js"},
        {icon: IconTs, name: "ts"},
        {icon: IconReact, name: "react"}
    ])
    
    const [navLinks] = useState([
        {id: 1, href: "#", name: "Home"},
        {id: 2, href: "#chat-bph", name: "Chat-Bph"},
        {id: 3, href: "#projects", name: "Projetos"},
        {id: 4, href: "https://github.com/eupedrobarbosa03", target: "_blank", name: "Github"},
        {id: 5, href: "https://www.linkedin.com/in/eupedrobarbosa/", target: "_blank", name: "Linkedin"},
        {id: 6, href: "https://wa.me/5561991313359", target: "_blank", name: "Whatsapp"},
    ])

    return (
        <footer className="footer-container">
            <div className='footer-informations'>
                <div className='about-and-navlinks-container'>
                    <Reveal>
                        <nav className='navbar-links-footer-container'>
                            <h2>Navegação Rápida</h2>
                            {navLinks.map((link) => (
                                <a href={link.href} key={link.id} target={link.target}>{link.name}</a>
                            ))}
                        </nav>
                    </Reveal>
                    <Reveal>
                        <div className='about-portfolio-container'>
                            <h2>Sobre este Portfólio</h2>
                            <p>Este portfólio foi desenvolvido com intenção de mostrar meus projetos ao público e aos recrutadores. Portfólio desenvolvido em react. Todos os direitos reservados. &copy;</p>
                        </div>
                    </Reveal>
                </div>
            </div>
        </footer>
    )
}

export default Footer