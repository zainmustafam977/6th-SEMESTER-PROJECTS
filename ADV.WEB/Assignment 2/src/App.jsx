import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Programs from "./components/Programs";
import ProgramDetail from "./components/ProgramDetail";
import Admission from "./components/Admission";
import Faculty from "./components/Faculty";

// ScrollToTop component — scrolls page to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/program/:id" element={<ProgramDetail />} />
          <Route path="/admissions" element={<Admission />} />
          <Route path="/faculty" element={<Faculty />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
