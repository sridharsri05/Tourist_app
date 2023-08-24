import ch1 from "../../../public/images/pages/Kodaikanal.jpeg"
import ch2 from "../../../public/images/pages/kodaikanal1....jpeg"
import ch3 from "../../../public/images/pages/kodaikanal2.jpeg"
import ch4 from "../../../public/images/pages/kodaikanal3..jpeg"
import ch5 from "../../../public/images/pages/kodaikanal4.jpeg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';




const Kodaikanal = () => {
    return (

        <section id="Kodaikanal" className=" container mT5  " >
            <div className=" row row-cols-2">
                <div>
                    <h2> 03.Kodaikanal</h2>
                    <img src={ch1} className="   w-100   h-75   " alt="..." />
                </div>
                <div className="section2  mt-5  ">
                    <h6> "The Princess of Hill stations"</h6>
                    <p>
                        Kodaikanal Tourism Located in the state of Tamil Nadu, Kodaikanal is one of the most famous honeymoon destinations in India. A Lakeside resort town of Tamil Nadu, Kodaikanal has a beautiful climate, mist-covered manicured cliffs and waterfall that come together to create the ideal setting for a perfect getaway. Kodaikanal means the gift of the forests.
                    </p>
                    <p>
                        Nestled amidst the rolling slopes of the Palani Hills, Kodaikanal stands at an altitude of 7200 feet above sea level, and once you visit this hill station, you will find that  and this hill station lets you sit back and connect with nature as you head out on biking or trekking trails or take a stroll through the vast forests surrounding the town. </p>
                </div>
            </div>




            <h3 className=" text-center mt-5"> Must Visit Place In Kodaikanal</h3>

            <div className=" mt-5  row row-cols-4 ">
                {/* card 1 */}
                <div>
                    <Card style={{ width: '16.5rem' }}>
                        <Card.Img variant="top" src={ch2} />
                        <Card.Body>
                            <Card.Title>Green Valley View </Card.Title>
                            <Card.Text>
                                Formerly known as Suicide point, the Green Valley View offers a breathtaking view of the plains, deep...
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
                            <Card.Title> Kodai Lake</Card.Title>
                            <Card.Text>
                                Kodaikanal Lake is a manmade lake in the Kodaikanal city which is also known as Kodai Lake Vera
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
                            <Card.Title> Bear Shola Falls</Card.Title>
                            <Card.Text>
                                Located at a mere distance of 2 kilometres from the Kodaikanal Lake, the Bear Shola Falls is a popular..
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
                            <Card.Title> Pillar Rocks</Card.Title>
                            <Card.Text>
                                Situated in the 'Princess of Hill stations', Kodaikanal, the Pillar Rocks have become a lovely picnic...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>

            </div>




        </section>
    )
}

export default Kodaikanal