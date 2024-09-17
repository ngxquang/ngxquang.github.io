import logo from './logo.svg';
import './App.css';
import { NavBar } from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Footer } from './components/Footer';
import { Blogs } from './components/Blogs';
import { Publications } from './components/Publications';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Blogs />
      <Publications />
      <Footer />
    </div>
  );
}

export default App;
