import ch1 from "../../../public/images/pages/Madurai.jpeg"
import ch2 from "../../../public/images/pages/madurai1.jpeg"
import ch3 from "../../../public/images/pages/madurai2.jpeg"
import ch4 from "../../../public/images/pages/madurai3.jpeg"
import ch5 from "../../../public/images/pages/madurai4.jpeg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Madurai = () => {
    return (
        <section id="Madurai" className=" container mT5 " >
            <div className=" row row-cols-2">
                <div>
                    <h2> 07.Madurai</h2>
                    <img src={ch1} className="   w-100   h-75   " alt="..." />
                </div>
                <div className="section2  mt-5  ">
                    <h6> "The Lotus City"</h6>
                    <p>
                        Madurai Tourism Madurai, the cultural capital of Tamil Nadu, is one of the oldest continuously inhabited cities of India. Ruled by Pandya kings for the longest time in its history, it is called as the 'Lotus City' as it was planned and built in the shape of a lotus. Madurai is known for Meenakshi Amman Temple, dedicated to the goddess Meenakshi with a sanctum for her consort, Sundareshwarar.
                    </p>
                    <p>
                        There are many other ancient temples in Madurai, including Thiruparankundram. It is one of the important old temples dedicated to Lord Muruga(Karthikeya) and is located on a hillock approximately 8 km from the city. Having trade ties with ancient Rome, the place holds a great cultural heritage. With bustling bazaars and fantastic street food, Madurai has heritage walks conducted throughout the day.
                    </p>
                </div>
            </div>




            <h3 className=" text-center mt-5"> Must Visit Place In Madurai</h3>

            <div className=" mt-5  row row-cols-4 ">
                {/* card 1 */}
                <div>
                    <Card style={{ width: '16.5rem' }}>
                        <Card.Img variant="top" src={ch2} />
                        <Card.Body>
                            <Card.Title>Vaigai Dam</Card.Title>
                            <Card.Text>
                                Vaigai Dam, a magnificent human-made structure, is constructed over River Vaigai near Andipatti, Theni...
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
                            <Card.Title> Meghamalai</Card.Title>
                            <Card.Text>
                                Often known as the "High Wavy Mountains", Meghamalai is a petit yet beautiful place located in the...
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
                            <Card.Title> Samanar Hills</Card.Title>
                            <Card.Text>
                                Located in Keelakuyilkudi village near Madurai, Samanar Hills or Samanar Malai is a beautiful <br /> hill rock...
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
                            <Card.Title>  Thirumalai Nayakar</Card.Title>
                            <Card.Text>
                                Thirumalai Nayakar Palace was erected in 1636 AD in the city of Madurai, by <br /> King Thirumalai<br /> Nayak...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>

            </div>




        </section>
    )
}

export default Madurai