import ch1 from '/images/timetoTravel/theni1.jpeg'
import ch2 from '/images/timetoTravel/theni2.jpeg'
import ch3 from '/images/timetoTravel/theni3.jpeg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const TheniVisit = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (


        <section className=' rightSide'>

            {/*  first*/}
            <div className=' row row-cols-2 mg-sm-5'>
                <div className=' mt-4 ' >
                    <h3> 09.Theni</h3>
                    <div className=' mt-5 '>
                        <h5>What  is the best time to visit :</h5>
                    </div>

                    <div style={{ textAlign: 'justify', textIndent: ' 18.5rem', lineHeight: ' 160%', fontSize: '15px' }}>
                        <p>
                            In order to spend your vacation in the lap of nature in south India, no place would be better than the town of Cardamom - Theni. The best season to visit Theni is winter when the weather remains all pleasant and favourable for tourism. On the other hand, summer remains hot and monsoon receives a heavy rainfall which makes the two seasons not suitable for touring.
                        </p>

                        <p>
                            Theni is known for having a salubrious climate throughout the year. The average temperature ranges between 15 degrees Celsius to 40 degrees Celsius. The best months to visit are from the month of December to February since the weather is pleasant and allows you to indulge in a number of outdoor activities.
                        </p>
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
                                <Modal.Title className=' fw-bold'> More About Best Time To Travel To Theni</Modal.Title>
                            </Modal.Header>

                            <Modal.Body >
                                <div className='  row row-cols-3  text-center  '>
                                    <div >
                                        <img src={ch1} alt="" style={{ height: '160px', width: '100px' }} />

                                    </div>
                                    <div>
                                        <img src={ch2} alt="" style={{ height: '160px', width: '100px' }} />

                                    </div>

                                    <div>
                                        <img src={ch3} alt="" style={{ height: '160px', width: '100px' }} />

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
                                            Best Time To Visit In Madurai
                                        </h4>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>

                                    <h6 className=' fw-bold  '>
                                        Theni in Summer
                                    </h6>
                                    <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                                        <p>
                                            The summer season in Theni starts from the month of March and continues till May. The months are generally hot and not favourable to visit Theni. Temperature during these months ranges between 24°C and 42°C.
                                        </p>
                                    </div>

                                    <div>
                                        <h6 className=' mt-5 fw-bold'>
                                            Theni in Winter
                                        </h6>
                                        <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                                            <p>
                                                Monsoon in Theni strikes in the month of June and lasts until September. The town experiences a heavy rainfall during this time that fills the town with zest. Despite being at peak of its beauty, the town of Theni is not best to visit during monsoon.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className=' mt-5 fw-bold'>
                                            Theni in Monsoon

                                        </h6>
                                        <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                                            <p>
                                                December marks the beginning of winter season in Theni which ends in the month of February. The temperature during these months varies from 22°C to 32°C, and thus, the town witnesses a pleasant weather and make the season best to visit Theni.

                                            </p>
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

export default TheniVisit