import ch1 from "../../../public/images/pages/Rameshwaran.jpeg"
import ch2 from "../../../public/images/pages/rameshwarem1.jpeg"
import ch3 from "../../../public/images/pages/rameshwarem2.jpeg"
import ch4 from "../../../public/images/pages/Rameshwaram3.jpeg"
import ch5 from "../../../public/images/pages/rameshwarem4.jpeg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


export const Rameshwaram = () => {
    return (
        <section id="Rameshwaram" className="  mT5   " >
            <div className=" row row-cols-2">
                <div>
                    <h2> 02.Rameshwaram</h2>
                    <img src={ch1} className="   w-100   h-75   " alt="..." />
                </div>
                <div className="section2  mt-5  ">
                    <h6> "The Bridge On the Indian Ocean "</h6>
                    <p>
                        Rameshwaram is located on a beautiful island in the South Indian state of Tamil Nadu. It is separated by a small Pamban channel from Sri Lanka. According to Hindu mythology, this is the place where Lord Rama created a bridge across the sea to Sri Lanka.
                    </p>
                    <p>
                        Renowned for its magnificent prakaras with massive sculptured pillars on either side, The Ramanathaswamy Temple houses the longest corridor in the world. Agniteertham is famous for its sacred waters and Pilgrims perform poojas in honour of their ancestors at this seashore. The five-faced Hanuman Temple holds the floating stone which was used to build the bridge between India and Sri Lanka. Rameshwaram has the first sea bridge connecting the town of Mandapam with Pamban Island, and Rameswaram.                    </p>
                </div>
            </div>




            <h3 className=" text-center"> Must Visit Place In Rameshwaram</h3>

            <div className=" mt-5  row row-cols-4 ">
                {/* card 1 */}
                <div>
                    <Card style={{ width: '16.5rem', height: "26rem" }}>
                        <Card.Img variant="top" src={ch2} />
                        <Card.Body>
                            <Card.Title>Dhanushkodi Temple</Card.Title>
                            <Card.Text>
                                Dhanushkodi was until a few years ago a wonderful temple on the southern tip of India.<br /> However, due to a...
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
                            <Card.Title>Lakshmana Temple</Card.Title>
                            <Card.Text>
                                Lakshmana Tirtham had been constructed in the loving memory of Lord Lakshman, brother of Lord Rama. In order..
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                {/* card 3 */}
                <div>
                    <Card style={{ width: '16.9rem', height: "26rem" }}>
                        <Card.Img variant="top" src={ch4} />
                        <Card.Body>
                            <Card.Title> Rameshwaram Temple </Card.Title>
                            <Card.Text>
                                A perfect blend of mind- boggling architecture and spiritual significance, Rameshwaram Temple, also...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>
                {/* card 4 */}
                <div>
                    <Card style={{ width: '16.5rem', height: "26rem" }}>
                        <Card.Img variant="top" src={ch5} />
                        <Card.Body>
                            <Card.Title> Villoondi Tirtham</Card.Title>
                            <Card.Text>
                                Villoondi Tirtham is a beach which is also considered a sacred natural water body and a favourite amongst tourists...
                            </Card.Text>
                            <Button variant="primary">Read More</Button>
                        </Card.Body>
                    </Card>
                </div>

            </div>




        </section >
    )
}
