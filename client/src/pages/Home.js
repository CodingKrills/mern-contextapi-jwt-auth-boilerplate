import React, { useContext, useEffect } from 'react'
import UserContext from "../context/userContext";
import { Link, useHistory } from "react-router-dom";

export default function Home() {

    const { userData } = useContext(UserContext);
    // const history = useHistory();

    // useEffect(() => {

    //     if (!userData.user) {
    //         history.push('/login')
    //     }

    // }, [userData])

    return (
        <div>
            {userData.user ? (

                <div className="section section-tabs">
                    <div className="container">
                        <div id="nav-tabs">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="card card-nav-tabs">
                                        <div className="card-header card-header-primary">
                                            <div className="nav-tabs-navigation">
                                                <div className="nav-tabs-wrapper">
                                                    <ul className="nav nav-tabs" data-tabs="tabs">
                                                        <li className="nav-item">
                                                            <a className="nav-link active" href="#profile" data-toggle="tab">
                                                                <i className="material-icons">face</i>
                                            Profile
                                        </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#messages" data-toggle="tab">
                                                                <i className="material-icons">chat</i>
                                            Messages
                                        </a>
                                                        </li>
                                                        <li className="nav-item">
                                                            <a className="nav-link" href="#settings" data-toggle="tab">
                                                                <i className="material-icons">build</i>
                                            Settings
                                        </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card-body ">
                                            <div className="tab-content text-center">
                                                <div className="tab-pane active" id="profile">
                                                    <h1>Welcome {userData.user.displayName}</h1>

                                                </div>
                                                <div className="tab-pane" id="messages">
                                                    <p> I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at.</p>
                                                </div>
                                                <div className="tab-pane" id="settings">
                                                    <p>I think that&#x2019;s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. So when you get something that has the name Kanye West on it, it&#x2019;s supposed to be pushing the furthest possibilities. I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>








            ) : (
                    <div className="container">
                        <h2>You are not logged in</h2>
                        <Link to="/login">Log in</Link>
                    </div>
                )}







        </div>
    )
}
