import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { siteName } from '../lib/variables';
import './App.css';
import Header from './components/Header';
import IntroPage from "./components/Intro";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
        <Header />
        <main className="h-[100vh] pt-[2rem] mt-[5%] px-4 mb-2 pb-[2rem] w-full md:w-3/4 lg:w-1/2 text-[0.9rem] md:text-[1rem] m-auto justify-between text-[#555555] ">
          <Routes>
              <Route path="/" element={<IntroPage />} />
              <Route path="/about" element={<AboutMe />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <footer>
          Copyright &copy; {new Date().getFullYear()} {siteName}.
        </footer>
    </Router>
  )
}

export default App
