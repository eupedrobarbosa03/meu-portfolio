import Reveal from "./components/animations/Reveal"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import ChatBph from "./components/sections/ChatBph"
import Presentation from "./components/sections/Presentation"
import Projects from "./components/sections/Projects"

function App() {
  return (
    <>
      <div className="app-container">
        <Header />
        <Main>
          <Presentation />
          <Projects />
          <ChatBph />
        </Main>
      </div>
      <Footer />
    </>
  )
}

export default App
