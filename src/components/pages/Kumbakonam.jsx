import ch1 from "../../../public/images/pages/Kumbakonam.jpeg"
import ch2 from "../../../public/images/pages/kumbakonam1.jpeg"
import ch3 from "../../../public/images/pages/kumbakonam2.jpeg"
import ch4 from "../../../public/images/pages/Kumbakonam3...jpeg"
import ch5 from "../../../public/images/pages/kumbakonam4.jpeg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Kumbakonam = () => {
    return (
        <section id="Kumbakonam" className=" container mT5  " >
            <div className=" row row-cols-2">
                <div>
                    <h2> 06.Kumbakonam</h2>
                    <img src={ch1} className="   w-100   h-75   " alt="..." />
                </div>
                <div className="section2  mt-5  ">
                    <h6> "The Cambridge of India"</h6>
                    <p>
                        Kumbakonam Tourism Sandwiched between two great rivers of southern India, Cauvery and Arsala, Kumbakonam is a gorgeous temple town in the heart of the Thanjavur district of Tamil Nadu. The town is a place for the lovers of history and those seeking to understand India's cultural roots and Hinduism.
                    </p>
                    <p>
                        The town is also known for its grand festival called Mahamaham festival which is celebrated every twelve years at the Mahamaham Tank. The town is one of the oldest in Indian history, and known for its famed temples, Chola heritage and also for its marvelous educational institutes. The town is one of the oldest in Indian history, and known for its famed temples, Chola heritage and also for its marvelous educational institutes. </p>
                </div>
            </div>




            <h3 className=" text-center mt-5"> Must Visit Place In Kumbakonam</h3>

            <div className=" mt-5  row row-cols-4 ">
                {/* card 1 */}
                <div>
                    <Card style={{ width: '16.5rem' }}>
                        <Card.Img variant="top" src={ch2} />
                        <Card.Body>
                            <Card.Title>Sarangapani Temple </Card.Title>
                            <Card.Text>
                                Sarangapani Temple, an ancient temple dedicated to Lord Vishnu is located in <br />the town of <br />Kumbakonam...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                {/* card 2 */}
                <div>
                    <Card style={{ width: '16.5rem' }}>
                        <Card.Img variant="top" src={ch3} />
                        <Card.Body>
                            <Card.Title> Nageswaran Temple</Card.Title>
                            <Card.Text>
                                Constructed as a chariot, the Nageswaran temple is an important Shaivite temple. A piece of genius Chola..
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                {/* card 3 */}
                <div>
                    <Card style={{ width: '16.5rem' }}>
                        <Card.Img variant="top" src={ch4} />
                        <Card.Body>
                            <Card.Title> Adi Kumbeshwara Temple </Card.Title>
                            <Card.Text>
                                Located in the town of

                                Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara..
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                {/* card 4 */}
                <div>
                    <Card style={{ width: '16.5rem' }}>
                        <Card.Img variant="top" src={ch5} />
                        <Card.Body>
                            <Card.Title> Airavatesvara Temple</Card.Title>
                            <Card.Text>
                                Located in the town of Darasuram near Kumbakonam in Tamil Nadu, Airavatesvara Temple is a revered...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>

            </div>




        </section>
    )
}

export default Kumbakonam