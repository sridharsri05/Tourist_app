import React from 'react'
import CarouselComponent from './CarouselComponent'
import Chennai from './pages/Chennai'
import { Rameshwaram } from './pages/Rameshwaram'
import Kodaikanal from './pages/Kodaikanal'
import Ooty from './pages/Ooty'
import Kanyakumari from './pages/Kanyakumari'
import Kumbakonam from './pages/Kumbakonam'
import Madurai from './pages/Madurai'
import Yercaud from './pages/Yercaud'
import Theni from './pages/Theni'
import Hogenakkal from './pages/Hogenakkal'

const Home = () => {
    return (
        <div>
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
        </div>
    )
}

export default Home