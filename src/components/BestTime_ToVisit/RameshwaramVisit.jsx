import ch1 from '/images/timetoTravel/rameshwaram1.jpeg'
import ch2 from '/images/timetoTravel/rameshwaram2.jpeg'
import ch3 from '/images/timetoTravel/rameshwaram3.jpeg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const RameshwaramVisit = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section>
            <div className=' row row-cols-2 mg-sm-5'>
                <div >
                    <h3> 02.RameshWaram</h3>

                    <div
                        className="modal show"
                        style={{ display: 'block', position: 'initial' }}
                    >
                        <Modal.Dialog >
                            <Modal.Header closeButton className=' text-center '>
                                <Modal.Title className=' fw-bold'> More About Best Time To Travel To RameshWaram</Modal.Title>
                            </Modal.Header>

                            <Modal.Body >
                                <div className='  row row-cols-3  text-center  '>
                                    <div >
                                        <img src={ch1} alt="" style={{ height: '160px', width: '100px' }} />
                                        <p> Railway,<br />Bridge <br /> Source</p>
                                    </div>
                                    <div>
                                        <img src={ch2} alt="" style={{ height: '160px', width: '100px' }} />
                                        <p> Lighthouse,  <br />Source</p>
                                    </div>

                                    <div>
                                        <img src={ch3} alt="" style={{ height: '160px', width: '100px' }} />
                                        <p> Pilgrims, <br /> Temple <br />Source</p>
                                    </div>
                                </div>

                            </Modal.Body>

                            <Modal.Footer>
                                <Button variant="secondary" onClick={handleClose}>Close</Button>
                                <Button variant="primary" onClick={handleShow} >Save changes</Button>

                            </Modal.Footer>
                        </Modal.Dialog>
                    </div>

                </div>
                {/*  second component */}
                <div>
                    <div className=' mg-md-5 '>
                        <h5>What  is the best time to visit :</h5>
                    </div>

                    <div style={{ textAlign: 'justify', textIndent: ' 18.5rem', lineHeight: ' 160%', fontSize: '14.5px' }}>
                        <p>
                            The best time to visit Rameshwaram is from October to April. However, as far ad the weather goes, Rameshwaram experiences tropical climate which means the though the seasons greatly vary, the temperatures may not. this makes Rameshwaram a destination which can be visited all year round. This makes RameshWaram a destination which can be visited all year round.Winter (November to February) are cool and temperature comes down to 17 degrees Celcius. This is the most pleasant season for sightseeing and visiting neighbourhoods. The Monsoons (July to September) are humid with average rainfalls,but the scenic view of the coastal region during these months is enjoyable.
                        </p>
                        <p> Dotted with temples along the seashore and located on a beautiful island, rumour has it that this is where Lord Rama built the bridge across the ocean to reach Sri Lanka. One of the holiest places in the country, pilgrims flocks to this town to pay their respects and worship Lord Shiva. With a tropical climate throughout the year, this hamlet can pretty much be visited at any time.</p>
                    </div>

                </div>

                {/* canvas */}
                <Offcanvas show={show} onHide={handleClose} placement='end'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className=' text-center'>
                            <h4>
                                Best Time To Visit In Rameshwaram
                            </h4>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>

                        <h6 className=' fw-bold  '>
                            Rameshwaram in Winters (December- February)
                        </h6>
                        <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                            <p>
                                Winters in Rameshwaram, which last from October all the way to March, is said to be the peak season for visiting Rameshwaram if you are visiting the place as a tourist and not a pilgrim. The temperature during these months drops considerably than the other two seasons, with it ranging from 20 degree Celsius to 30 degree Celsius. The town is also blessed with chilly winds which make the atmosphere even more amicable. This season, therefore, makes for the best time for tourists to take part in a plethora of outdoor activities and enjoy their stay. During December, Rameshwaram also hosts the festival of Arudhra Darshanam which is essentially a festival that celebrates an aspect of Lord Shiva. This is said to be one of the most celebrated festivals amongst all the ones celebrated in Rameshwaram.
                            </p>
                        </div>
                        <h6 className=' fw-bold  '>
                            Rameshwaram in Monsoon (July - October)
                        </h6>
                        <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                            <p>
                                The monsoons in Rameshwaram experience temperatures ranging from 28 degree Celsius to 35 degree Celsius. These temperatures are similar to those during the summers, as is the climate except the small relief of humidity received due to short but effective downpours. Though monsoons are humid, August-October offers a good climate to explore Rameswaram as temperatures drop down during this time
                            </p>
                        </div>
                        <div>
                            <h6 className=' fw-bold  '>
                                Rameshwaram in Summer(March - June)
                            </h6>
                            <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                                <p>
                                    The summers in Rameshwaram last from April to July and the average temperatures during this time range from 27 degree Celsius to 40 degree Celsius. Summers are also called the pilgrim season in Rameshwaram, meaning the town may be exceptionally crowded with chances of various processions and chants throughout the area. The climate in the summers stays hot, as is usual for most Tamil Nadu towns, with the afternoons Being exceptionally sunny. However, the rest of the day is said to clear up, and the heat may not bother you as much
                                </p>
                            </div>
                        </div>




                    </Offcanvas.Body>
                </Offcanvas>

            </div >
        </section >
    )
}

export default RameshwaramVisit