import './App.css';
import { Routes, Route } from "react-router-dom"; 
import Navbar from './Pages/Share/Navbar/Navbar';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Appointment from './Pages/Appointment/Appointment';
import Login from './Pages/Login/Login';
 

function App() {
  return (
    <div className='px-12 max-w-7xl mx-auto'> 
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/about" element={<About />}/>  
        <Route path="/appointment" element={<Appointment />}/>  
        <Route path="/login" element={<Login />}/>  
      </Routes>  
    </div>
  );
}

export default App;
