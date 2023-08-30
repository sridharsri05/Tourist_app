import ch1 from '/images/timetoTravel/chennai1.jpeg'
import ch2 from '/images/timetoTravel/chennai2.jpeg'
import ch3 from '/images/timetoTravel/chennai3.jpeg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const ChennaiVisit = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <section className=' rightSide'>
            <div className="text-center mg-5-1">
                <h2>TAMILNADU TOURISM</h2>
                <h6 className=' fw-bold '>Best Time TO Visit</h6>
            </div>
            {/*  first*/}
            <div className=' row row-cols-2 mg-sm-5'>
                <div className=' mt-5 ' >
                    <h3> 01.Chennai</h3>
                    <div className=' mt-5 '>
                        <h5>What  is the best time to visit :</h5>
                    </div>

                    <div style={{ textAlign: 'justify', textIndent: ' 18.5rem', lineHeight: ' 180%', fontSize: '15px' }}>
                        <p>
                            October to February during the winters and the  pre-monsoons season is the best time to visit Chennai, This time of the year is considered as the best time to explore the metropolitan city as summers are scorching and monsoons bring torrential downpours and cyclones. Its geographical location on the beautiful coastline mostly keeps the city's weather hot and humid.

                        </p>
                        <p>Chennai is one of the cities that has successfully blended the modern, traditional and sides with ease. The city welcomes everyone who wants to seek a soulful and spiritual connection but also those who love shopping for sarees and enjoy good food. There is no conundrum in Chennai when you visit. It's all about the moment, whether you decide to take a stroll down Marina Beach.</p>
                    </div>
                </div>
                {/* modal component */}
                <div>

                    <div
                        className="modal show"
                        style={{ display: 'block', position: 'relative' }}
                    >
                        <Modal.Dialog>
                            <Modal.Header closeButton className=' text-center '>
                                <Modal.Title className=' fw-bold' > More About Best Time To Travel To Chennai</Modal.Title>
                            </Modal.Header>

                            <Modal.Body >
                                <div className='  row row-cols-3  text-center  '>
                                    <div >
                                        <img src={ch1} alt="" style={{ height: '160px', width: '100px' }} />
                                        <p> Chennai,<br />india <br /> Source</p>
                                    </div>
                                    <div>
                                        <img src={ch2} alt="" style={{ height: '160px', width: '100px' }} />
                                        <p> Chennai, <br />kathipara <br />Source</p>
                                    </div>

                                    <div>
                                        <img src={ch3} alt="" style={{ height: '160px', width: '100px' }} />
                                        <p> Chennai, <br />Beach <br />Source</p>
                                    </div>
                                </div>

                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>Close</Button>
                                <Button variant="primary" onClick={handleShow} >Save changes</Button>

                            </Modal.Footer>
                            <Offcanvas show={show} onHide={handleClose}>
                                <Offcanvas.Header closeButton>
                                    <Offcanvas.Title className=' text-center'>
                                        <h4>
                                            Best Time To Visit In Chennai
                                        </h4>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>

                                    <h6 className=' fw-bold  '>
                                        Chennai in Winters (November- February)
                                    </h6>
                                    <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                                        <p>
                                            Winters, the best time to visit Chennai, begin in November and last till February. Even the transitional month of October is quite good for exploring the city. The weather is quite pleasant with the maximum temperature hovering around 30°C and the minimum around 22°C. Its proximity to the coastline also results in occasional rains, but it will not be something that will hamper travel plans to a great extent. Kapaleeshwarar temple, Goverment Museum, Fort St George, St. Andrews Church, Fort Museum, Nalli Silks, Kalakshetra Foundation, Vivekananda House etc. are some of the attractions that can be seen when in Chennai. The season is also famous for the array of festivals organised in the city like the Dance and Music Festival in December, Travel & Tourism Fair and Pongal in January and the Natyanjali Dance Festival held in February/ March. These events are traditional and important celebrations of Chennai and its culture and must not be missed when there.
                                            X
                                        </p>
                                    </div>

                                    <div>
                                        <h6 className=' mt-5 fw-bold'>
                                            Chennai in Summer (March - June)
                                        </h6>
                                        <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                                            <p>
                                                March marks the onset of the summer
                                                season in Chennai. It lasts till June and visiting the city during this time is not for the faint- hearted, some say. The days are blazing hot with the temperatures soaring as high as 39°C and the nights are equally warm with the minimum hovering around 27°C. Exploring the cityscape during this time of the year is an extremely exhausting affair and is, therefore, not advised to tourists.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className=' mt-5 fw-bold'>
                                            Chennai in Monsoons (July-September)
                                        </h6>
                                        <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                                            <p>

                                                Chennai is susceptible to heavy downpours and cyclones between the months of July and September. These months mark the monsoon season in the region and is considered off-season as tourism does not really thrive here. The extreme rainfalls and strong winds could prove to be a hindrance to sightseeing and, therefore, the monsoon season is not recommended to tourists. The hotel tariffs, however, drop drastically during the season, making it a decent option for budget travellers. In case one has to visit Chennai, they may want to plan a trip at the onset of the season when the showers are moderate and allow travelling through the city.                                            </p>
                                        </div>
                                    </div>
                                </Offcanvas.Body>
                            </Offcanvas>
                        </Modal.Dialog>
                    </div>
                </div>
            </div>
        </section>
    )

}

export default ChennaiVisit


