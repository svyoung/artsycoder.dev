import { siteName } from "../../lib/variables"
export default function Header() {
    return (
        <header className="header py-1 px-1 sm:px-7 bg-[#688a7f] text-white text-[1rem] sm:text-[1.2rem] shadow-xs text-center">
            {siteName}
        </header>
    )
}