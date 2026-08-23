import ImageChatBph from '../assets/img/chat_bph.png'
import ImageAcademy from '../assets/img/academy.png'
import ImageBoxshadow from '../assets/img/boxshadow.png'
import ImageLocalizacep from '../assets/img/localizacep.png'
import ImageBankTs from '../assets/img/bank_ts.png'
import ImageGeneratorPassword from '../assets/img/generatorPassword.png'
import ImageCalculator from '../assets/img/calculator.png'

export const useProjects = () => {
    const projects = [
        {name: "chat-bph", image: ImageChatBph, description: "Chat-bph é um chat desenvolvido para falar sobre mim. O chat possui diversas funcionalidades. Possui comandos, mensagens interativas, etc.", path: {
            repository: "https://github.com/eupedrobarbosa03/chat-bph",
            deploy: "https://eupedrobarbosa03.github.io/chat-bph/"
        }, technologies: ["HTML", "CSS", "Typescript"]},
        {name: "Academy", image: ImageAcademy, description: "Academy é um gerenciador de academia que possibilita cadastro de alunos e instrutores, marcação de treinos, edição de alunos e instrutores, etc.", path: {
            repository: "https://github.com/eupedrobarbosa03/academy",
            deploy: "https://eupedrobarbosa03.github.io/academy/"
        }, technologies: ["HTML", "CSS", "Typescript"]},
        {name: "BoxShadow.css", image: ImageBoxshadow, description: "BoxShadow.css é uma aplicação web gratuita que permite a criação de sombras em tempo real com css.", path: {
            repository: "https://github.com/eupedrobarbosa03/box-shadow",
            deploy: "https://eupedrobarbosa03.github.io/box-shadow/"
        }, technologies: ["React", "Vite", "CSS"]},
        {name: "Localiza-cep", image: ImageLocalizacep, description: "O LOCALIZACEP é uma aplicação web gratuita e segura para ver informações de um CEP. É possível ver Estado, localidade, UF, DDD, região, logradouro, bairro e o IBGE.", path: {
            repository: "https://github.com/eupedrobarbosa03/localiza-cep",
            deploy: "https://eupedrobarbosa03.github.io/localiza-cep/"
        }, technologies: ["HTML", "CSS", "Typescript"]},
        {name: "Bank-ts", image: ImageBankTs, description: "Bank-ts é um sistema bancário fictício que simula operações bancárias, como: sacar, pix, depositar e muito mais!", path: {
            repository: "https://github.com/eupedrobarbosa03/bank-ts",
            deploy: "https://github.com/eupedrobarbosa03/bank-ts"
        }, technologies: ["Typescript"]},
        {name: "Generator Password", image: ImageGeneratorPassword, description: "Generator password é um gerador de senhas fortes e seguras com preferência de tamanho da senha e caracteres.", path: {
            repository: "https://github.com/eupedrobarbosa03/generator-password-2",
            deploy: "https://eupedrobarbosa03.github.io/generator-password-2/"
        }, technologies: ["HTML", "CSS", "Typescript"]},
        {name: "Calculator", image: ImageCalculator, description: "Uma calculadora simples que realiza operações básicas do dia a dia.", path: {
            repository: "https://github.com/eupedrobarbosa03/calculator",
            deploy: "https://eupedrobarbosa03.github.io/calculator/"
        }, technologies: ["HTML", "CSS", "Javascript"]}
    ]
    return { projects };
};