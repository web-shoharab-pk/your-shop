import React, { useContext } from 'react';
import './Header.css'
import { Link } from 'react-router-dom';
import { UserContaxt } from '../../App';

const Header = () => {
    const { userDetails } = useContext(UserContaxt);

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <Link style={{ fontWeight: 'bolder' }} className="navbar-brand mx-5" to="/">YOUR SHOP</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex align-items-center">
                            <li className="nav-item mx-5">
                                <Link style={{ fontWeight: 'bolder' }} className="nav-link rounded py-1 px-5 active" aria-current="page" to="/home">Home</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link style={{ fontWeight: 'bolder' }} className="nav-link rounded py-1 px-5  active" to="/orders">Orders</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link style={{ fontWeight: 'bolder' }} className="nav-link rounded py-1 px-5  active" to="/admin">Admin</Link>
                            </li>
                            <li className="nav-item mx-5">
                                <Link style={{ fontWeight: 'bolder' }} className="nav-link rounded py-1 px-5  active" to="/deals">Deals</Link>
                            </li>

                            <li className="nav-item mx-5">
                                <Link style={{ fontWeight: 'bolder' }} className="nav-link active  rounded   login" to="/login">

                                    {
                                        userDetails.email ? <img src={userDetails.photoURL} alt="" /> : 'login'
                                    }
                                </Link>
                            </li>
                            <span className="navbar-text">
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success" type="submit">Search</button>
                                </form>
                            </span>
                        </ul>

                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;