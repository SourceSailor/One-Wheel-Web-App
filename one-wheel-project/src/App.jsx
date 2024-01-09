import "./App.css";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router";
import About from "./components/About"; // Make sure this import is correct
import Home from "./components/Home"; // Make sure this import is correct

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Products" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
