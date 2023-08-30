import ch1 from '/images/timetoTravel/madurai1.jpeg'
import ch2 from '/images/timetoTravel/madurai2.jpeg'
import ch3 from '/images/timetoTravel/madurai3.jpeg'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';

const MaduraiVisit = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <section className=' rightSide'>

            {/*  first*/}
            <div className=' row row-cols-2 mg-sm-5'>
                <div className=' mt-4 ' >
                    <h3> 07.Madurai</h3>
                    <div className=' mt-5 '>
                        <h5>What  is the best time to visit :</h5>
                    </div>

                    <div style={{ textAlign: 'justify', textIndent: ' 18.5rem', lineHeight: ' 180%', fontSize: '15px' }}>
                        <p>

                            October to March is the best time to visit Madurai. With a hot and dry climate for most of the year, Madurai is best visited during the winter season. The town is known for its ancient temples and other architectural and religious masterpieces and receives a generous crowd of people throughout the year. Madurai is the most fascinating and welcoming during the months between October and March which coincides with its winter season.
                        </p>

                        <p>
                            Madurai is one of the oldest culturally vibrant cities of India. Its historical places and temples have a steady flow of tourists from all around the world.
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
                                <Modal.Title className=' fw-bold'> More About Best Time To Travel To Madurai</Modal.Title>
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
                                        Madurai in Winter (December-February)
                                    </h6>
                                    <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                                        <p>
                                            Many locals look forward to the winter season in Madurai due to the relief it brings from the summers. The season lasts from December to February. The temperature during the winter months ranges from 20 degree Celsius to 29 degree Celsius. The season is characterised by moderately cool temperatures which make travelling around the city a pleasant experience for all individuals. Pongal, a widely celebrated festival is regarded as extremely special in Madurai. The festival lasts for three days and comprises of praying for a good harvest by locals and farmers alike. Other religious festivals are also celebrated with great vigour. However, hotel prices may climb up as this is the peak tourist season.
                                        </p>
                                    </div>

                                    <div>
                                        <h6 className=' mt-5 fw-bold'>
                                            Madurai in Monsoon (June-August)
                                        </h6>
                                        <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                                            <p>
                                                Monsoon season in Madurai lasts from June to August. Although the monsoon season continues for a smaller amount of time, the south-west monsoon winds bring in a large amount of rainfall which is extremely heavy. This rainfall also makes the weather gloomy but still makes the city beautiful as the nature around Madurai mainly benefits from this rain. This is the perfect time to visit Madurai for people who love greenery and the lush natural surroundings.
                                            </p>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className=' mt-5 fw-bold'>
                                            Madurai in Summer (March-July)

                                        </h6>
                                        <div className='  mt-3' style={{ textAlign: 'justify', textIndent: ' 5rem', fontSize: '14.5px', lineHeight: ' 180%' }}>
                                            <p>
                                                The summer season in Madurai lasts from March to May. The temperatures during this season range from 24 degree Celsius to 34 degree Celsius. This means that the weather in Madurai during these months is uncharacteristically hot. It is also really dry which makes the heat more noticeable and discourages travellers to visit. The summer season is, therefore, an offseason for Madurai, and the crowds are comparatively less as well.

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

export default MaduraiVisit