import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
// import Footer from "./Components/Footer";
// import Navbar from "./Components/Navbar";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";
import Home from "./Routes/Home";


function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/home" element={<Home/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/dentist/:id" element={<Detail/>} />
            <Route path="/favs" element={<Favs/>} />
          </Route>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
