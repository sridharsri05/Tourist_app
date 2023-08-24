import ch1 from "../../../public/images/pages/Theni.jpeg"
import ch2 from "../../../public/images/pages/theni1.jpeg"
import ch3 from "../../../public/images/pages/theni2.jpeg"
import ch4 from "../../../public/images/pages/theni3.jpeg"
import ch5 from "../../../public/images/pages/theni4.jpeg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Theni = () => {
    return (
        <section id="Theni" className=" container mT5  " >
            <div className=" row row-cols-2">
                <div>
                    <h2> 09.Theni</h2>
                    <img src={ch1} className="   w-100   h-75   " alt="..." />
                </div>
                <div className="section2  mt-5  ">
                    <h6> "A little humlet in Tamil Nadu"</h6>
                    <p>
                        Theni Tourism Dotted by luscious patches of greenery and beautiful waterfalls, Theni is a little hamlet on the Western Ghats. The topography of Theni mainly consists of hills and ranges. It has plenty of rivers and dams and is an abode to 27 forests hence filled with unparalleled greenery.
                    </p>
                    <p>
                        There temples like Kamatchi Amman Temple, Vellappar Temple, and Balasubramanya Temple which are brimming with devotees from all around the country throughout the year.The local handloom products and agricultural products are the best buys at these markets. The aroma filled tea estates in Theni are a paradise. The Kolukkamalai Tea estate is often deemed to be the world's highest organic tea estate. The Suruli Falls and the Kumbakarai Falls are the crown jewels of Theni. </p>
                </div>
            </div>




            <h3 className=" text-center mt-5"> Must Visit Place In Theni</h3>

            <div className=" mt-5  row row-cols-4 ">
                {/* card 1 */}
                <div>
                    <Card style={{ width: '16.5rem' }}>
                        <Card.Img variant="top" src={ch2} />
                        <Card.Body>
                            <Card.Title>Chinna Suruli Falls</Card.Title>
                            <Card.Text>
                                Located in the lap of wild, green forests, Chinna Suruli Falls is a picturesque destination to visit from Theni...
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
                            <Card.Title>Kumbakkarai Falls</Card.Title>
                            <Card.Text>
                                Located in Dindigul district near Theni in Tamil Nadu, Kumbakkarai Falls is a mesmerising waterfall  <br />that...
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
                            <Card.Title> Meghamalai</Card.Title>
                            <Card.Text>
                                Tucked within the Western Ghats of Tamil Nadu, Meghamalai in Theni district is the kind of hidden paradise...
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
                            <Card.Title> Suruli Falls</Card.Title>
                            <Card.Text>
                                Suruli Falls is a beautiful

                                waterfall in the Theni district of Tamil Nadu and one of the major tourist attractions of...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>

            </div>




        </section>
    )
}

export default Theni