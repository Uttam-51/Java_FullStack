import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./Layout/Common/Footer"
import Header from "./Layout/Common/Header"
import About from "./Layout/Pages/About"
import Contact from "./Layout/Pages/Contact"
import Home from "./Layout/Pages/Home"


function App() {

  return (
    <BrowserRouter>

      {/* <Header />
      <Home />
      <About />
      <Contact />
      <Footer /> */}

      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/about" element={ <About /> }/>
        <Route path="/contact" element={ <Contact /> }/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
