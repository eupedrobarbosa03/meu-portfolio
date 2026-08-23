import Reveal from '../animations/Reveal'
import './../css/ChatBph.css'
import IconGithub from '../../assets/icons/github.png'

const ChatBph = () => {
    return (
        <Reveal>
            <section className="chatbph-container" id="chat-bph">
                <div className='title-about-more-info-chatbph'>
                    <h2>Saiba mais sobre mim com o CHAT-BPH!</h2>
                    <p>Chat bph é um bot desenvolvido por mim para falar sobre mim, meus projetos, etc. Sua maior capacidade é ser ensinado a escrever coisas novas e lembrar disso para "sempre"!</p>
                    <p>Quer ensinar a ele? Utilize ele neste portfólio. Escreva algo assim: "quando eu falar #teste#, quero que você fale #olá, testando, 123-câmbio-123#".</p>
                    <a href="https://github.com/eupedrobarbosa03/chat-bph" target='_blank'><img src={IconGithub} className='icon-github' />Repositório</a>
                </div>
                <div className='chatbph-iframe-container'>
                    <Reveal>
                        <iframe src="https://eupedrobarbosa03.github.io/chat-bph/" className='chatbph-iframe'></iframe>
                    </Reveal>
                </div>
            </section>
        </Reveal>
    )
}

export default ChatBph