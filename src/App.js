import Sidebar from "./components/sidebar";
import Projects from "./components/projects";
import About from "./components/about";
import Footer from "./components/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={[<Sidebar />, <Projects />, <Footer />]}/>
        <Route path="/about" element={[<Sidebar />, <About />, <Footer />]}/>
      </Routes>
    </Router>
  );
}

export default App;
