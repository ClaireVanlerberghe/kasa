import { Routes, Route, BrowserRouter } from 'react-router-dom'
import "./App.css";
import Home from "../Home/Home";
import About from "../About/About";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function App() {
  return(
    <div className="App">
      <Header />
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
      </Routes>
      </BrowserRouter> 
      <Footer />
    </div>
  )
}
export default App;