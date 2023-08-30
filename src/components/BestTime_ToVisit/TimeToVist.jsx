
import img1 from "../../../public/images/timetoTravel/Climate.jpeg"

import ChennaiVisit from "./ChennaiVisit"
import DropDown from "./DropDown"
import HogenakkalVisit from "./HogenakkalVisit"
import KanyaKumariVisit from "./KanyaKumariVisit"
import KodaiKanalVisit from "./KodaiKanalVisit"
import KumbaKonamVisit from "./KumbaKonamVisit"
import MaduraiVisit from "./MaduraiVisit"
import OotyVist from "./OotyVist"
import RameshwaramVisit from "./RameshwaramVisit"
import TheniVisit from "./TheniVisit"
import YercaudVisit from "./YercaudVisit"

const TimeToVist = () => {
    return (
        <section className=' mg-5'>
            <div className=' para-1'>
                <div>
                    <h4>TAMILNADU TOURISM</h4>
                    <h3> Best Time To Visit</h3>
                </div>
                <div className=' row row-cols-2  mt-5'>
                    <div className=' text-center  ' >
                        <img src={img1} alt={img1} style={{ height: '290px', width: '540px' }} />
                        <h6 >Best Time To Visit</h6>
                    </div>
                    <div className=" text-center">
                        <h5> More about Best Time  To Travel To Tamil Nadu</h5>

                        <DropDown />
                    </div>
                </div>
                <div className=" mt-2 ">

                    <p>The best time to visit Tamil Nadu is during the winter season, ie, from November to February when the temperature is relatively low, and pleasant to explore the attractions in the state. Monsoons bring torrential downpour which makes it an inappropriate time to travel through Tamil Nadu. Summer, however, is perfect for exploring the hills stations. Tourists can pick the region they wish to see according to the season because offseason visits could be extremely inconvenient for some.</p>
                </div>
            </div>
            <ChennaiVisit />
            <RameshwaramVisit />
            <KodaiKanalVisit />
            <OotyVist />
            <KanyaKumariVisit />
            <KumbaKonamVisit />
            <MaduraiVisit />
            <YercaudVisit />
            <TheniVisit />
            <HogenakkalVisit />
        </section>
    )
}

export default TimeToVist