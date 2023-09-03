import React from 'react'

const KanyaKumariPacakge = () => {

    const data = [
        {
            title: 'Chidambaram - Kumbakonam - Trichy (from KanyaKumari)',
            title2: ' Ex KanyaKumari',
            image: 'https://www.trawell.in/images/itinerary/sm/Kanyakumari3_sm.jpg',
            days: '4D/3N',
            High_price: '₹18063',
            Low_price: '₹14450',
            id: '1'
        },
        {
            title: 'Chidambaram - Thanjavur - Madurai - Trichy (from KanyaKumari)',
            title2: ' Ex-KanyaKumari',
            image: 'https://www.trawell.in/admin/images/thumbs/705432655Padmanabhapuram_Palace_Main_thumb.jpg',
            days: '4D/3N',
            High_price: '₹17763',
            Low_price: '₹13750',
            id: '2'
        },
        {
            title: 'KanyaKumari - Pondicherry - Mahabalipuram (from KanyaKumari)',
            title2: ' Ex-KanyaKumari',
            image: 'https://www.trawell.in/admin/images/thumbs/705432883Vivekananda_Rock_Memorial_Main_thumb.jpg',
            days: '5D/4N',
            High_price: '₹24063',
            Low_price: '₹19450',
            id: '3'
        },
        {
            title: 'Kanchipuram - Chidambaram - Kumbakonam  (from KanyaKumari)',
            title2: ' Ex-KanyaKumari',
            image: 'https://www.trawell.in/admin/images/thumbs/705432754Gandhi_Mandapam_Main_thumb.jpg',
            days: '5D/4N',
            High_price: '₹23063',
            Low_price: '₹18450',
            id: '4'
        },
        {
            title: 'Thanjavur - Mahabalipuram - Kanchipuram(from KanyaKumari)',
            title2: ' Ex KanyaKumari',
            image: '	https://www.trawell.in/admin/images/thumbs/705432465Thriparappu_Falls_main_thumb.jpg',
            days: '7D/6N',
            High_price: '₹33063',
            Low_price: '₹27450',
            id: '5'
        },
        {
            title: '  KanyaKumari, Mahabalipuram, Pondicherry  ',
            title2: ' Ex KanyaKumari',
            image: 'https://www.trawell.in/admin/images/thumbs/305939856KumariammanTemple_Main_thumb.jpg',
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

export default KanyaKumariPacakge