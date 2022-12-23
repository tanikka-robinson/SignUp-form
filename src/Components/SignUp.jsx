import React, { useState } from "react";
import { SignUpView } from "./SignUpView";

const SignUp = () => {
  const [userInfo, setUserInfo] = useState({
    email: "",
    name: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setUserInfo((userInfo) => ({
      ...userInfo,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const userSignUp = userInfo;
    const validate_Email =
      /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
    const validate_Password =
      /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/;
    if (userSignUp.email.length == 0) {
      alert("Input your email");
      return;
    }
    if (userSignUp.name.length == 0) {
      alert("Input your name");
      return;
    }
    if (userSignUp.password.length == 0) {
      alert("Input your password");
      return;
    }
    if (!validate_Email.exec(userSignUp.email)) {
      alert("Validate Your Email Address");
      return;
    }
    if (!validate_Password.exec(userSignUp.password)) {
      alert("Validate your password");
      return;
    }
    if (userInfo.password.localeCompare(userInfo.confirmPassword)) {
      alert("Your password doesn't match");
      return;
    }
    alert("SignUp successfully!");
  };
  return (
    <div>
      <SignUpView
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default SignUp;
