import { HashRouter as Router, Routes, Route } from "react-router-dom"
import Acceuil from "./pages/Acceuil";
import Contact from "./pages/Contact";
import Atelier from "./pages/L'Atelier";
import Projets from "./pages/Projets";
import Services from "./pages/Services";
import Projet1 from "./pages/projets/Projet1";
import Projet2 from "./pages/projets/Projet2";
import Projet3 from "./pages/projets/Projet3";

function App() {

  return (
    
    <Router>
      <Routes>
        <Route path="/" element={<Acceuil/>} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/atelier' element={<Atelier />} />
        <Route path='/projets' element={<Projets />} />
        <Route path='/services' element={<Services />} />
        <Route path='/projets/Projet1' element={<Projet1 />} />
        <Route path='/projets/Projet2' element={<Projet2 />} />
        <Route path='/projets/Projet3' element={<Projet3 />} />

      </Routes>
    </Router>
   
  )
}

export default App
