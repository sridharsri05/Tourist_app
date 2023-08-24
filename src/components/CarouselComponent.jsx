import banner from '/images/banner.1.jpg'
import pic1 from '/images/pic1.jpeg'
import pic2 from '/images/pic2.jpeg'
import pic3 from '/images/pic3.jpeg'
import pic4 from '/images/pic4.jpeg'

import Carousel from 'react-bootstrap/Carousel';

import { HashLink as Link } from 'react-router-hash-link'

const CarouselComponent = () => {
    return (
        <>
            <Carousel className="carousel-1" >
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image   "
                        src={banner}
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image "
                        src={pic1}
                        alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={pic2}
                        alt="Third slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={pic3}
                        alt="Third slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 carousel-image"
                        src={pic4}
                        alt="Third slide"
                    />

                </Carousel.Item>

            </Carousel>
            <div className="  gap-5   ">
                <div className=' text-center  '>
                    <h4 className='h-1'> Tourist Places to Tamil Nadu    </h4>
                    <h4 className='h-1'> Here Are  The Top Places to Visit In Tamil Nadu In 2023       </h4>
                </div>

                <div className="container    mt-4 ">
                    <ul className=' row row-cols-5   text-center  list-unstyled  '>
                        <li >
                            <Link to="#chennai" className=' text-decoration-none  fw-medium  '>
                                Chennai
                            </Link>
                        </li>
                        <li>
                            <Link to="#Kodaikanal" className=' text-decoration-none  fw-medium '>
                                Kodaikanal
                            </Link>
                        </li>
                        <li>
                            <Link to="#Madurai" className=' text-decoration-none fw-medium '>
                                Madurai
                            </Link>
                        </li>
                        <li>
                            <Link to="#Kumbakonam" className=' text-decoration-none fw-medium '>
                                Kumbakonam
                            </Link>
                        </li>
                        <li>
                            <Link to="#Theni" className=' text-decoration-none fw-medium '>
                                Theni
                            </Link>
                        </li>
                        <li >
                            <Link to="#Rameshwaram" className=' text-decoration-none fw-medium '>
                                Rameshwaram
                            </Link>
                        </li>
                        <li>
                            <Link to="#Ooty" className=' text-decoration-none fw-medium '>
                                Ooty
                            </Link>
                        </li>
                        <li>
                            <Link to="#Kanyakumari" className=' text-decoration-none fw-medium '>
                                Kanyakumari
                            </Link>
                        </li>
                        <li>
                            <Link to="#Yarcaud" className=' text-decoration-none fw-medium '>
                                Yarcaud
                            </Link>
                        </li>
                        <li>
                            <Link to="#Hogenakkal" className=' text-decoration-none fw-medium '>
                                Hogenakkal
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>



        </>
    );
};

export default CarouselComponent;