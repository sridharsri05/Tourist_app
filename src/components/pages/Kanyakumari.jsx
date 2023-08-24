
import ch1 from "../../../public/images/pages/Kanyakumari.jpeg"
import ch2 from "../../../public/images/pages/kanyakumari1.jpeg"
import ch3 from "../../../public/images/pages/kanyakumari2.jpeg"
import ch4 from "../../../public/images/pages/kanyakumari3.jpeg"
import ch5 from "../../../public/images/pages/kanyakumari4.jpeg"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Kanyakumari = () => {
  return (
    <section id="Kanyakumari" className=" container mT5  " >
      <div className=" row row-cols-2">
        <div>
          <h2> 05.Kanyakumari
          </h2>
          <img src={ch1} className="   w-100   h-75   " alt="..." />
        </div>
        <div className="section2  mt-5  ">
          <h6> "Cape Comorin or The Land's End"</h6>
          <p>
            Kanyakumari Tourism Bordered by the three seas - Arabian, Indian and the Bay of Bengal, Kanyakumari is the southernmost tip of the Indian Peninsula. A small coastal town in the state of Tamil Nadu, Kanyakumari was earlier known as Cape Comorin.
          </p>
          <p>
            Kanyakumari offers the marvellous confluence of the Bay of Bengal, the Arabian Sea and the Indian ocean meeting together at a point. But, this is not a miracle, the miracle lies in the beauty that the water of three seas does not mix, you can clearly distinguish between the turquoise blue, deep blue and sea green waters of the three seas. To enjoy the best view of sunset and sunrise, you can visit the Triveni Sangam point and the famous View tower. The town has a mountainous terrain with elevated patches of hills. coconut trees and lined with paddy fields.
          </p>
        </div>
      </div>




      <h3 className=" text-center mt-5" > Must Visit Place In Kanyakumari</h3>

      <div className=" mt-5  row row-cols-4 ">
        {/* card 1 */}
        <div>
          <Card style={{ width: '16.5rem' }}>
            <Card.Img variant="top" src={ch2} />
            <Card.Body>
              <Card.Title>Kanyakumari Beach</Card.Title>
              <Card.Text>
                Located in the southernmost part of India, Kanyakumari beach with its beautiful hue- changing <br />beaches...
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>
        {/* card 2 */}
        <div>
          <Card style={{ width: '16.9rem' }}>
            <Card.Img variant="top" src={ch3} />
            <Card.Body>
              <Card.Title>Vivekananda Memorial</Card.Title>
              <Card.Text>
                The magnificent Vivekananda Rock Memorial is located on a small island off Kanyakumari.  It has the picturesque...
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
              <Card.Title>  Thiruvalluvar Status</Card.Title>
              <Card.Text>
                Dedicated to the accomplished philosopher and statue , poet Thiruvalluvar, this beautiful statue finds itself..
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
              <Card.Title>  Thirparappu Falls</Card.Title>
              <Card.Text>
                Located at a distance of about

                55 kilometers from waters of the Thirparappu...

                Kanyakumari, the cascading height of nearly 50 feet
              </Card.Text>
              <Button variant="primary">Read More</Button>
            </Card.Body>
          </Card>
        </div>

      </div>




    </section>
  )
}

export default Kanyakumari