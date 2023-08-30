import ch1 from '/images/timetoTravel/hogenakkal1 (1).jpeg'
import ch2 from '/images/timetoTravel/hogenakkal1 (2).jpeg'
import ch3 from '/images/timetoTravel/hogenakkal1 (3).jpeg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const HogenakkalVisit = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section>
            <div className=' row row-cols-2 mg-sm-5'>
                <div >
                    <h3> 10.Hogenakkal</h3>

                    <div
                        className="modal show"
                        style={{ display: 'block', position: 'initial' }}
                    >
                        <Modal.Dialog >
                            <Modal.Header closeButton className=' text-center '>
                                <Modal.Title className=' fw-bold'> More About Best Time To Travel To Hogenakkal</Modal.Title>
                            </Modal.Header>

                            <Modal.Body >
                                <div className='  row row-cols-3  text-center  '>
                                    <div >
                                        <img src={ch1} alt="" style={{ height: '160px', width: '100px' }} />
                                        <p> Winter,<br /> Source</p>
                                    </div>
                                    <div>
                                        <img src={ch2} alt="" style={{ height: '160px', width: '100px' }} />
                                        <p> Monsoon,  <br />Source</p>
                                    </div>

                                    <div>
                                        <img src={ch3} alt="" style={{ height: '160px', width: '100px' }} />
                                        <p> Dry <br />Source</p>
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

                    <div style={{ textAlign: 'justify', textIndent: ' 18rem', lineHeight: ' 155%', fontSize: '15px' }}>
                        <p>
                            he best time to visit Hogenakkal is during the winter from October - February to relax and unwind near the waterfalls. Winters in Hogenekkal is pleasant with moderate weather throughout the day. Whereas the summers are warm and sunny with temperatures ranging from 23 - 34 degree celcius. Despite summers being an off season, a dip in the hogenekkal lake is rejuvenating for all. Monsoon on the other hand has a pleasant weather with temperatures ranging from 13 to 20 degree celcius, making it an ideal time to enjoy its spectacular beauty.
                        </p>
                        <p>
                            Hogenakkal Falls, located on the border of Tamil Nadu and Karnataka, is one of the most scenic places to visit in the region. The waterfall is known as Hogenakkal, or "Smoky Rocks", because of the unique arrangement of the gigantic carbonated rocks that surround it. The sight of River Kaveri splitting into multiple small streams and cascading from different heights ranging from 15 feet to 66 feet will leave you mesmerised! Hogenakkal Waterfall is similar to the popular.
                        </p>
                    </div>

                </div>

                {/* canvas */}
                <Offcanvas show={show} onHide={handleClose} placement='end'>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title className=' text-center'>
                            <h4>
                                Best Time To Visit In Hogenakkal
                            </h4>
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>

                        <h6 className=' fw-bold  '>
                            Hogenakkal in Winter (November - February)
                        </h6>
                        <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: '180%' }}>
                            <p>
                                Watch the glory of nature take over Hogenakkal, as the south-west monsoon showers the region with about 150 mm of rainfall between these months. Hogenakkal is a sight to behold in the rain, as the Kaveri comes alive and usually floods her banks. While adventure enthusiasts and adrenaline junkies throng Hogenakkal in the monsoon, it is not recommended for tourists as the currents are too strong to swim in. Boating is not allowed either, and there is no standard means of transportation to reach the waterfalls. It is best to avoid the river, as the water flow may be too heavy. Further downhill, you can go rafting if you prefer, although discretion is advised. The waterfalls are a sight to behold, as they live up to their name of the 'Smoking Rocks' - the sultry mist as the water strikes the rocks covers the base in a myriad of colours. Rainbows adorn the falls and the scene is postcard-perfect.
                            </p>
                        </div>
                        <div>
                            <h6 className=' fw-bold  '>
                                Hogenakkal in Monsoon(July-September)

                            </h6>
                            <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: '180%' }}>
                                <p>
                                    Hogenakkal Waterfall is a popular destination attraction among nature lovers, adventure seekers, trekkers and shutterbugs. If you are planning a trip to this waterfall, here is some information about Hogenakkal Falls timings, location, activities, parking fee and more
                                </p>
                            </div>
                        </div>
                        <div>
                            <h6 className=' fw-bold  '>

                                Hogenakkal in Summer (March - June)

                            </h6>
                            <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: '180%' }}>
                                <p>
                                    The Indian Peninsula lies in the tropics, and is known for its sweltering summer heat. Temperatures soar to a maximum of 35°C in April, which is the hottest month of the year here. The water flow is minimal, and there are few waterfalls to reckon during these summer months. Most small waterfalls dry up. The rock facades are magnificent, though. The jagged rocks and steep gorges make for picture-perfect views, and have been featured in many films as well.
                                </p>
                            </div>
                        </div>



                    </Offcanvas.Body>
                </Offcanvas>

            </div >
        </section >
    )
}

export default HogenakkalVisit