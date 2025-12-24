import React from 'react'
import './index.css'
import Layout from './components/Layout/Layout'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Careers from './components/pages/Careers'
import AboutUs from './components/pages/AboutUs.jsx'
import Services from './components/pages/Services'
import Blog from './components/pages/Blog.jsx'
import Contact from './components/pages/Contact.jsx'


const App = () => {
     return (
          <>
               <BrowserRouter>
                    <Layout>
                         <Routes>
                                   <Route path="/" element={<AboutUs />} />
                                   <Route path="/careers" element={<Careers />} />
                                   <Route path="/services" element={<Services />} />
                                   <Route path="/blog" element={<Blog />} />
                                   <Route path="/contact" element={<Contact />} />
                         </Routes>
                    </Layout>
               </BrowserRouter>


          </>
     )
}

export default App