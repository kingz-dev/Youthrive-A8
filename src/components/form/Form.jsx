import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Form = () => {
  let [fullName, setFullname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [gender, setGender] = useState("male");
  let [terms, setTerms] = useState("");
  let [show, setShow] = useState('password');

  function handleSubmit(e) {
    e.preventDefault();
    let toDb = {
      fullName,
      email,
      password,
      gender,
      terms,
    };
    console.log(toDb);
  }

  return (
    <div align="center">
      <h2>Forms</h2>
      <form onSubmit={(e) => handleSubmit(e)}>
        <fieldset>
          <label htmlFor="fullName">Full Name</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            placeholder="John Doe"
            value={fullName}
            onChange={(e) => setFullname(e.target.value)}
            required
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="JohnDoe@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </fieldset>
        <fieldset>
          {/* <label htmlFor="password">Password</label> */}
          <label htmlFor='password'>Password | </label> 
          <span onClick={()=> setShow(show === 'password'?'text':'password')} > {show === 'password' ?'show':'hide'} </span> 
          <input
            type={show}
            name="password"
            id="password"
            placeholder="strong password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </fieldset>
        <fieldset>
          <span>Gender: </span>
          <label htmlFor="male">Male </label>
          <input
            onChange={(e) => setGender(e.target.value)}
            type="radio"
            value="male"
            name="gender"
            id="male"
            checked
          />
          <label htmlFor="female"> Female </label>
          <input
            onChange={(e) => setGender(e.target.value)}
            type="radio"
            value="female"
            name="gender"
            id="female"
          />
        </fieldset>
        <fieldset>
          <input
            value={terms}
            onChange={(e) => setTerms(e.target.checked)}
            type="checkbox"
            name="terms"
            id="terms"
            required
          />
          <label htmlFor="terms">
            {" "}
            By clicking you accept our <Link>Terms & Conditions</Link>
          </label>
        </fieldset>
        <fieldset>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default Form;
