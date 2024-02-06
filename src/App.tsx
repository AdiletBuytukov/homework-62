import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./components/Home/Home.tsx";
import Appbar from "./components/Appbar/Appbar.tsx";
import AboutUs from './components/AboutUs/AboutUs.tsx';
import Contacts from "./components/Contacts/Contacts.tsx";
import Cars from "./components/Auto/Auto.tsx";
import './assets/logo.jpeg';

const App = () => {

  return (
    <>
      <header >
        <Appbar/>
      </header>
      <div>
        <Routes>
          <Route path='/' element={(<Home/>)}/>
          <Route path='/AboutUs' element={(<AboutUs/>)}/>
          <Route path='/Contacts' element={<Contacts/>}/>
          <Route path='/Cars' element={<Cars/>}/>
          <Route path='*' element={<h1>Номенклатура будет скоро загружена...</h1>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
