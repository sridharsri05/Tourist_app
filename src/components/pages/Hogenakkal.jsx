import ch1 from "../../../public/images/pages/Hogenakkal.jpeg"
import ch2 from "../../../public/images/pages/hogenakkal1.jpeg"
import ch3 from "../../../public/images/pages/hogenakkal2..jpeg"
import ch4 from "../../../public/images/pages/hogenakkal3.jpeg"
import ch5 from "../../../public/images/pages/hokenakkal4..jpeg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Hogenakkal = () => {
    return (
        <section id="Hogenakkal" className=" container mT5  " >
            <div className=" row row-cols-2">
                <div>
                    <h2> 10.Hogenakkal</h2>
                    <img src={ch1} className="   w-100   h-75   " alt="..." />
                </div>
                <div className="section2  mt-5  ">
                    <h6> "The one that will take your breath away"</h6>
                    <p>
                        Hogenakkal Tourism Hogenakkal is a waterfall located in Dharmapuri district of Tamil Nadu where the Kaveri river splits into multiple streams of waterfalls. Located at a distance of 180 km from Bangalore, Hogenakkal has water throughout the year. The carbonite rocks, the coracle (basket boat) rides, freshwater fish, oil massages by locals make it a perfect one day trip or a weekend getaway from Bangalore.
                    </p>
                    <p>
                        Sometimes referred to as the "Niagara Falls of India," it is also known for the medicinal baths. Also known at Marikottayam,Recently, the place has been found to be littered with plastic bags and garbage and the fish market outside the waterfall might stink. Weekends can be crowded. Keep all these points in mind before visiting. </p>
                </div>
            </div>




            <h3 className=" text-center mt-5"> Must Visit Place In Hogenakkal</h3>

            <div className=" mt-5  row row-cols-4 ">
                {/* card 1 */}
                <div>
                    <Card style={{ width: '16.5rem' }}>
                        <Card.Img variant="top" src={ch2} />
                        <Card.Body>
                            <Card.Title>Theerthamalai Temple</Card.Title>
                            <Card.Text>
                                Theerthamalai is a popular pilgrim centre close to Hogenakkal. One of its most popular destinations is the...
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
                            <Card.Title>Hogenakkal Falls</Card.Title>
                            <Card.Text>
                                Hogenakkal Falls is a scintillating waterfall that is located on river Kaveri in the Dharmapuri district of...
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
                            <Card.Title>Pennagram Village</Card.Title>
                            <Card.Text>
                                The village is located about 20 km away from Hogenakkal is famous for its weekly fair

                                it holds every...
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
                            <Card.Title> Mettur Dam</Card.Title>
                            <Card.Text>
                                Mettur Dam, situated 30 miles from Salem in a small Mettur Village, is one of the largest dams in India. Built...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>

            </div>




        </section>
    )
}

export default Hogenakkal