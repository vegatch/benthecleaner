import React from 'react'
import Navbar from './Components/navbar'
import Footer from './Components/footer'
import { Route,
    // NavLink,
    HashRouter,
    Routes } from "react-router-dom";
import Home from './pages/home';
import About from './pages/aboutUs';
import BookNow from './pages/bookNow'
import Contact from './pages/contactUs'
import ErrorPage from './pages/errorPage';
import './CSS/main.css'

export default function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" exact component={Home} />
    //     <Route path="/about" component={About} />
    //   </Routes>
    // </Router>
    <HashRouter>
        <div>
            <Navbar/>
        </div>
        <div>
            <Routes>
                <Route exact path='/'  element={<Home/>}/>
                <Route path='/About' element={<About/>}/>
                <Route path='/bookNow' element={<BookNow/>}/>
                <Route path='/contactUs' element={<Contact/>}/> 
                <Route  path="*" element={<ErrorPage/>}/> 
            </Routes>
        </div>
        <div>
            <Footer/>
        </div>
    </HashRouter>
  );
}