import React, { Component } from "react";
import { auth } from "../../config/firebase.js"; // Import your Firebase authentication instance
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"; // Import the sign-up function
import { useNavigate } from "react-router-dom";

class SignUp extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    errors: {
      // Initialize errors with empty strings
      email: "",
      password: "",
      firstName: "",
      lastName: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  registerUserToMongo = async (name, email, uid) => {
    try {
      const response = await fetch(`http://localhost:3001/signup`, {
        method: "POST",
        body: JSON.stringify({ name, email, uid }),
        headers: { "Content-type": "application/json" },
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data = await response.json(); // Get response data if needed
      console.log("User added to MongoDB!", data);
    } catch (err) {
      console.error(err.message);
      // Handle error, e.g., display error message to user
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password, firstName, lastName } = this.state;
    const errors = {}; // Initialize an empty errors object

    // Validation logic on button click
    if (email.trim() === "") errors.email = "Can't be empty";
    if (password.trim() === "") errors.password = "Can't be empty";
    if (firstName.trim() === "") errors.firstName = "Can't be empty";
    if (lastName.trim() === "") errors.lastName = "Can't be empty";

    this.setState({ errors }); // Update the state with any errors
    console.log("Triggered");
    if (Object.keys(errors).length === 0) {
      try {
        // Create user with Firebase
        const response = await createUserWithEmailAndPassword(
          auth,
          email,
          password,
        );
        const user = response.user;
        await updateProfile(response.user, {
          displayName: firstName + lastName,
        });

        console.log(user);
        await this.registerUserToMongo(user.displayName, user.email, user.uid);
        this.props.navigate("/dashboard");
        this.setState({ email: "", password: "", firstName: "", lastName: "" });

        console.log("User created successfully!");
      } catch (error) {
        // Handle errors (e.g., invalid email, weak password)
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(`Error creating user: ${errorMessage}`);

        console.error("Error creating user:", errorCode, errorMessage);
        // Display error messages to the user using an alert, toast, or in-line message.
      }
    }
  };

  render() {
    const { errors } = this.state;
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className="white">
          <h5 className="grey-text text-darken-3">Sign Up</h5>

          <div className="input-field">
            <label htmlFor="firstName" className="block text-gray-700">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              onChange={this.handleChange}
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-500"
            />
            {errors.firstName && (
              <p className="error-message text-red-500 text-sm mt-1">
                {errors.firstName}
              </p>
            )}
          </div>

          <div className="input-field">
            <label htmlFor="lastName">Last Name</label>
            <input type="text" id="lastName" onChange={this.handleChange} />
            {errors.lastName && ( // Check if errors.lastName exists
              <p className="error-message">{errors.lastName}</p>
            )}
          </div>

          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" onChange={this.handleChange} />
            {errors.email && ( // Check if errors.email exists
              <p className="error-message">{errors.email}</p>
            )}
          </div>

          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={this.handleChange} />
            {errors.password && ( // Check if errors.password exists
              <p className="error-message">{errors.password}</p>
            )}
          </div>

          <button type="submit" className="btn pink lighten-1 z-depth-0">
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
export default function SignUpWithNavigate() {
  const navigate = useNavigate();

  return <SignUp navigate={navigate} />;
}
