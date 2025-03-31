import React from "react";

const Heading = ({ name }) => {
  return (
    <section className="heading bg-[url(../public/img/about-image-e1516721671648-1780x450.jpg)] h-[270px] bg-center bg-cover relative before:absolute before:bg-black before:top-0 before:l-0 before:w-full before:h-full before:opacity-60">
      <div className="container relative z-10 uppercase min-[1200px]:max-w-[1140px] max-w-full mx-auto px-[1.154rem] md:px-[2.308rem] min-[1200px]:px-[15px] pt-[150px] text-white text-[40px] font-black">
        {name}
      </div>
    </section>
  );
};

export default Heading;
