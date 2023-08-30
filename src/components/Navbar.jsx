import { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";




const NavBar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };
    return (

        <>
            <nav className="navbar navbar-expand-md      fixedTop ">
                <div className="container">
                    <a className="navbar-brand text-light fw-bold " href="#">

                        <h4>   TAMILNADU TOURISM </h4>
                    </a>
                    <button
                        className="navbar-toggler text-light"
                        type="button"
                        onClick={handleNav}
                    >
                        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
                    </button>
                    <div className={`collapse navbar-collapse ${nav ? "show" : ""}`}>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link to={"/"} className="nav-link text-light">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/Places'} className="nav-link text-light">
                                    Places to Visit
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to={'/Time'} className="nav-link text-light">
                                    Best Time To Visit
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light">
                                    Packages
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light">
                                    Destination
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to={'/Food '} className="nav-link text-light">
                                    Food
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>



        </>

    )
}

export default NavBar