import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center my-16">
        <div className="taglinetext border my-10 border-light-green-500 rounded-full py-2 px-10 text-green-500">
          <h5>+10K Active User in the World</h5>
        </div>
        <div className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-3 my-5 flex items-center justify-center">
          <h1 className="text-center font-bold leading-tight">
            You Can{" "}
            <span className="bg-gradient-to-r from-green-900 to-orange-500 text-transparent bg-clip-text">
              Chat
            </span>{" "}
            With Other <br />
            People Heres
            <button
              type="button"
              className="bg-gradient-to-r mx-6 from-orange-500 to-green-900 text-white px-6 md:px-10 lg:px-16 xl:px-15 py-2 md:py-6 lg:py-8 xl:py-8 rounded-full text-lg md:text-xl lg:text-2xl xl:text-3xl"
            ></button>
          </h1>
        </div>
        <div className="text-center md:text-left lg:text-center xl:text-left">
          <div className="flex flex-col items-center justify-center">
            <p className="text-base md:text-lg lg:text-base xl:text-lg">
              Are you <b>alone?</b> Do you wanna chat with someone? Great!
            </p>
            <p className="text-base md:text-lg lg:text-base xl:text-lg">
              Let's find some <b>friends.</b>
            </p>
          </div>
        </div>
        <div className="btns flex items-center">
          <button
            type="button"
            className="bg-black text-white hover:bg-gray-800 rounded-full px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 transition duration-300 hover:text-gray-300 m-2 md:m-5"
          >
            Explore
          </button>
          <button
            type="button"
            className="bg-gray-100 text-black hover:bg-white rounded-full px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 transition duration-300 m-2 md:m-5"
          >
            Communities
          </button>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
