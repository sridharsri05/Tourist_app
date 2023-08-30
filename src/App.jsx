
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Places from './components/PlacesToVisit/Places';
import Home from './components/Home';
import TimeToVist from './components/BestTime_ToVisit/TimeTovist';
import { FoodPackage } from './components/Food/FoodPackage';


function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Places' element={<Places />} />
          <Route path='/Time' element={<TimeToVist />} />
          <Route path='/Food' element={<FoodPackage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
