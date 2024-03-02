import React from "react";
import Profile from '../../../assets/images/profile.jpg';
import AddIcon from '../../../assets/images/add.svg'

const CurrenConversation = () => {
  return (
    <>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-around border rounded-2xl p-4 border-gray-100 w-full my-4 shadow-md bg-white">
          <h2 className="font-bold">Chat</h2>
            <form class="max-w-md mx-auto">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
                <input
                  type="search"
                  id="default-search"
                  class="block w-full py-2 px-4 ps-10 text-sm text-gray-900 border border-gray-300
                  rounded-full outline-none dark:border-gray-300 dark:placeholder-gray-300 dark:text-white"
                style={{backroundColor:"#f6f6f6"}}  
                placeholder="Search"
                  required
                />
                <div class="absolute inset-y-0 px-4 end-0 flex items-center hover:cursor-pointer">
                  <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </div>
          </form>
          <div>
            <img src={AddIcon} alt="Add Icon" className="h-12 w-12 hover:cursor-pointer" />
          </div>
        </div>
        <div className="conversations flex-1 bg-white p-10 rounded-2xl">
          <div className="pinnedText">
            <h1>Pinned</h1>
          </div>
          <div className="flex w-full justify-between p-2 mt-8 border-b border-gray-300 pb-4 hover:shadow-md hover:bg-gray-50">
            <div className="flex">
              <img src={Profile} alt="User Avatar" className="h-12 w-12 rounded-full mr-2" />
            <div className="ml-2">
              <h1 className="text-xl font-semibold">Imran Ahmed</h1>
              <p className="text-sm">Have a good day!</p>
            </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-xs text-gray-300">10:20 Am</p>
              <span className="bg-orange-600 mt-1 rounded-full px-2 text-white">1</span>
            </div>
          </div>
          <div className="flex w-full justify-between p-2 mt-8 border-b border-gray-300 pb-4 hover:shadow-md hover:bg-gray-50">
            <div className="flex">
              <img src={Profile} alt="User Avatar" className="h-12 w-12 rounded-full mr-2" />
            <div className="ml-2">
              <h1 className="text-xl font-semibold">Rizwan Rajput</h1>
              <p className="text-sm">aray wah!</p>
            </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-xs text-gray-300">10:20 Am</p>
              <span className="bg-orange-600 mt-1 rounded-full px-2 text-white">3</span>
            </div>
          </div>
          <div className="flex w-full justify-between p-2 mt-8 border-b border-gray-300 pb-4 hover:shadow-md hover:bg-gray-50">
            <div className="flex">
              <img src={Profile} alt="User Avatar" className="h-12 w-12 rounded-full mr-2" />
            <div className="ml-2">
              <h1 className="text-xl font-semibold">Waheed Ali</h1>
              <p className="text-sm">naha k aaya!</p>
            </div>
            </div>
            <div className="flex flex-col justify-center items-center">
              <p className="text-xs text-gray-300">10:20 Am</p>
              <span className="bg-orange-600 mt-1 rounded-full px-2 text-white">1</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrenConversation;
