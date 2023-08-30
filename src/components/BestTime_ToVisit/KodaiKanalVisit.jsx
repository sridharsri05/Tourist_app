
import ch1 from '/images/timetoTravel/kodaikanal1.jpeg'
import ch2 from '/images/timetoTravel/kodaikanal2.jpeg'
import ch3 from '/images/timetoTravel/kodaikanal3.jpeg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const KodaiKanalVisit = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <section className=' rightSide'>

            {/*  first*/}
            <div className=' row row-cols-2 mg-sm-5'>
                <div className=' mt-5 ' >
                    <h3> 03.KodaiKanal</h3>
                    <div className=' mt-5 '>
                        <h5>What  is the best time to visit :</h5>
                    </div>

                    <div style={{ textAlign: 'justify', textIndent: ' 18.5rem', lineHeight: ' 180%', fontSize: '15px' }}>
                        <p>
                            The best time to visit Kodaikanal is from October to June, however,
                            the weather remains a bit chilly during December and January. Ideal
                            for a vacation in each season, Kodaikanal is the most colourful in
                            summers and most picturesque in monsoons. If your trip consists of
                            an itinerary that includes a lot of sights to see, then summer is
                            the best time to visit this place and those who wish to go for trekking, plan your trip to Kodaikanal between October and February.

                        </p>
                        <p> Kodaikanal is lovingly referred to as The Princess of Hill stations.
                            And boy, does it take this title seriously! Built around an exotic
                            star shaped lake, the region exudes ethereal charm like that of
                            fairy-tales. The best time to visit Kodaikanal is from October -
                            June, however, the weather remains a bit chilly during December and
                            January.</p>
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
                                <Modal.Title className=' fw-bold'> More About Best Time To Travel To KodaiKanal</Modal.Title>
                            </Modal.Header>

                            <Modal.Body >
                                <div className='  row row-cols-3  text-center  '>
                                    <div >
                                        <img src={ch1} alt="" style={{ height: '160px', width: '100px' }} />
                                        <p> Upper,<br />Lake <br /> Source</p>
                                    </div>
                                    <div>
                                        <img src={ch2} alt="" style={{ height: '160px', width: '100px' }} />
                                        <p> Kodaikanal, <br />Lake <br />Source</p>
                                    </div>

                                    <div>
                                        <img src={ch3} alt="" style={{ height: '160px', width: '100px' }} />
                                        <p> Pillar, <br />Rocks <br />Source</p>
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
                                            Best Time To Visit In Kodaikanal
                                        </h4>
                                    </Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>

                                    <h6 className=' fw-bold  '>
                                        Kodaikanal in Summer (March-June)
                                    </h6>
                                    <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                                        <p>
                                            Summers (March to June) in Kodaikanal is ideal with comfortable 20 degree Celsius to 32 degree Celsius temperature and flowers in full bloom. The ten days long Grand Annual Summer Festival, which takes place in May, attracts many tourists. From elegant fruit exhibitions to enthralling boat races, flower art- works, classical dance performances and melodious musicals, the Summer Festival is a platter of different shows. Kodaikanal also holds fantastic festivals like Panguni Uthiram in March and the Annual Horticulture Show in May.

                                        </p>
                                    </div>

                                    <div>
                                        <h6 className=' mt-5 fw-bold'>
                                            Kodaikanal in Winter(December-February)
                                        </h6>
                                        <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                                            <p>
                                                Summers (March to June) in Kodaikanal is ideal with comfortable 20 degree Celsius to 32 degree Celsius temperature and flowers in full bloom. The ten days long Grand Annual Summer Festival, which takes place in May, attracts many tourists. From elegant fruit exhibitions to enthralling boat races, flower art- works, classical dance performances and melodious musicals, the Summer Festival is a platter of different shows. Kodaikanal also holds fantastic festivals like Panguni Uthiram in March and the Annual Horticulture Show in May</p>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className=' mt-5 fw-bold'>
                                            Kodaikanal in Monsoon(June-September)
                                        </h6>
                                        <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                                            <p>

                                                With a temperature that rarely falls below 8 degree Celsius, winter in Kodaikanal (between December and February) is the best time to enjoy various treks, and attend the famous Pongal festival celebrated during January.                                            </p>
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

export default KodaiKanalVisit