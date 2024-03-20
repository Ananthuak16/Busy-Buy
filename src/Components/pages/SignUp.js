import React, { useRef } from "react";
import styles from "../../Styles/signIn.module.css"
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/authContext";

export default function SignUp() {
    // useRef hooks to create references to DOM elements
    const nameRef = useRef(); // Reference to name input field
    const emailRef = useRef(); // Reference to email input field
    const passwordRef = useRef(); // Reference to password input field
    
    // Accessing createUser function from authentication context
    const { createUser } = useAuthValue(); 

    // Hook provided by react-router-dom for navigation
    const navigate = useNavigate();

    // Function to handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevents default form submission behavior

        // Extracting name, email, and password from input fields
        const data = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value
        };

        // Calling the createUser function with the provided data
        createUser(data);

        // Navigating to the sign-in page after successful sign-up
        navigate("/signin");
    }

    // JSX returned by the component
    return (
        <div className={styles.container}>
            <div className={styles.inputForm}>
                <h1>SignUp</h1>

                {/* Form for user sign-up */}
                <form action="" onSubmit={handleSubmit}>
                    {/* Input field for name */}
                    <input type="text" placeholder="name" required ref={nameRef} />
                    {/* Input field for email */}
                    <input type="email" placeholder="Enter Email..." required ref={emailRef} />
                    {/* Input field for password */}
                    <input type="password" placeholder="Enter Password.." required ref={passwordRef} />
                    {/* Button to submit the form */}
                    <button>Submit</button>
                </form>
            </div>
        </div>
    );
}
