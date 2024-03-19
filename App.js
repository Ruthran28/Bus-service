
import './App.css';
import About from './Components/About';
import Businformation from './Components/Businformation';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import {Route,Routes} from 'react-router-dom'
function App() {
  return (
   <>
   <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} exact/>
    <Route path='/information' element={<Businformation/>} exact/>
    <Route path='/about' element={<About/>} exact/>

   </Routes>
   
   </>
  );
}

export default App;
