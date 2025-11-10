import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Contact from './pages/Contact';
import Donates from './pages/Donates';
import Rules from './pages/Rules';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:appId" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/donates" element={<Donates />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
