import React from "react";
import { useState } from "react";
import "./login.scss";
import Figma from "../../Assets/figma.png";
import Container from "./Container";
import LeftImg from "../../Assets/background.png";
import Logo from "../../Assets/img1.png";
import classNames from "classnames";
import SignupwithGoogle from "./Signupwith Google";

const Login = () => {
  const [toggleActive, setToggleActive] = useState(false);

  const [formData, setFormData] = useState({
    login: "",
    password: "",
  });
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!formData.login || !formData.password) {
      alert("Email and password fields cannot be empty.");
      return;
    }

    const isValidEmail = formData.login.includes("@");
    if (!isValidEmail) {
      alert("Please enter a valid email address.");
      return;
    }

    if (formData.password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return;
    }
  };

  const inputHandler = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container>
      <div className="section">
        <div className="section-left">
          <img className="log" src={LeftImg} alt="" />
        </div>
        <div className="section-right">
          <React.Fragment>
            <img className="uilogo" src={Logo} alt="" />
            <h2 className="unicorn">UI Unicorn</h2>
            <h2 className="heading">Nice to see you again</h2>
            <form onSubmit={handleSubmit}>
              <div className="login">
                <label>Login</label>
                <input
                  name="login"
                  id="login"
                  type="text"
                  placeholder="Email or phone number"
                  value={formData.login}
                  onChange={inputHandler}
                />
              </div>

              <div className="password">
                <label>Password</label>
                <input
                  name="password"
                  id="password"
                  type="password"
                  placeholder="Enter Password"
                  value={formData.password}
                  onChange={inputHandler}
                />
              </div>

              <div
                className="toggleContainer"
                onClick={() => {
                  console.log("click triggered");
                  setToggleActive((p) => !p);
                }}
              >
                <div
                  className={classNames("toggle", { active: toggleActive })}
                ></div>
              </div>
              <p className="remember">Remember me</p>

              <div className="forgetpassword">
                <a className="links" href="/user/forgetpassword">
                  Forget password?
                </a>
              </div>
              <button type="submit">Sign Up</button>
              <div className="google">
                <SignupwithGoogle />
              </div>
              <p className="account">
                Dont have an account?
                <a href="/user/signup"> Sign up Now</a>
              </p>
              <img className="figma" src={Figma} alt="" />
              <a href="/">@uiunicorn</a>
              <p className="copyright">©Perfect LoginIn 2021</p>
            </form>
          </React.Fragment>
        </div>
      </div>
      <div className="backgroundLayer"></div>
    </Container>
  );
};

export default Login;
