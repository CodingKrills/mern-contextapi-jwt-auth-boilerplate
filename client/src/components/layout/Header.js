import React, { useContext } from 'react'

import {
    Link
} from "react-router-dom";

import UserContext from "../../context/userContext";

export default function Header() {


    const { setUserData } = useContext(UserContext);

    const logout = () => {
        setUserData({
            token: undefined,
            user: undefined,
        });
        localStorage.setItem("auth-token", "");
    }


    return (
        <div>

            <div className="" style={{ marginBottom: "4rem" }}>

                <nav className="navbar navbar-expand-lg bg-primary fixed-top">
                    <div className="container">

                        <div className="navbar-translate">
                            <Link className="navbar-brand" to="/"><i className="fa fa-home"></i> Home</Link>
                        </div>
                        <div className="">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <Link to="/login" className="btn btn-primary btn-rose btn-round btn-block">Login</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/register" className="btn btn-primary btn-success btn-round btn-block">Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link onClick={logout} className="btn btn-primary btn-success btn-round btn-block">Log Out</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>

        </div>
    )
}
