"use client";
import { BASE_URL } from "@/api/BaseConfig";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import Login from "@/components/Login";
import Newsletter from "@/components/Newsletter";

import SignUp from "@/components/SignUp";
import SocialMedia from "@/components/SocialMedia";
import React, { useEffect, useRef, useState } from "react";
import {
  FaCircleCheck,
  FaEnvelope,
  FaFax,
  FaLocationDot,
  FaPhone,
  FaRegCircleCheck,
  FaXmark,
} from "react-icons/fa6";

const Checkout = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const ref = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [subject, setSubject] = useState("");

  const submitForm = (e) => {
    e.preventDefault();
    const data = {
      name,
      email,

      phoneNumber,
      subject,
      msg,
    };

    fetch(`${BASE_URL}Message`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((response) => {
      if (response.ok) {
        setShowAlert(true);
        setEmail("");
        setMsg("");
        setName("");
        setPhoneNumber("");
        setSubject("");
      } else {
        const errorData = response.json();
        // Handle unsuccessful registration
        console.error(errorData);
      }
    });
  };
  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowAlert(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
  }, []);
  return (
    <>
      <Header />
      <Heading name="check out" />
      <section className="main">
        
      </section>
      <Newsletter />
      <SocialMedia />
      <Footer />

      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          switchToSignUp={() => {
            setShowLogin(false);
            setShowSignUp(true);
          }}
        />
      )}
      {showSignUp && (
        <SignUp
          onClose={() => setShowSignUp(false)}
          switchToLogin={() => {
            setShowSignUp(false);
            setShowLogin(true);
          }}
        />
      )}
    </>
  );
};

export default Checkout;
