import ch1 from '../../../public/images/timetoTravel/ooty1.jpeg'
import ch2 from '../../../public/images/timetoTravel/ooty2.jpeg'
import ch3 from '../../../public/images/timetoTravel/ooty3.jpeg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const OotyVist = () => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section>
            <div className=' row row-cols-2 mg-sm-5'>
                <div >
                    <h3> 04.Ooty</h3>

                    <div
                        className="modal show"
                        style={{ display: 'block', position: 'initial' }}
                    >
                        <Modal.Dialog >
                            <Modal.Header closeButton className=' text-center '>
                                <Modal.Title className=' fw-bold'> More About Best Time To Travel To Ooty</Modal.Title>
                            </Modal.Header>

                            <Modal.Body >
                                <div className='  row row-cols-3  text-center  '>
                                    <div >
                                        <img src={ch1} alt="" style={{ height: '160px', width: '100px' }} />
                                        <p> Mountain,<br />Railway <br /> Source</p>
                                    </div>
                                    <div>
                                        <img src={ch2} alt="" style={{ height: '160px', width: '100px' }} />
                                        <p> Ooty Lake  <br />Source</p>
                                    </div>

                                    <div>
                                        <img src={ch3} alt="" style={{ height: '160px', width: '100px' }} />
                                        <p> Trekking Ooty  <br />Source</p>
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

                    <div style={{ textAlign: 'justify', textIndent: ' 18.5rem', lineHeight: ' 160%', fontSize: '15px' }}>
                        <p>
                            The best time to visit Ooty is throughout the year as the weather is pleasant and great for sightseeing. The temperature usually ranges from 5-15 degrees throughout the year with colder nights. However, the peak season is from October to June when the weather is pleasant and you can get involved in outdoor activities. Ooty can be visited during monsoons (if you don't mind the rain) when the freshly washed surroundings give Ooty an ethereal charm. The annual Tea and Tourism Festival attracts crowds in huge numbers to visit the place and have a great time in this wonderful place.
                        </p>
                        <p>
                            The poised and elegant 'Queen of Hill Stations' welcomes you to the kingdom in the clouds. Individuals travel far and wide to partake in the awe-inspiring wonders of one of India's most beloved hill stations - Ootacamund or Ooty. Here, history and culture form a sweet medley, while nature sings to its own symphony. Colonial churches, Hindu temples, tribal museums and libraries brand the plains with stories.
                        </p>
                    </div>

                </div>

                {/* canvas */}
                <Offcanvas show={show} onHide={handleClose} placement='end'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className=' text-center'>
                            <h4>
                                Best Time To Visit In Ooty
                            </h4>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>

                        <h6 className=' fw-bold  '>
                            Ooty in Summer (March - June)
                        </h6>
                        <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                            <p>
                                Ooty experiences an average temperature that ranges between 23 degree Celsius and 31 degree Celsius, which is perfect for you to explore the sheer beauty of this place in full swing.
                            </p>
                        </div>
                        <h6 className=' fw-bold  '>
                            Ooty in Winter (October - March)
                        </h6>
                        <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                            <p>
                                With temperatures that stay below 15 degree Celsius, winters in Ooty are perfect to have a gala time. Each year, during January or February, Department of Tourism in Tamil Nadu hosts The Tea and Tourism Festival for three days. A vast range of tea leaves are displayed, and rows of tea stalls are put up for tasting and buying a wide variety of tea. In addition to this, these three days are packed with cultural shows and performances, which reverberate with the heritage of the Nilgiris.

                            </p>
                        </div>
                        <h6 className=' fw-bold  '>
                            Ooty in Monsoon (July-September)
                        </h6>
                        <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                            <p>
                                People who love rainfall and green grass beds laid over mountains can pack their bags and head straight to Ooty during the monsoon months, which lasts between June and September. Even though you are unlikely to experience the bright, warm sunshine, you will have a great time nevertheless.
                            </p>
                        </div>




                    </Offcanvas.Body>
                </Offcanvas>

            </div >
        </section >
    )
}

export default OotyVist