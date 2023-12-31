import { BrowserRouter, Routes, Route } from "react-router-dom"
import Nav from "./components/Nav"
import Home from "./components/Home"
import About from "./components/About"
import Products from "./components/Products"
import Services from "./components/Services"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
export default function App(){
  return(
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/products" element={<Products />} />
        <Route exact path="/services" element={<Services />} />
        <Route exact path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
