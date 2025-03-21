import React from "react";
import { SignIn } from "@clerk/clerk-react";
import "../style/login.css";
import videoBg from "../assets/background.mp4";

const Login = () => {
    return (
        <div className="login-container">
            <video autoPlay loop muted className="video-background">
                <source src={videoBg} type="video/mp4" />
            </video>
            <div className="login-box">
                <SignIn />
            </div>
        </div>
    );
};

export default Login;
