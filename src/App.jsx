import { useState } from 'react'

import './App.css'
import Header from './components/header/Header'
import Home from './components/pages/home/Home'
import Details from './components/pages/details/Details'
import {Routes,Route,BrowserRouter, Router} from 'react-router-dom';
import PlantCard from './components/pages/details/plantCards/PlantCard'
import DataProvider from './components/context/DataProvider'
import LoginDialogue from './components/login/LoginDialogue'
import GoogleMaps from './components/googleMaps/GoogleMaps'
import ChatBot from './components/chatBot/ChatBot'





function App() {
  const [count, setCount] = useState(0)
  

  return (
    <div>

    <DataProvider>
       <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/location' element={<GoogleMaps/>}/>
        <Route path='/details' element={<Details/>} />
        <Route path='/plantDetails/:id' element={<PlantCard/>}/>
        <Route path='/login' element={<LoginDialogue/>}/>
      </Routes>
      
      
      
      
      </BrowserRouter>
      </DataProvider>
    </div>
  )
}

export default App
