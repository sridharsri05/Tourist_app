import ch1 from '/images/timetoTravel/yercaud1.jpeg'
import ch2 from '/images/timetoTravel/yercaud2.jpeg'
import ch3 from '/images/timetoTravel/yercaud3.jpeg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const YercaudVisit = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section>
            <div className=' row row-cols-2 mg-sm-5'>
                <div >
                    <h3> 08.Yercaud</h3>

                    <div
                        className="modal show"
                        style={{ display: 'block', position: 'initial' }}
                    >
                        <Modal.Dialog >
                            <Modal.Header closeButton className=' text-center '>
                                <Modal.Title className=' fw-bold'> More About Best Time To Travel To Yercaud</Modal.Title>
                            </Modal.Header>

                            <Modal.Body >
                                <div className='  row row-cols-3  text-center  '>
                                    <div >
                                        <img src={ch1} alt="" style={{ height: '160px', width: '100px' }} />
                                        <p> Easemytrip,<br /> Source</p>
                                    </div>
                                    <div>
                                        <img src={ch2} alt="" style={{ height: '160px', width: '100px' }} />
                                        <p> Oyorooms,  <br />Source</p>
                                    </div>

                                    <div>
                                        <img src={ch3} alt="" style={{ height: '160px', width: '100px' }} />
                                        <p> Hiveminer, <br /> Temple <br />Source</p>
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

                    <div style={{ textAlign: 'justify', textIndent: ' 18.5rem', lineHeight: ' 190%', fontSize: '15px' }}>
                        <p>
                            October to June is the best time to visit Yercaud because the weather is dry and cool. However, Yercaud offers breathtaking views and a tranquil ambience throughout the year. During the month of May, a seven-day Summer Festival is conducted which includes flower shows, dog shows, boating races and village fairs. Monsoons (July- September) could be avoided as rains might hamper your sightseeing plans, but the rains make this place extra beautiful and you might not want to miss that either
                        </p>
                        <p>
                            Yercaud celebrates seasonal festivals that are in tune with the changing climatic conditions and showcase the nativity and culture of the hill town. If you are planning a weekend getaway or a long vacation, choose the best of the seasons so you can enjoy your trip to the finest. The best period to visit Yercaud is from October to June, when the weather is at its best.
                        </p>
                    </div>

                </div>

                {/* canvas */}
                <Offcanvas show={show} onHide={handleClose} placement='end'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className=' text-center'>
                            <h4>
                                Best Time To Visit In Yercaud
                            </h4>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>

                        <h6 className=' fw-bold  '>
                            Yercaud in Summer (March - June)
                        </h6>
                        <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                            <p>
                                With temperatures that hardly move out of the range between 24 degree Celsius and 28 degree Celsius, Yercaud experiences mild summers during March to June. The best places to visit during this season are the enchanting Emerald Lake, Killiyur Falls, Silk Farm, and Lady?s Seat. Apart from these attractions, one particular festival which allures tourists from every nook of the world is the Yercaud Summer Festival. Held in May, it is an annual festival which keeps everyone on their toes until its arrival. Usually taking place for five days, the enrapturing summer event is as grand as it gets! From sophisticated folk dances to bewitching musical concerts, from captivating cultural competitions to horse riding tournaments, this event is a treasure trove of a smorgasbord of wonderful activities.
                            </p>
                        </div>
                        <div>
                            <h6 className=' fw-bold  '>
                                Yercaud in Winter (November - February)
                            </h6>
                            <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                                <p>
                                    Yercaud experiences a delightful climate from October to February. The average temperature which stays between a pleasant 10 degree Celsius and 15 degree Celsius is ideal for leisurely nature walks as well as adventure activities. Do not miss out on the Bear?s Cave, Pagoda Point, Shevaroy Temple, and Anna Park, if you plan to visit this beautiful place during winter.
                                </p>
                            </div>
                        </div>
                        <div>
                            <h6 className=' fw-bold  '>

                                Yercaud in Monsoon (July-September)

                            </h6>
                            <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                                <p>
                                    Yercaud experiences a hot and humid monsoon with temperatures that range between 20 degree Celsius and 25 degree Celsius from June to September. At this time, the coffee plantations look ethereal after being washed by the rain. The Botanical Garden, Raja Rajeshwari Temple, and the Sri Chakra Mahameru Temple are some of the places you should visit during this time.
                                </p>
                            </div>
                        </div>



                    </Offcanvas.Body>
                </Offcanvas>

            </div >
        </section >
    )
}

export default YercaudVisit