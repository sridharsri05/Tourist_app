import ch1 from "../../../public/images/pages/Chennai.jpeg"
import ch2 from "../../../public/images/pages/chennai1.jpeg"
import ch3 from "../../../public/images/pages/chennai2.jpeg"
import ch4 from "../../../public/images/pages/chennai3...jpeg"
import ch5 from "../../../public/images/pages/chennai4.jpeg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Chennai = () => {
    return (
        <section id="chennai" className=" container mt-5  " >
            <div className=" row row-cols-2">
                <div>
                    <h2> 01.Chennai</h2>
                    <img src={ch1} className="   w-100   h-75   " alt="..." />
                </div>
                <div className="section2  mt-5  ">
                    <h6> "The Detroit Of India "</h6>
                    <p>
                        Formerly known as Madras, Chennai is the capital city of the state of Tamil Nadu, in the southern part of India. Located on the Coromandel coast of Bay of Bengal, Chennai is as dynamic as it is immersed in tradition. This 'capital of the south', is one among the four metropolitan siblings of India, having a rich cultural history which it perfectly balances with its metropolis lifestyle.
                    </p>
                    <p>
                        Amid its chaos of traffic and sweltering humid climate, Chennai is worth visiting for its temples steeped in south-Indian culture, British-era museums and monuments, culinary delights and Marina Beach (Second largest urban beach in the world). Chennai's skyline is famous for its towering skyscrapers, but the heart of Chennai has an old-world charm to it that refuses to be overshadowed.
                    </p>
                </div>
            </div>


            <section className="container   ">

                <h3 className=" text-center"> Must Visit Place In Chennai</h3>

                <div className=" mt-5  row row-cols-4 ">
                    {/* card 1 */}
                    <div>
                        <Card style={{ width: '16.5rem' }}>
                            <Card.Img variant="top" src={ch2} />
                            <Card.Body>
                                <Card.Title>Mariana Beach</Card.Title>
                                <Card.Text>
                                    Situated in city Of chennai in TamilNadu, <br />Marina beach is a natural urban beach along the bay of Bengal..
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
                                <Card.Title>MGR Flim City</Card.Title>
                                <Card.Text>
                                    Having been established in the year 1994, a considerably new structure,the MGR Film City is managed...
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
                                <Card.Title> Marundeeswarar Temple</Card.Title>
                                <Card.Text>
                                    The Magnificent  Marundeeswarar Temple, in Tiruvanmiyur, near chennai has the temple deity Shiva..
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
                                <Card.Title> Breezy Beach</Card.Title>
                                <Card.Text>
                                    Breezy Beach lays in the remote and serene neighbourhood of Valmiki Nagar in Chennai. Being smaller and less polluted...
                                </Card.Text>
                                <Button variant="primary">Read More</Button>
                            </Card.Body>
                        </Card>
                    </div>

                </div>


            </section>

        </section>
    )
}

export default Chennai