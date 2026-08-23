import Reveal from "./animations/Reveal"
import Navbar from "./Navbar"
import './css/Header.css'
import { useState } from "react"
import { useEffect } from "react"

const Header = () => {

    const [effect, setEffect] = useState("");

    useEffect(() => {
        const interval = setInterval(() => {
            setEffect((prev) => prev === "effect" ? "" : "effect");
        }, 3000)
        return () => clearInterval(interval);
    }, [])

    return (
        <header className="header-container">
            <Reveal>
                <h2 className={`title-header-pedro-dev ${effect}`}>Pedro<span>.dev</span><span>{`</>`}</span></h2>
            </Reveal>
            <Reveal>
                <Navbar />
            </Reveal>
        </header>
    )
}

export default Header