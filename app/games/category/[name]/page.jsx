"use client";
import { BASE_URL } from "@/api/BaseConfig";
import Footer from "@/components/Footer";
import GameDetail from "@/components/GameDetail";
import Header from "@/components/Header";
import Heading from "@/components/Heading";
import Login from "@/components/Login";
import Newsletter from "@/components/Newsletter";

import SignUp from "@/components/SignUp";
import SocialMedia from "@/components/SocialMedia";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const CategoryGames = () => {
  const { name } = useParams();
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);
  const [categoryGames, setCategoryGames] = useState([]);
  const getCategoryGames = (name) => {
    fetch(BASE_URL + `Category/name/${name}`)
      .then((c) => c.json())
      .then((p) => setCategoryGames(p.data.games));
  };

  useEffect(() => {
    getCategoryGames(name);
  }, [name]);

  const decodedName = decodeURIComponent(name);

  return (
    <>
      <Header />
      <Heading name={`${decodedName} games`} />
      <section className="main">
        <div className="games min-[1200px]:max-w-[1140px] max-w-full mx-auto px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px] py-[80px]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {[...categoryGames]
              ?.sort((a, b) => (a.dateCreated > b.dateCreated ? 1 : -1))
              .map((g) => (
                <GameDetail {...g} />
              ))}
          </div>
        </div>
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

export default CategoryGames;
