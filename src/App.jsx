import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar/navBar";
import Home from "./pages/home/home";
import Category from "./pages/category/category";
import Membership from "./pages/membership/membership";
import Trainer from "./pages/trainer/trainer";
import AboutUs from "./pages/aboutus/aboutus";
import "./App.css";

function App() {
  return (
    <Router>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/trainer" element={<Trainer />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
