import Blog from "./Components/Blog";
import Navbar from "./Components/Navbar";
import React, { useState, useEffect } from "react";
import Home from "./Components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
// import backgroundvideo from "src/Assets/images/ArcticEnergeticHuemul.mp4";


const VideoBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
  overflow: hidden;
  background: url('/path/to/video.mp4') no-repeat center center fixed;
  background-size: cover;
`;



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
            <div style={{ backgroundColor: '#FFC900' }}className="bg-low-white bg-orange dark:text-white min-h-screen pb-10">
            {/* add video here */}
            <VideoBackground />
            <Navbar isDark={isDark} setIsDark={setIsDark} />
            <Routes>
              <Route exact path="/blog" element={<Home />} />
              <Route exact path="/blog/:id" element={<Blog ctx={ctx} />} />
              {/* <Route exact path="/blog/contact" element={<Contact />} /> */}
            </Routes>

          </div>
        </BrowserRouter>

        <Footer />
      </div>
    </React.Fragment>
  );
  // return (
  //   <BrowserRouter>
  //     <div className={`App ${isDark ? "dark" : ""}`}>
  //       <VideoBackground />
  //       <div className="content">
  //         <Navbar isDark={isDark} setIsDark={setIsDark} />
  //         <Routes>
  //           <Route path="/blog" element={<Home />} />
  //           <Route path="/blog/:id" element={<Blog ctx={ctx} />} />
  //           <Route path="/blog/contact" element={<Contact />} />
  //         </Routes>
  //         <Footer />
  //       </div>
  //     </div>
  //   </BrowserRouter>
  // );
}

export default App;
