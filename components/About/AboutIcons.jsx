import React from "react";
import { FaGamepad, FaRegLifeRing, FaRocket } from "react-icons/fa6";

const AboutIcons = () => {
  const icons = [
    {
      icon: <FaGamepad className="text-yel text-[55px]" />,
      title: "best games",
      description:
        "Lorem lorem lorem cectetur provident voluptates non quam, voluptate alias, atque deleniti ipsam cum voluptatibus istesunt quasi repellat delectus?",
    },
    {
      icon: <FaRegLifeRing className="text-yel text-[55px]" />,
      title: "support",
      description:
        "Lorem lorem lorem cectetur provident voluptates non quam, voluptate alias, atque deleniti ipsam cum voluptatibus istesunt quasi repellat delectus?",
    },
    {
      icon: <FaRocket className="text-yel text-[55px]" />,
      title: "mobile apps",
      description:
        "Lorem lorem lorem cectetur provident voluptates non quam, voluptate alias, atque deleniti ipsam cum voluptatibus istesunt quasi repellat delectus?",
    },
  ];
  return (
    <div className="circles grid grid-cols-1 md:grid-cols-3 my-[60px] gap-8">
      {icons.map((icon, index) => (
        <div className="circle flex flex-col items-center" key={index}>
          <div className="border-yel border-[2.5px] rounded-full w-[145px] h-[145px] flex justify-center items-center mb-[15px]">
            {icon.icon}
          </div>
          <div className="title uppercase text-yel text-[24px] font-black mb-[15px]">
            {icon.title}
          </div>
          <p className="text-center text-[14px]">{icon.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutIcons;
