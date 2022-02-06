import Sidebar from "./components/sidebar";
import Projects from "./components/projects";
import About from "./components/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={[<Sidebar />, <Projects />]}/>
        <Route path="/about" element={[<Sidebar />, <About />]}/>
      </Routes>
    </Router>
  );
}

export default App;
