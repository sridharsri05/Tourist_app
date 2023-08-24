
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import NavBar from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import CarouselComponent from './components/CarouselComponent';
import Chennai from './components/pages/Chennai';
import { Rameshwaram } from './components/pages/Rameshwaram';
import Kodaikanal from './components/pages/Kodaikanal';
import Ooty from './components/pages/Ooty';
import Kanyakumari from './components/pages/Kanyakumari';
import Kumbakonam from './components/pages/Kumbakonam';
import Madurai from './components/pages/Madurai';
import Theni from './components/pages/Theni';
import Yercaud from './components/pages/Yercaud';
import Hogenakkal from './components/pages/Hogenakkal';

function App() {


  return (
    <>
      <BrowserRouter>
        <NavBar />
        <CarouselComponent />
        <Chennai />
        <Rameshwaram />
        <Kodaikanal />
        <Ooty />
        <Kanyakumari />
        <Kumbakonam />
        <Madurai />
        <Yercaud />
        <Theni />
        <Hogenakkal />
      </BrowserRouter>
    </>
  )
}

export default App
