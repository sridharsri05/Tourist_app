import { Accordion, Image } from 'react-bootstrap';
import img1 from "../../../public/images/timetoTravel/image.jpeg"
import img2 from "../../../public/images/timetoTravel/image1.jpeg"
import img3 from "../../../public/images/timetoTravel/image2.jpeg"

const DropDown = () => {

    return (
        <section className=' ms-3' >

            <Accordion className="mt-5">
                <Accordion.Item eventKey="summer">
                    <Accordion.Header>
                        Tamil Nadu in Summer (March-May)
                    </Accordion.Header>
                    <Accordion.Body
                        style={{ textIndent: "4.5rem", textAlign: "justify", fontSize: '14.5px' }}
                    >
                        This season begins in March and lasts until May. The
                        temperatures are high, ranging between 35°C and 40°C and so is
                        the humidity especially in the coastal regions. Sightseeing
                        during this time is not very convenient because of the improper
                        temperature. The season, however, is visited to witness the
                        festival of Chithirai held in the Madurai temple in the month of
                        March-April. Puthandu, another important festival that marks the
                        Tamil New year falls in mid-April and Mahamahan Festival is
                        celebrated in March (celebrated once in 12 years). If visiting
                        during summer, it is a good idea to visit the attractions on
                        higher attitudes. Hill stations like Ooty, Kodaikanal and
                        Yelagiri hills are the best where the temperature is pleasant
                        and has scenic views that tourists can witness.
                        <Image
                            style={{ width: "100%", height: "auto" }}
                            src={img1}
                            alt="Pillar Rocks of Kodaikanal"
                        />
                        <p className="text-center">Pillar Rocks of Kodaikanal</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion>
                <Accordion.Item eventKey="summer">
                    <Accordion.Header>
                        Tamil Nadu in Monsoon (June-September)
                    </Accordion.Header>
                    <Accordion.Body
                        style={{ textIndent: "4.5rem", textAlign: "justify", fontSize: '14.5px' }}
                    >
                        This southern state sees monsoon two times a year - once between
                        June to September and the retreating monsoon in November and
                        December. The temperature is slightly less than what it is in
                        the summer season. It ranges between 25°C and 30°C. The rains
                        often occur in long spells and the humidity during this time is
                        high especially in coastal regions. Some of the hilly areas see
                        massive rainfall and venturing out during this time around is
                        not a great idea. The Eastern seaboard of Tamil Nadu sometimes
                        experiences cyclones during the late monsoon, making it an
                        unsafe place to visit.
                        <Image
                            style={{ width: "100%", height: "auto" }}
                            src={img2}
                            alt="Pillar Rocks of Kodaikanal"
                        />
                        <p className="text-center">A Rainy Day in Chennai Source</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <Accordion>
                <Accordion.Item eventKey="summer">
                    <Accordion.Header>
                        Tamil Nadu in Winter (October-February)
                    </Accordion.Header>
                    <Accordion.Body
                        style={{ textIndent: "4.5rem", textAlign: "justify", fontSize: '14.5px' }}
                    >
                        Winter in Tamil Nadu begins in October and lasts until February.
                        November and December have intermittent rainfall because of the
                        retreating monsoon, but otherwise, the temperature remains
                        between 10°C and 15°C. The humidity is low, and it is the best
                        climate for sightseeing and touring the cities. Most of the
                        tourist attractions are bustling with activities during this
                        season. The beaches call the beach lovers, and adventure seekers
                        for bathing in the sun, swimming and water sports as the
                        temperature remains moderate all through the day.
                        <Image
                            style={{ width: "100%", height: "auto" }}
                            src={img3}
                            alt="Pillar Rocks of Kodaikanal"
                        />
                        <p className="text-center">
                            Pechiparai Reservoir in Kanyakumari District Source
                        </p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </section>
    );



}

export default DropDown