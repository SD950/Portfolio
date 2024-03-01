import './App.css';
import Header from "./components/Header.js";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
//import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import withSplashScreen from './components/withSplashScreen'; 
import PreLoader from './components/PreLoader';

function App() {
  return (
    <>
    <PreLoader />
    <Header />
    <Hero />
    <About />
    <Projects />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
