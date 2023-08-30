import ch1 from '/images/timetoTravel/kumbakonam1.jpeg'
import ch2 from '/images/timetoTravel/kumbakonam2.jpeg'
import ch3 from '/images/timetoTravel/kumbakonam3.jpeg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const KumbaKonamVisit = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section>
            <div className=' row row-cols-2 mg-sm-5'>
                <div >
                    <h3> 06.KumbaKonam</h3>

                    <div
                        className="modal show"
                        style={{ display: 'block', position: 'initial' }}
                    >
                        <Modal.Dialog >
                            <Modal.Header closeButton className=' text-center '>
                                <Modal.Title className=' fw-bold'> More About Best Time To Travel To KumbaKonam</Modal.Title>
                            </Modal.Header>

                            <Modal.Body >
                                <div className='  row row-cols-3  text-center  '>
                                    <div >
                                        <img src={ch1} alt="" style={{ height: '160px', width: '100px' }} />
                                        <p> Dawn,<br /> Source</p>
                                    </div>
                                    <div>
                                        <img src={ch2} alt="" style={{ height: '160px', width: '100px' }} />
                                        <p> Steemit Lake  <br />Source</p>
                                    </div>

                                    <div>
                                        <img src={ch3} alt="" style={{ height: '160px', width: '100px' }} />
                                        <p> Holydham  <br />Source</p>
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

                    <div style={{ textAlign: 'justify', textIndent: ' 18.5rem', lineHeight: ' 180%', fontSize: '15px' }}>
                        <p>
                            Located in the tropical area and the Deccan region of the country, Kumbakonam has the typical tropical climate, with pleasant winters and hot and dry summers. The monsoons are accompanied with moderate rains and erratic shower spells, thus making the time one of the suitable time to pay a visit. The summers are hot and largely uncomfortable for one to visit the place.
                        </p>
                        <p>
                            Kumbakonam has a typical tropical climate. Regions around the Cauvery Delta are rather hot, but Kumbakonam has moderate weather throughout the year and summers are said to be far better than in hot coastal cities like Chennai. All said, there are numerous places to visit in Kumbakonam and it were better you choose the most ideal time for a visit. The monsoons are accompanied with moderate rains and erratic shower spells, thus making the time one of the suitable time to pay a visit.
                        </p>
                    </div>

                </div>

                {/* canvas */}
                <Offcanvas show={show} onHide={handleClose} placement='end'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className=' text-center'>
                            <h4>
                                Best Time To Visit In KumbaKonam
                            </h4>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>

                        <h6 className=' fw-bold  '>
                            Kumbakonam in Winter (October - February)
                        </h6>
                        <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                            <p>
                                The winters in Kumbakonam are pleasantly cold, with light sweaters helping you to survive the cold. The temperature ranges from 15 to 25 degrees Celcius, and the diurnal range of temperature isn't more than a maximum of 10 degrees Celcius. This season is most preferred by tourists to visit Kumbakonam, as exploring the city in this weather becomes comfortable and the temperature is pleasing most of the time during winter months.
                            </p>
                        </div>
                        <h6 className=' fw-bold  '>
                            Kumbakonam in Monsoon (June-August)
                        </h6>
                        <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                            <p>
                                The monsoon is associated with frequent and untimely shower spells in the region. The temperature drops down considerably after the scorching summers and the place witness a waste stretch of greenery as the rains give life to the flora of the region. The rains can though be problematic at times and can interfere with your exploration plans, but overall this season can also be preferred by tourists to pay a visit to Kumbakonam.

                            </p>
                        </div>
                        <h6 className=' fw-bold  '>
                            Kumbakonam in Summer (March-May)
                        </h6>
                        <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                            <p>
                                Summers in the Deccan region of the country is undeniable hot, and the scorching sun might be an unpleasant experience. The summers are usually arid and heated up, and the temperature goes up to 40 degrees Celcius during the day. The season is majorly avoided by tourists to plan a visit to Kumbakonam because of the overall weather conditions.
                            </p>
                        </div>




                    </Offcanvas.Body>
                </Offcanvas>

            </div >
        </section >
    )
}

export default KumbaKonamVisit