import React from 'react'

const MaduraiPackages = () => {


    const data = [
        {
            title: "Chennai -Coimbatore-Erode-  Trichy (from Madurai)",
            title2: " Ex Madurai",
            image: "	https://www.holidify.com/images/bgImages/TIRUCHI.jpg",
            days: "5D/4N",
            High_price: "₹18063",
            Low_price: "₹14450",
            id: "1",
        },
        {
            title: "Dindigul - Tiruppur-Karaikudi- Trichy (from Madurai)",
            title2: " Ex-Madurai",
            image:
                " 		https://www.trawell.in/admin/images/thumbs/653500498Trichy_Samayapuram_Main_thumb.jpg",
            days: "6D/5N",
            High_price: "₹17763",
            Low_price: "₹13750",
            id: "2",
        },
        {
            title: "Pondichery -Tirunelveli-Conoor- Mahabalipuram (from Madurai)",
            title2: " Ex-Madurai",
            image:
                "https://www.trawell.in/admin/images/thumbs/705432228Alagar_Kovil_Main_thumb.jpg",
            days: "5D/4N",
            High_price: "₹24063",
            Low_price: "₹19450",
            id: "3",
        },
        {
            title: "Dindigul -Kadalur-velur - Kumbakonam  (from Madurai)",
            title2: " Ex-Madurai",
            image:
                "	https://www.trawell.in/admin/images/thumbs/196833797Srivilliputhur_Andal_Temple_thumb.jpg",
            days: "3D/2N",
            High_price: "₹23063",
            Low_price: "₹18450",
            id: "4",
        },
        {
            title:
                "Thanjavur -Viruthunagar-Sivakasi - Salem in 7 Days (from Madurai)",
            title2: " Ex Madurai",
            image:
                "		https://www.trawell.in/admin/images/thumbs/705432174Vaigai_Dam_Main_thumb.jpg",
            days: "3D/2N",
            High_price: "₹15500",
            Low_price: "₹12000",
            id: "5",
        },
        {
            title: "Tiruchi-Sivakasi-Dharmapuri - Coimbatore  ",
            title2: " Ex Madurai",
            image:
                "	https://www.trawell.in/admin/images/thumbs/759142303Palani_Main_thumb.jpg",
            days: "6D/5N",
            High_price: "₹10000",
            Low_price: "₹6450",
            id: "6",
        },
    ];
    return (
        <div className="container  d-grid  m-4  ">
            <div className=" row gap-5   ">
                {data.map((datas) => (
                    <>
                        <div className="card-1 " style={{ width: "18rem" }} key={datas.id}>
                            <div className="card  " style={{ width: "18rem" }}>
                                <img
                                    src={datas.image}
                                    className="card-img-top"
                                    alt="..."
                                    style={{ height: " 215px", width: "290px" }}
                                />
                                <div className="card-body">
                                    <p className="card-text">
                                        <span className=" float-start">
                                            <img
                                                src="https://www.trawell.in/images/icons/line/icon-day.png"
                                                alt=""
                                                style={{ width: "20px" }}
                                            />
                                            {datas.days}
                                        </span>
                                        <span className=" float-end">
                                            <span>
                                                {" "}
                                                <img
                                                    src="https://www.trawell.in/images/icons/line/stay.png"
                                                    alt=""
                                                    style={{ width: "20px" }}
                                                />{" "}
                                                +
                                            </span>
                                            <span>
                                                <img
                                                    src="https://www.trawell.in/images/icons/line/travel.png"
                                                    alt=""
                                                    style={{ width: "25px" }}
                                                />{" "}
                                                +
                                            </span>
                                            <span>
                                                <img
                                                    src="https://www.trawell.in/images/icons/line/sightseeing.png"
                                                    alt=""
                                                    style={{ width: "20px" }}
                                                />{" "}
                                            </span>
                                        </span>
                                    </p>
                                </div>
                                <div className=" card-footer ">
                                    <p style={{ display: "inline-block", float: "left" }}>
                                        <span
                                            style={{
                                                textDecoration: " line-through",
                                                color: "#A0A0A0",
                                            }}
                                        >
                                            {datas.High_price}
                                        </span>
                                        <span className="span-foot">{datas.Low_price}</span>
                                    </p>
                                    <a href="#" className=" btn btn-sm ">
                                        {" "}
                                        View Details
                                    </a>
                                </div>
                                <div className=" card-img-overlay ">
                                    <div className=" card-header">
                                        <h6>
                                            <a href="#" className=" ">
                                                {datas.title}
                                            </a>
                                        </h6>
                                    </div>
                                    <div className=" card-footer">
                                        <h6>
                                            <a href="#" className=" ">
                                                {datas.title2}
                                            </a>
                                        </h6>
                                    </div>
                                </div>
                            </div>
                            <div className=" tour-plan">
                                <a href="#">
                                    <img
                                        src="https://www.trawell.in/images/banner_tourplan.png"
                                        style={{
                                            height: "20px",
                                            textAlign: "right",
                                            margin: "0px ",
                                        }}
                                    />
                                </a>
                            </div>
                        </div>
                    </>
                ))}
            </div>
        </div>
    );
};

export default MaduraiPackages