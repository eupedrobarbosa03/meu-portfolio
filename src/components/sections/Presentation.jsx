import '../css/Presentation.css'
import MinhaFoto from '../../assets/img/minha_foto.jpg'
import Reveal from '../animations/Reveal'
import CV from '../../assets/cv.pdf'
import { useState } from 'react'
import { useIcons } from '../../hooks/useIcons'

const Presentation = () => {

    const { IconHtml, IconCss, IconJs, IconTs, IconReact, IconLinkedlin, IconWhatsapp } = useIcons();

    const [stacks] = useState([
        {icon: IconHtml, name: "html"},
        {icon: IconCss, name: "css"},
        {icon: IconJs, name: "js"},
        {icon: IconTs, name: "ts"},
        {icon: IconReact, name: "react"}
    ])


    return (
        <section className="presentation-container">
            <Reveal>
                <img src={MinhaFoto} className='minha-foto' alt='minha-foto' />
            </Reveal>
            <Reveal>
                <div className='presentation-container-text-more-info'>
                    <h2>Desenvolvedor Front-end {`</>`}</h2>
                    <p className='about'>Prazer, meu nome é Pedro Henrique. Tenho 20 anos e sempre foi uma paixão o mundo dos códigos. Sou um desenvolvedor front-end com foco em javascript, typescript e react. Atualmente estou me formando em análise e desenvolvimento de sistemas.</p>
                    <div className='stack-presentation-container'>
                        {stacks.map((stack) => (
                            <div className='stack-container' key={stack.name}>
                                <img src={stack.icon} alt={stack.name} className='icon-language' />
                                <p>{stack.name}</p>
                            </div>
                        ))}
                    </div>
                    <div className='container-download-cv-and-contact'>
                        <a href={CV} download={'cv.pdf'} className='button-download-cv'>Baixar CV</a>
                        <a href="https://www.linkedin.com/in/eupedrobarbosa/" className='container-contact' target='_blank'><img src={IconLinkedlin} className='icon-contact' />Linkedin</a>
                        <a href="https://wa.me/5561991313359" target="_blank" className='container-contact'><img src={IconWhatsapp} className='icon-contact' />Whatsapp</a>
                    </div>
                </div>
            </Reveal>
        </section>
    )
}

export default Presentation