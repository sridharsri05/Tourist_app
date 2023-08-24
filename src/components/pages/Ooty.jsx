import ch1 from "../../../public/images/pages/Ooty.jpeg"
import ch2 from "../../../public/images/pages/ooty1.jpeg"
import ch3 from "../../../public/images/pages/ooty2.jpeg"
import ch4 from "../../../public/images/pages/ooty3.jpeg"
import ch5 from "../../../public/images/pages/ooty4.jpeg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const Ooty = () => {
    return (

        <section id="Ooty" className=" container mt-5  " >
            <div className=" row row-cols-2">
                <div>
                    <h2> 04.Ooty</h2>
                    <img src={ch1} className="   w-100   h-75   " alt="..." />
                </div>
                <div className="section2  mt-5  ">
                    <h6> "Queen of Nilgiris "</h6>
                    <p>
                        Nestled amidst Nilgiri hills, Ooty, also known as Udagamandalam, is a hill station in Tamil Nadu which serves as a top-rated tourist destination. Once regarded as the summer headquarters of the East India Company, the Queen of the hills is a picturesque getaway.
                    </p>
                    <p>
                        The Nilgiri mountain railway is the steepest track in all of Asia. Remember the hit song 'Chaiyya Chaiyya' where Shahrukh Khan and Malaika Arora matching steps on top of a train? Remember the breathtaking locales as the train chugged its way across lush greenery? Yes, that was the Nilgiri Mountain Railways, and the Nilgiri Mountains all along Dotted with tea gardens, serene waterfalls, winding country lanes, and charming colonial architecture, Ooty is the perfect respite everyone </p>
                </div>
            </div>




            <h3 className=" text-center"> Must Visit Place In Ooty</h3>

            <div className=" mt-5  row row-cols-4 ">
                {/* card 1 */}
                <div>
                    <Card style={{ width: '16.5rem ', height: "26rem" }}>
                        <Card.Img variant="top" src={ch2} />
                        <Card.Body>
                            <Card.Title className=" text-center">Nilgiri Mountain Railway</Card.Title>
                            <Card.Text>
                                Nilgiri Mountain Railway, also known as Toy Train in Ooty, is one of the key attractions of the popular hill...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                {/* card 2 */}
                <div>
                    <Card style={{ width: '16.5rem', height: "26rem" }}>
                        <Card.Img variant="top" src={ch3} />
                        <Card.Body>
                            <Card.Title > Ooty Botanical Garden</Card.Title>
                            <Card.Text>
                                Ooty Botanical Gardens lie on the lower slopes of the Doddabetta peak, <br /> the Government Botanical  garden Peak in Ooty.
                            </Card.Text>
                            <Button variant="primary " >Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                {/* card 3 */}
                <div>
                    <Card style={{ width: '16.5rem', height: "26rem" }}>
                        <Card.Img variant="top" src={ch4} />
                        <Card.Body>
                            <Card.Title>  Emerald Lake</Card.Title>
                            <Card.Text>
                                Emerald Lake is situated in Emerald Village, around 20-22 kilometres from  <br /> the main city of Ooty <br /> and..
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
                            <Card.Title> Dolphin's Nose</Card.Title>
                            <Card.Text>
                                Located about 12 km away from Coonoor is the Dolphin's Nose about 1,500 meters above sea level. The tip...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>

            </div>




        </section >
    )
}

export default Ooty