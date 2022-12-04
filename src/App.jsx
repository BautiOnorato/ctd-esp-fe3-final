import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";


function App() {
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/dentist/:id" element={<Detail/>} />
          <Route path="/favs" element={<Favs/>} />
        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
