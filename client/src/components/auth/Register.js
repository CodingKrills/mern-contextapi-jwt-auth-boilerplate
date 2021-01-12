import React, { useState, useContext } from 'react'
import { useHistory } from "react-router-dom";
//import UserContext from "../../context/userContext";
import axios from "axios";
import { useForm } from "react-hook-form";

export default function Register() {

    const history = useHistory();

    // const [password, setPassword] = useState();
    // const [passwordCheck, setPasswordCheck] = useState();
    const [error, setError] = useState("");


    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = async data => {

        try {
            await axios.post('http://localhost:5000/users/register',
                {
                    email: data.email,
                    password: data.password,
                    passwordCheck: data.passwordCheck,
                    displayName: data.displayName
                }
            )
            const loginRes = await axios.post("http://localhost:5000/users/login", {
                email: data.email,
                password: data.password
            });
            console.log(loginRes.data.token)
            localStorage.setItem("auth-token", loginRes.data.token);
            history.push("/");
        } catch (err) {
            err.response.data.msg && setError(err.response.data.msg);
            console.log(err)
        }
    };

    // const clearError = async () => {
    //     setError("")
    // }

    // const [email, setEmail] = useState();
    // const [password, setPassword] = useState();
    // const [passwordCheck, setPasswordCheck] = useState();
    // const [displayName, setDisplayName] = useState();

    // const { setUserData } = useContext(UserContext);
    // const history = useHistory();

    // const submit = async (e) => {
    //     e.preventDefault();

    //     try {
    //         const newUser = { email, password, passwordCheck, displayName };
    //         await axios.post("http://localhost:5000/users/register", newUser);
    //         const loginRes = await axios.post("http://localhost:5000/users/login", {
    //             email,
    //             password,
    //         });
    //         setUserData({
    //             token: loginRes.data.token,
    //             user: loginRes.data.user,
    //         });
    //         localStorage.setItem("auth-token", loginRes.data.token);
    //         history.push("/");
    //     } catch (err) {
    //         console.log(err)
    //     }
    // };


    return (
        <div>
            <div className="section section-signup page-header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mx-auto">
                            <div className="card card-login">
                                <form className="form" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="card-header card-header-primary text-center">
                                        <h4 className="card-title">Register</h4>
                                    </div>
                                    <div className="card-body">
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="material-icons">mail</i>
                                                </span>
                                            </div>
                                            <input type="email" className="form-control" placeholder="Email" type="email"
                                                name="email" ref={register} />
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="material-icons">lock_outline</i>
                                                </span>
                                            </div>
                                            <input type="password" className="form-control" placeholder="Password" type="password"
                                                name="password" ref={register} />
                                        </div>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="material-icons">lock_outline</i>
                                                </span>
                                            </div>
                                            <input type="password" className="form-control" placeholder="Re Enter Password" placeholder="Verify password"
                                                name="passwordCheck" ref={register} />
                                        </div>

                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text">
                                                    <i className="material-icons">lock_outline</i>
                                                </span>
                                            </div>
                                            <input className="form-control" placeholder="Display Name" type="text"
                                                name="displayName" ref={register} />
                                        </div>

                                    </div>
                                    <div className="footer text-center p-4 ">
                                        <input type="submit" value="Register" className="btn btn-primary btn-block btn-round" />
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
        </div >
    )
}
