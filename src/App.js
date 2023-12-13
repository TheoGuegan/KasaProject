import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import About from "./pages/About";
import Error from "./pages/Error";
import Logement from "./pages/Logement";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<Error />} />
        <Route path="/cards/:id" element={<Logement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
