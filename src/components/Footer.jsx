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
                        <div className='about-portfolio-container'>
                            <h2>Sobre este Portfólio</h2>
                            <p>Este portfólio foi desenvolvido com intenção de mostrar meus projetos ao público e aos recrutadores. Portfólio desenvolvido em react.</p>
                        </div>
                    </Reveal>
                    <Reveal>
                        <nav className='navbar-links-footer-container'>
                            <h2>Links Rápidos</h2>
                            {navLinks.map((link) => (
                                <a href={link.href} key={link.id} target={link.target}>{link.name}</a>
                            ))}
                        </nav>
                    </Reveal>
                </div>
                <Reveal>
                    <div className='title-footer-pedro-henrique-and-stacks-container'>
                        <h2>Pedro Henrique</h2>
                        <p>Obrigado por ver meu portfólio! Espero que tenha gostado!</p>
                        <div className='stack-footer-container'>
                            {stacks.map((stack) => (
                                <div className='stack-container-f' key={stack.name}>
                                    <img src={stack.icon} alt={stack.name} className='icon-language' />
                                    <p>{stack.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>
        </footer>
    )
}

export default Footer