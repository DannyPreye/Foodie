import ProductPages from "./Pages/ProductPages";
import Navigation from "./Components/Nav";
import About from "./Pages/About";
import Home from "./Pages/Home"
import Footer from "./Components/Footer";
import Contact from "./Pages/Contact";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/products" element={<ProductPages />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Home />} />
                </Routes>
                <Footer />
            </Router>


        </div>
    );
}

export default App;
