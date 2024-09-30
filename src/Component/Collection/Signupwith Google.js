import { auth, provider } from "../Collection/Config";
import { signInWithPopup } from "firebase/auth";
import React, { useEffect, useState } from "react";
import Google from "../../Assets/g-logo.png";
// import Home from "./Home";

const SignupwithGoogle = () => {
  const [value, setValue] = useState("");
  const handleClick = () => {
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
        console.log("Email saved:", data.user.email);
      })
      .catch((error) => {
        console.error("Error during sign-in:", error);
      });
  };
  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    if (storedEmail) {
      setValue(storedEmail);
    }
    console.log(storedEmail);
  }, []);

  return (
    <div>
      {/* {value? <Home/>: */}
      <button className="Google-btn" onClick={handleClick}>
        <img className="Google-logo" src={Google} alt="" />
        Or sign in with Google
      </button>
      {/* } */}
    </div>
  );
};

export default SignupwithGoogle;
