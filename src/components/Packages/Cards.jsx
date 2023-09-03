
import './Cards.css'

const Cards = () => {

    const data = [
        {
            title: 'Chidambaram - Kumbakonam - Thanjavur - Trichy (from Chennai)',
            title2: ' Ex Chennai',
            image: 'https://www.trawell.in/images/itinerary/sm/Trichy_Rock_Fort_Temple_sm.jpg',
            days: '4D/3N',
            High_price: '₹18063',
            Low_price: '₹14450',
            id: '1'
        },
        {
            title: 'Chidambaram - Thanjavur - Madurai - Trichy (from Chennai)',
            title2: ' Ex-Chennai',
            image: ' https://www.trawell.in/images/itinerary/sm/Srirangam_Temple_Main_sm.jpg',
            days: '4D/3N',
            High_price: '₹17763',
            Low_price: '₹13750',
            id: '2'
        },
        {
            title: 'Chennai - Kanchipuram - Pondicherry - Mahabalipuram (from Chennai)',
            title2: ' Ex-Chennai',
            image: 'https://www.trawell.in/images/itinerary/sm/Kanchipuram1_sm.jpg',
            days: '5D/4N',
            High_price: '₹24063',
            Low_price: '₹19450',
            id: '3'
        },
        {
            title: 'Kanchipuram - Chidambaram - Kumbakonam  (from Chennai)',
            title2: ' Ex-Chennai',
            image: 'https://www.trawell.in/images/itinerary/sm/Kanchipuram_sm.jpg',
            days: '5D/4N',
            High_price: '₹23063',
            Low_price: '₹18450',
            id: '4'
        },
        {
            title: 'Thanjavur - Mahabalipuram - Kanchipuram in 7 Days (from Chennai)',
            title2: ' Ex Chennai',
            image: 'https://www.trawell.in/images/itinerary/sm/Trichy_Rock_Fort_Temple_sm.jpg',
            days: '7D/6N',
            High_price: '₹33063',
            Low_price: '₹27450',
            id: '5'
        },
        {
            title: 'Beachy Vacation - Chennai, Mahabalipuram, Pondicherry  ',
            title2: ' Ex Chennai',
            image: 'https://www.holidify.com/images/cmsuploads/compressed/shutterstock_1120849187_20190628191317.jpg',
            days: '6D/5N',
            High_price: '₹10000',
            Low_price: '₹6450',
            id: '5'
        },
    ]
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

export default Cards






