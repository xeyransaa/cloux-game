"use client";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Heading from "@/components/UI/Heading";
import Newsletter from "@/components/Layout/Newsletter";
import SocialMedia from "@/components/Layout/SocialMedia";
import React from "react";

const Checkout = () => {
  return (
    <>
      <Header />
      <Heading name="check out" />
      <section className="main"></section>
      <Newsletter />
      <SocialMedia />
      <Footer />
    </>
  );
};

export default Checkout;
