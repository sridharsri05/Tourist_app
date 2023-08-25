import img1 from "/images/nav/Place.jpeg"
import "./Places.css"
import ChennaiPlace from "./ChennaiPlace"
import RameshwaramPlace from "./RameshwaramPlace"
import KodaikanalPlace from "./KodaikanalPlace"
import OotyPlace from "./OotyPlace"
import KanyakumariPlace from "./KanyakumariPlace"
import KumbakonamPlace from "./KumbakonamPlace"
import MaduraiPlace from "./MaduraiPlace"
import YercaudPlace from "./YercaudPlace"
import TheniPlace from "./TheniPlace"
import HogenakkalPlace from "./HogenakkalPlace"


const Places = () => {
    return (
        <section className=" mg-5 ">
            <div >

                <div className=' row  row-cols-md-2  '>


                    <div className="parag">
                        <div>  <h3 className=" mb-4 ">Tourist Places To Visit In Tamil Nadu</h3> </div>
                        <p>

                            Chennai, Ooty, Pondicherry, Kodaikanal, Coimbatore, velagin, Masinagudi. Conoor, Madumalai, Yercaud, Madurai, Thanjavur, Mahabalipuram, Kanyakumari, Kotagiri, Nilgiri Krishnagiri, Auroville, Theni, Hullathy, Rameshwaram, Kalhatty Ghat and more.
                        </p>
                        <p>
                            Enjoy a vacation to remember and cherish some amazing experiences while touring the most gorgeous places to visit in Tamil Nadu. With many serene beaches beautiful temples known for Dravidian architecture, bustling shopping bazaars and adventurous wildlife places, these places offer a splendid mix to help you make superb travel itinerary.
                        </p>
                        <p>
                            Looking forward to visiting the most stunning places to see in Tamil Nadu? Well, then you are in for a great time. From the thriving cosmopolitan vibes of Chennai to the emerald tea plantations of Ooty and the French style houses of Pondicherry to the scenic beauty of Kodaikanal, these places will leave you overwhelmed. There is an awesome experience in store, whether you are going for leisure, backpacking or looking for an adventure.
                        </p>

                    </div>
                    <div className=" img-p  text-center  ">
                        <img src={img1} alt="" className=" w-100  " style={{ height: "90%" }} />
                        <h6 >Tourist Places To Visit In Tamil Nadu</h6>
                    </div>


                </div>
                <p>

                    The variety of tourist places in Tamil Nadu offers you a glimpse of all kinds of sightseeing and adventures, Tourists here can choose among many offbeat places like velagiri and Vercaud to the famous cultural citadels like Mahabalipuram and Madurai. Tamil Nadu is also home to the southernmost land of India- Kanyakumari and one of the char chams: Rameshwaram. Whether it is an adventure you are looking for or a religious respite in the temples, these places are a delight for anyone wishing to escape the hustle and bustle of life.
                </p>

            </div>
            <ChennaiPlace />
            <RameshwaramPlace />
            <KodaikanalPlace />
            <OotyPlace />
            <KanyakumariPlace />
            <KumbakonamPlace />
            <MaduraiPlace />
            <YercaudPlace />
            <TheniPlace />
            <HogenakkalPlace />

        </section >
    )
}

export default Places