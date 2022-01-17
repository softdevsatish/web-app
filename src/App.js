import './App.css';
import Navbar from './components/nav-bar'
import Home from './components/Home'
import Footer from './components/Footer';
import Register from './components/Register';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
    <Router>
    <Navbar/>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
   </Routes>
   <Footer/>
   </Router>
    </>
  );
}

export default App;
