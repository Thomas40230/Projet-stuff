import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import Error from "./pages/Error/Error.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Map from "./pages/Map/Map.jsx";
import "./App.css"

function App() {
    return (
        <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/Map/:id" element={<Map />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer />
        </div>
    )
}

export default App;