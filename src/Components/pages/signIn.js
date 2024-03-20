import React, { useRef } from "react";
import styles from "../../Styles/signIn.module.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/authContext";

export default function SignIn() {
  // useRef is used to create references to DOM elements
  const emailRef = useRef(); // Reference to email input field
  const passwordRef = useRef(); // Reference to password input field
  const navigate = useNavigate(); // Hook provided by react-router-dom for navigation
  const { signIn } = useAuthValue(); // Custom hook to access authentication context

  // Function to handle form submission
  async function handleSubmit(e) {
    e.preventDefault(); // Prevents default form submission behavior

    // Extracting email and password from input fields
    const data = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    // Attempting to sign in using the provided credentials
    const status = await signIn(data); // signIn is an asynchronous function returning a status

    // Redirecting the user based on the sign-in status
    status ? navigate("/") : navigate("/signIn");
  }

  // JSX returned by the component
  return (
    <div className={styles.container}>
      <div className={styles.inputForm}>
        <h1>SignIn</h1>

        {/* Form for signing in */}
        <form action="" onSubmit={handleSubmit}>
          {/* Input field for email */}
          <input type="email" placeholder="Enter Email..." required ref={emailRef} />
          {/* Input field for password */}
          <input type="password" placeholder="Enter Password.." required ref={passwordRef} />
          {/* Button to submit the form */}
          <button>Submit</button>
        </form>

        <br />

        {/* Option to navigate to sign-up page */}
        <span>or</span>
        <NavLink to="/signup">Create New Account</NavLink>
      </div>
    </div>
  );
}
