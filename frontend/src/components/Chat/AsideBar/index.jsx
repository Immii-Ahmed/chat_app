import React from "react";
import MessageWhite from '../../../assets/images/messageWhite.svg';
import Bell from '../../../assets/images/bell.svg';
import Envelope from '../../../assets/images/envelope.svg';
import HomeIcon from '../../../assets/images/home.svg';
import Profile from '../../../assets/images/profile.jpg';

const AsideBar = () => {
  return (
    <>
      <div className="flex justify-between items-center flex-col h-full bg-black border rounded-md py-4">
          <button className="bg-white text-black p-2 rounded-md mt-5"><a href="##" className="font-semibold">Dashboard</a></button>
        <div className="h-1/3 flex flex-col justify-evenly items-center">
          <img src={MessageWhite} alt="message icon" className="w-8 h-8 hover:cursor-pointer transform hover:scale-110 transition-transform duration-300" />
          <img src={Bell} alt="message icon" className="w-8 h-8 hover:cursor-pointer transform hover:scale-110 transition-transform duration-300" />
          <img src={Envelope} alt="envelope.svg" className="w-8 h-8 hover:cursor-pointer transform hover:scale-110 transition-transform duration-300" />
          <img src={HomeIcon} alt="Home.svg" className="w-8 h-8 hover:cursor-pointer transform hover:scale-110 transition-transform duration-300" />
        </div>
        <div className="lastImageIcons">
          <img className="h-12 w-12 rounded-full" src={Profile} alt="Profile Image" />
        </div>
      </div>
    </>
  );
};

export default AsideBar;
