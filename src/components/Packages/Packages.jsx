import { useState } from "react"
import './Packages.css'
import PackageTable from "./PackageTable"
import Cards from "./Cards"
import KanyaKumariPacakge from "./KanyaKumariPacakge"
import RameshwaramPackage from "./RameshwaramPackage"
import KodaikanalPacakage from "./KodaikanalPacakage"
import OotyPackage from "./OotyPackage"
import KumbaKonamPackage from "./KumbaKonamPackage"
import MaduraiPackages from "./MaduraiPackages"
import YercaudPackage from "./YercaudPackage"
import TheniPacakge from "./TheniPacakge"
import HogenakkalPackage from "./HogenakkalPackage"

const Packages = () => {

    const Paragrap = {
        WebkitLineClamp: 8,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        display: '-webkit-box',
        lineHeight: "180%",
        textAlign: "justify",
    }

    const [showFullContent, setShowFullContent] = useState(false)

    const toggleContent = () => {
        setShowFullContent(!showFullContent)
    }
    return (


        <div className="container">
            <div className="mt-3 row no-gutters "  >
                <div className="col-12">
                    <h3 className="mb-1">
                        Tamil Nadu Tour Packages
                    </h3>


                    <div className="mb-4 mt-4 font-smaller readMoreText" style={
                        showFullContent ? null : Paragrap
                    }>

                        <b>About Tamil Nadu Tourism: </b> Tamil Nadu is a land of breathtaking beauty, history and culture, all of which make it one of India's most popular tourist destinations. With years of being the centre of dynastic and colonial activity, Tamil Nadu is known for its holy sites, beaches, museums, waterfalls, forts and lush greenery. Holidify offers a bunch of affordable and customisable Tamil Nadu tour packages that are sure to provide you with a fantastic trip!<br /><br />With a combination of modern and ancient attractions to see, Tamil Nadu tour packages include some of the state's most famous destinations like Chennai, Kodaikanal, Ooty, Rameshwaram, Kanyakumari and Madurai. The best time to visit Tamil Nadu is perhaps between November to February, when the cool climate makes sightseeing a pleasant experience. <br /><br />Chennai, the capital city, is also known as the "Detroit of India" and is a former British Presidency situated on the Coromandel Coast. A trip to Chennai warrants a visit to some of its serene beaches like Breezy Beach, Marina Beach and the Royapuram Fishing Harbour. Chennai is also home to spectacular religious sites like Ashtalakshmi temple, Marundeeswarar Temple, Valluvar Kottam and Santhome Cathedral.<br /><br />Situated in the Nilgiri Hills, Ooty is a beautiful hill station in Tamil Nadu that features tea gardens, green valleys, waterfalls, magnificent architecture etc. Its colonial buildings like Stone House and St. Stephen's Church serve as major highlights, while Thread Garden, Rose Garden, Emerald Lake and Kalhatti Falls are a must-visit for nature lovers. Then, of course, its vast tea plantations and the Tea Factory must be on your itinerary. <br /><br />Rameshwaram is a holy destination known for being the place where Lord Rama built a bridge to Sri Lanka. It's synonymous with temples like Rameshwaram Temple, Kothandaramaswamy Temple, Jada Tirtham, Villoondi Tirtham etc. Also, visit the Kalam National Memorial and APJ Abdul Kalam's burial site.<br /><br />Kodaikanal is perfect for a tranquil getaway since it is full of sprawling green terrain, dense forests, hills and cliffs, waterfalls and more. Be sure to visit Bear Shola Falls, Thalaiyar Falls, Green Valley View, Pillar Rocks and Dolphin's Nose to experience the best of the region's natural bounty. Moreover, Lutheran Church, Christ the King Church and Kurinji Temple are some of the holy sites to see.<br /><br />Tamil Nadu's hilly terrain and water bodies provide ample chances for thrilling outdoor activities like trekking, parasailing, boating, swimming, scuba diving, camping etc. What's more, go shopping at Express Avenue, Main Bazaar and T Nagar to find some unique local items.<br /><br />
                        <h4 className=" mt-4 mb-3">Why to Buy Tour Packages&nbsp;for Tamil Nadu?</h4>
                        Buying a Tamil Nadu tour package can be beneficial and crucial, especially when considering the challenges mentioned earlier. Here are some specific reasons why purchasing a tour package for Tamil Nadu can be advantageous:<br />
                        <ul className="readMoreText">
                            <li><strong>Expert Itinerary Planning:</strong> Tour packages are usually curated by experienced travel agencies or tour operators who have extensive knowledge of the region. They can design itineraries that include popular tourist attractions, off-the-beaten-path destinations, and cultural experiences. This saves you time and effort in planning an itinerary from scratch and ensures that you make the most of your time in Tamil Nadu.</li>
                            <li><strong>Local Guides and Language Assistance:</strong> A tour package often includes the services of local guides who are familiar with the region and its culture. They can provide valuable insights, historical context, and help bridge the language barrier, making your travel experience more enriching and hassle-free. For example, a guide can assist you in understanding the significance of the intricate carvings at the Meenakshi Amman Temple in Madurai or explain the cultural traditions during a visit to a rural village.</li>
                            <li><strong>Hassle-free Transportation:</strong> Navigating transportation in a new place can be challenging, especially if you are unfamiliar with the local transportation systems. Tour packages usually include transportation arrangements, such as airport transfers, intercity travel, and local sightseeing, ensuring a smooth and convenient journey. This eliminates the need for you to figure out public transport or deal with traffic and allows you to relax and enjoy the sights.</li>
                            <li><strong>Pre-booked Accommodation:</strong> Tour packages often include pre-booked accommodation, ensuring that you have a comfortable stay during your trip. Travel agencies have established partnerships with hotels and resorts, allowing you to benefit from competitive rates and convenient locations. This saves you the time and effort of searching for suitable accommodations on your own.</li>
                            <li><strong>Safety and Security</strong>: Traveling with a tour package provides an added layer of safety and security. Reputed tour operators prioritize the safety of their clients and have measures in place to handle emergencies. For instance, they may have a 24/7 helpline, travel insurance coverage, and a network of trusted local contacts to assist in case of any unforeseen situations.</li>
                            <li><strong>Group Activities and Social Interaction:</strong> Joining a tour package gives you the opportunity to meet and interact with fellow travelers who share similar interests. Group activities and excursions are often included in the itinerary, fostering social connections and creating memorable experiences. For example, participating in a group hike to the scenic viewpoints of the Nilgiri Hills or exploring the unique culinary delights of Chennai with other travelers can enhance your overall trip experience.</li>
                        </ul>
                        By purchasing Holidify's Tamil Nadu tour package, you can leverage the expertise of professionals, enjoy a hassle-free journey, and have a well-structured itinerary that caters to your interests. However, it's important to choose a reputable tour operator and carefully review the package details to ensure it aligns with your preferences and needs.
                    </div>


                    <div id="moreLinkProgressive" onClick={toggleContent}>
                        {showFullContent ? '(Read Less)' : "(Read  More)"}
                    </div>


                </div>

                <div className=" mt-4">
                    <h4>Popular Tamil Nadu Packages</h4>
                    <PackageTable />
                </div>

                <div className=" mt-5" >
                    <h2> 01. Chennai</h2>
                    <Cards />
                </div>
                <div className=" mt-5" >
                    <h2> 02. Rameshwaram</h2>
                    <RameshwaramPackage />
                </div>
                <div className=" mt-5" >
                    <h2> 03. KodaiKanal</h2>
                    <KodaikanalPacakage />
                </div>
                <div className=" mt-5" >
                    <h2> 04. Ooty</h2>
                    <OotyPackage />
                </div>
                <div className=" mt-5" >
                    <h2> 05. KanyaKumari</h2>
                    <KanyaKumariPacakge />
                </div>
                <div className=" mt-5" >
                    <h2> 06. KumbaKonam</h2>
                    <KumbaKonamPackage />
                </div>
                <div className=" mt-5" >
                    <h2> 07. Madurai</h2>
                    <MaduraiPackages />
                </div>
                <div className=" mt-5" >
                    <h2> 08. Yercaud</h2>
                    <YercaudPackage />
                </div>
                <div className=" mt-5" >
                    <h2> 09. Theni</h2>
                    <TheniPacakge />
                </div>
                <div className=" mt-5" >
                    <h2> 10. Hogenakkal</h2>
                    <HogenakkalPackage />
                </div>

            </div>


        </div>




    )
}

export default Packages