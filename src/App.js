import Blog from "./Components/Blog";
import Navbar from "./Components/Navbar";
import React, { useState, useEffect } from "react";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import "./video.css"


function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    setIsDark(
      window.matchMedia("(prefers-color-scheme:light)").matches ? false : true
    );
  }, []);

  const ctx = {
    theme: [isDark, setIsDark],
  };

  return (
    <React.Fragment>
      <div className={isDark ? "dark " : ""}>
        <BrowserRouter>
          <div className="bg-orange-300 dark:text-white min-h-screen pb-10">
            <Navbar isDark={isDark} setIsDark={setIsDark} />
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="blog/:id" element={<Blog ctx={ctx} />} />
            </Routes>
          </div>
        </BrowserRouter>
  
        <Footer />
      </div>
    </React.Fragment>
  );
  
}

export default App;
