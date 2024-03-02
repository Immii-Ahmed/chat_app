import React from "react";
import Profile from '../../assets/images/profile.jpg';
import CommentIcon from '../../assets/images/comment.svg';
import LeftArrow from '../../assets/images/left-arrow.svg'
import RightArrow from '../../assets/images/right-arrow.svg';

const SliderBox = () => {
  return (
    <>
      <div className="flex items-center justify-between p-5 px-10">
        <div className="leftArrow">
          <img className="h-8 w-auto" src={LeftArrow} alt="Left Arrow" />
        </div>
        <div className="flex overflow-hidden justify-evenly items-center w-[80%]">
          <div className="flex items-center justify-between border rounded-full p-4 px-10 w-[30%]">
            <div className="flex items-center">
              <div className="img">
                <img
                  src={Profile}
                  alt="Avatar Icon"
                  className=" h-10 w-10 rounded-full"
                />
              </div>
              <div className="mx-10">
                <h1 className="font-bold">Imran Ahmed</h1>

                <ul class="list-disc text-green-500">
                  <li>Online Now</li>
                </ul>
              </div>
            </div>
            <div className="msg">
              <img
                src={CommentIcon}
                alt="message icon"
                className="w-10 h-10"
              />
            </div>
          </div>
          <div className="flex items-center justify-between border rounded-full p-4 px-10 w-[30%]">
            <div className="flex items-center">
              <div className="img">
                <img
                  src={Profile}
                  alt="Avatar Icon"
                  className=" h-10 w-10 rounded-full"
                />
              </div>
              <div className="mx-10">
                <h1 className="font-bold">Imran Ahmed</h1>

                <ul class="list-disc text-green-500">
                  <li>Online Now</li>
                </ul>
              </div>
            </div>
            <div className="msg">
              <img
                src={CommentIcon}
                alt="message icon"
                className="w-10 h-10"
              />
            </div>
          </div>
          <div className="flex items-center justify-between border rounded-full p-4 px-10 w-[30%]">
            <div className="flex items-center">
              <div className="img">
                <img
                  src={Profile}
                  alt="Avatar Icon"
                  className=" h-10 w-10 rounded-full"
                />
              </div>
              <div className="mx-10">
                <h1 className="font-bold">Imran Ahmed</h1>

                <ul class="list-disc text-green-500">
                  <li>Online Now</li>
                </ul>
              </div>
            </div>
            <div className="msg">
              <img
                src={CommentIcon}
                alt="message icon"
                className="w-10 h-10"
              />
            </div>
          </div>
        </div>
        <div className="rightArrow">
          <img
            className="h-8 w-auto"
            src={RightArrow}
            alt="Right Arrow"
          />
        </div>
      </div>
    </>
  );
};

export default SliderBox;
