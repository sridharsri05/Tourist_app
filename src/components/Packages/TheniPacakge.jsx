import React from 'react'

const TheniPacakge = () => {



    const data = [
        {
            title: "Munnar -Ooty-Kodaikanal -  Trichy (from Theni)",
            title2: " Ex Theni",
            image:
                "		https://www.trawell.in/blog/wp-content/uploads/2021/08/Main_Image-5-730x410.jpg",
            days: "5D/4N",
            High_price: "₹18063",
            Low_price: "₹14450",
            id: "1",
        },
        {
            title: "Madurai -Rameshwaram - Kadalur - Trichy (from Theni)",
            title2: " Ex-Theni",
            image:
                " 			https://www.trawell.in/admin/images/upload/160166872megamalai_sanctuary.jpg",
            days: "6D/5N",
            High_price: "₹17763",
            Low_price: "₹13750",
            id: "2",
        },
        {
            title: "Chennai - Tirunelveli-Madurai- Mahabalipuram (from Theni)",
            title2: " Ex-Theni",
            image:
                "		https://www.trawell.in/admin/images/upload/160387977Megamalai_Chinna_Suruli_Waterfalls_Main.jpg",
            days: "5D/4N",
            High_price: "₹24063",
            Low_price: "₹19450",
            id: "3",
        },
        {
            title: "Thanjavur  - Toothukudi-Dindigul - Kumbakonam  (from Theni)",
            title2: " Ex-Theni",
            image: "	https://www.trawell.in/admin/images/upload/041056591Valparai.jpg",
            days: "3D/2N",
            High_price: "₹23063",
            Low_price: "₹18450",
            id: "4",
        },
        {
            title: "Rameshwaram -Dharmapuri-Conoor - Salem  (from Theni)",
            title2: " Ex Theni",
            image: "		https://www.trawell.in/images/itinerary/Meghamalai.jpg",
            days: "3D/2N",
            High_price: "₹15500",
            Low_price: "₹12000",
            id: "5",
        },
        {
            title: "Kumbakonam - Coimbatore -Tiruppur-Hosur ",
            title2: " Ex Theni",
            image:
                "		https://www.trawell.in/admin/images/upload/705432465Thriparappu_Falls_main.jpg",
            days: "6D/5N",
            High_price: "₹10000",
            Low_price: "₹6450",
            id: "6",
        },
    ];
    return (
        <div className='container  d-grid  m-4  '>
            <div className=' row gap-5   ' >

                {
                    data.map((datas) => (
                        <>

                            <div className="card-1 " style={{ width: '18rem' }} key={datas.id}>

                                <div className="card  " style={{ width: '18rem' }} >
                                    <img src={datas.image} className="card-img-top" alt="..." style={{ height: " 215px", width: '290px' }} />
                                    <div className="card-body">
                                        <p className="card-text">
                                            <span className=' float-start'>
                                                <img src="https://www.trawell.in/images/icons/line/icon-day.png" alt="" style={{ width: '20px' }} />
                                                {datas.days}
                                            </span>
                                            <span className=' float-end'>
                                                <span> <img src="https://www.trawell.in/images/icons/line/stay.png" alt="" style={{ width: '20px' }} /> +</span>
                                                <span><img src="https://www.trawell.in/images/icons/line/travel.png" alt="" style={{ width: '25px' }} /> +</span>
                                                <span><img src="https://www.trawell.in/images/icons/line/sightseeing.png" alt="" style={{ width: '20px' }} /> </span>
                                            </span>
                                        </p>
                                    </div>
                                    <div className=' card-footer '>
                                        <p style={{ display: 'inline-block', float: 'left' }}>
                                            <span style={{ textDecoration: ' line-through', color: '#A0A0A0' }}>{datas.High_price}</span>
                                            <span className='span-foot'>{datas.Low_price}</span>
                                        </p>
                                        <a href="#" className=' btn btn-sm '> View Details</a>
                                    </div>
                                    <div className=' card-img-overlay '>
                                        <div className=' card-header'>
                                            <h6><a href="#" className=' ' >
                                                {datas.title}
                                            </a></h6>
                                        </div>
                                        <div className=' card-footer'>
                                            <h6><a href="#" className=' ' >
                                                {datas.title2}
                                            </a></h6>
                                        </div>
                                    </div>
                                </div>
                                <div className=' tour-plan'>
                                    <a href="#">
                                        <img src="https://www.trawell.in/images/banner_tourplan.png" style={{ height: "20px", textAlign: 'right', margin: '0px ' }} />
                                    </a>
                                </div>
                            </div >

                        </>


                    ))
                }
            </div>
        </div>
    )
}


export default TheniPacakge