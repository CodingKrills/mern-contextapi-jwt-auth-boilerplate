import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
import UserContext from "../../context/userContext";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Login() {

    const history = useHistory();

    const { setUserData } = useContext(UserContext);
    const [error, setError] = useState("");
    const { register, handleSubmit, watch, errors } = useForm();

    const onSubmit = async data => {
        try {
            const loginRes = await axios.post("http://localhost:5000/users/login", {
                email: data.email,
                password: data.password
            });
            setUserData({
                token: loginRes.data.token,
                user: loginRes.data.user,
            });
            console.log(loginRes.data.token)
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/");
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
            console.log(err)
        }
    };


    return (
        <div>
            <div className="section section-signup page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mx-auto">
                            <div className="card card-login">
                                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="card-header card-header-primary text-center">
                                        <h4 className="card-title">Log In</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="material-icons">mail</i>
                                                </span>
                                            </div>
                                            <input type="email" className="form-control" placeholder="Email"
                                                name="email" ref={register} />
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="material-icons">lock_outline</i>
                                                </span>
                                            </div>
                                            <input type="password" className="form-control" placeholder="Password"
                                                name="password" ref={register} />
                                        </div>
                                    </div>
                                    <div className="footer text-center p-4 ">
                                        <input type='submit' className="btn btn-primary btn-block btn-round" value='Log In' />
                                    </div>


                                    {error &&

                                        < div className="alert alert-danger rounded mx-2">
                                            <div className="container">
                                                <div className="alert-icon">
                                                    <i className="material-icons">error_outline</i>
                                                </div>
                                                <button type="button" className="close" onClick={() => { setError("") }} >
                                                    <span aria-hidden="true"><i className="material-icons">clear</i></span>
                                                </button>
                                                <b>{error}</b>
                                                <br />
                                            </div>
                                        </div>

                                    }


                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
