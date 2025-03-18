import { siteName } from "../../lib/variables"
export default function Header() {
    return (
        <header className="header py-1 px-1 sm:px-7 bg-[#688a7f] text-white shadow-xs flex flex-row justify-between items-center">
            <div className="site-name text-[1rem] sm:text-[1.2rem]">
                <a href="/">{siteName}</a>
            </div>
            <div className="text-[0.8rem]">
                <a href="/about">about</a> | {" "}
                <a href="/projects">projects</a> | {" "}
                <a href="/contact">contact</a>
            </div>
        </header>
    )
}