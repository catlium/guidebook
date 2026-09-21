import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Resources from "./pages/Resources";
import Navbar from "./components/navbar";
import Guide from "./pages/guide";

function App() {
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
<<<<<<< HEAD
        <Route path="/guide" element={<Guide />} />
=======
        <Route path="/resources" element={<Resources />} />
>>>>>>> 12596cce1b264e53003b62f802b2996f8e2c9823
      </Routes>
    </BrowserRouter>
  );
}

export default App;