import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Route,Routes} from "react-router-dom"

import Toppar from './components/Toppar';
import About from './components/About';
import Contacte from './components/Contacte';
import Policy from './components/Policy';
import Nvbar  from "./components/Nvbar";
import Homescreen from './screens/Homescreen';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Toppar/>
      <Nvbar/>
      <Routes>
        <Route path='/about'  element={<About/>}/>
        <Route path='/conatcte'  element={<Contacte/>}/>
        <Route path='/policy'  element={<Policy/>}/>
        <Route path='/'  element={<Homescreen/>}/>
      </Routes>
      </BrowserRouter>
 
    </div>
  );
}

export default App;
