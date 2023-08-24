import ch1 from "../../../public/images/pages/Yarcaud.jpeg"
import ch2 from "../../../public/images/pages/yercaud1.jpeg"
import ch3 from "../../../public/images/pages/yercaud2.jpeg"
import ch4 from "../../../public/images/pages/yercaud3.jpeg"
import ch5 from "../../../public/images/pages/yercaud4.jpeg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Yercaud = () => {
    return (
        <section id="Yarcaud" className=" container mT5 " >
            <div className=" row row-cols-2">
                <div>
                    <h2> 08.Yercaud</h2>
                    <img src={ch1} className="   w-100   h-75   " alt="..." />
                </div>
                <div className="section2  mt-5  ">
                    <h6> "The Land of Seven Forests."</h6>
                    <p>
                        Yercaud Tourism Nestled in the Shivaroy Hills of Tamil Nadu, Yercaud is a hill station in the Eastern Ghats steeped in abundant greenery. Commonly called 'Ooty of the Poor', this region has a history dating back to the time of the British. Located at an altitude of 4970 feet, Yercaud is known for its vast expanses of coffee plantations and great weather.
                    </p>
                    <p>
                        Yercaud lake is the main point of attraction of the region.One of the many highlights is the summer festival that takes place in May. It is dedicated to Lord Servarayan, the supreme god of the ranges and gives visitors a glimpse into the rich heritage of this region. </p>
                </div>
            </div>




            <h3 className=" text-center mt-5"> Must Visit Place In Yercaud</h3>

            <div className=" mt-5  row row-cols-4 ">
                {/* card 1 */}
                <div>
                    <Card style={{ width: '16.5rem', height: "24rem" }}>
                        <Card.Img variant="top" src={ch2} />
                        <Card.Body>
                            <Card.Title>Pagoda Point</Card.Title>
                            <Card.Text>
                                Located in the eastern part of the Yercaud Hills, located 133 km Pagoda point is a beautiful viewpoint where one is treated...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                {/* card 2 */}
                <div>
                    <Card style={{ width: '16.5rem', height: "24rem" }}>
                        <Card.Img variant="top" src={ch3} />
                        <Card.Body>
                            <Card.Title>Botanical Garden</Card.Title>
                            <Card.Text>
                                Any tourist who is interested in gods gift to this planet,new plant  the wondrous flora, and in knowing about various...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                {/* card 3 */}
                <div>
                    <Card style={{ width: '16.5rem', height: "24rem" }}>
                        <Card.Img variant="top" src={ch4} />
                        <Card.Body>
                            <Card.Title> Emerald Lake</Card.Title>
                            <Card.Text>
                                The most alluring aspect of Yercaud is its big yet natural lake one can enjoy the scenic lake very popularly known as the Emerald Lake..
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                {/* card 4 */}
                <div>
                    <Card style={{ width: '16.5rem', height: "24rem" }}>
                        <Card.Img variant="top" src={ch5} />
                        <Card.Body>
                            <Card.Title> Lady's Seat</Card.Title>
                            <Card.Text>
                                Lady's Seat is a viewpoint that overlooks the winding ghat road and offers a spectacular view of Mettur Dam...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>

            </div>




        </section>
    )
}

export default Yercaud