import Home1 from "./components/home/Home1";
import NavBar from "./components/NavBar";
import About from "./components/about/About";
import Resumes from "./components/resumes/Resumes";
import Projects from "./components/projects/Projects";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="overflow-hidden">
      <NavBar></NavBar>
      <Routes>
      <Route path="/" element={<Home1 />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/resumes" element={<Resumes />} />
      <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
