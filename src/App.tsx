import './App.css';
import Header from './components/Header';
import IntroPage from "./components/Intro";

function App() {

  return (
    <>
      <Header />
      <main className="h-[100vh] mb-2">
        <IntroPage />
      </main>
    </>
  )
}

export default App
