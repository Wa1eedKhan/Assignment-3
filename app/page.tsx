import Header from './components/Header';
import Hero from './components/Hero'; 
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <Hero /> 
      
      <main>
        <About />
        <Services />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
