import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Blog_Details from "./pages/Blog_Details";
 function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<About/>}/>
                <Route path='blog' element={<Blog/>} />
                <Route path="resume" element={<Resume/>} />
                <Route path="contact" element={<Contact />} />
                <Route path="portfolio" element={<Portfolio />} />
                <Route path="blog_details" element={<Blog_Details />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;