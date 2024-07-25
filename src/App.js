import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cardapio from "./pages/Cardapio";
import Pratos from "./pages/Pratos";
import Espaco from "./pages/Espaco";
import Faq from "./pages/Faq";
import Sobre from "./pages/Sobre";
//import Contact from "./pages/Contact";
//import NoPage from "./pages/NoPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path="cardapio" element={<Cardapio />} />
      <Route path="pratos" element={<Pratos />} />
      <Route path="espaco" element={<Espaco />} />
      <Route path="faq" element={<Faq />} />
      <Route path="sobre" element={<Sobre />} />
    </Routes>
  </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

export default App;
