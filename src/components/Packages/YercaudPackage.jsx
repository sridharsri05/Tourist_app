import React from 'react'

const YercaudPackage = () => {

    const data = [
        {
            title: " Krishnagiri - Madurai - Trichy (from Yercaud)",
            title2: " Ex-Yercaud",
            image: "	https://www.holidify.com/images/compressed/5138.jpg",
            days: "5D/4N",
            High_price: "₹18063",
            Low_price: "₹14450",
            id: "1",
        },
        {
            title: "Madurai - Trichy- kanyakumari (from Yercaud)",
            title2: " Ex-Yercaud",
            image: " 	https://www.holidify.com/images/compressed/8199.jpg",
            days: "6D/5N",
            High_price: "₹17763",
            Low_price: "₹13750",
            id: "2",
        },
        {
            title: "Tanjavur - Chennai - Kadalur - Mahabalipuram (from Yercaud)",
            title2: " Ex-Yercaud",
            image:
                "		https://www.holidify.com/images/cmsuploads/square/5139_20190301125919.jpg",
            days: "5D/4N",
            High_price: "₹24063",
            Low_price: "₹19450",
            id: "3",
        },
        {
            title: "Palani  - Kumbakonam - Madurai - Theni (from Yercaud)",
            title2: " Ex-Yercaud",
            image:
                "		https://www.holidify.com/images/cmsuploads/compressed/233162880_20220223181542.jpg",
            days: "3D/2N",
            High_price: "₹23063",
            Low_price: "₹18450",
            id: "4",
        },
        {
            title: "Munar  - Kanchipuram - Ramehswaram - Ooty (from Yercaud)",
            title2: " Ex Yercaud",
            image:
                "		https://www.holidify.com/images/cmsuploads/compressed/410595324_20230524111644.jpg",
            days: "7D/6N",
            High_price: "₹33063",
            Low_price: "₹27450",
            id: "5",
        },
        {
            title: "Ooty - Conoor -Coimbator - Pondicherry  ",
            title2: " Ex Yercaud",
            image:
                "	https://www.holidify.com/images/cmsuploads/compressed/295861412_20210801180345.jpg",
            days: "6D/5N",
            High_price: "₹10000",
            Low_price: "₹6450",
            id: "5",
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


export default YercaudPackage