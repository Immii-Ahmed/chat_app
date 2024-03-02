import React from 'react';
import Profile from '../../../assets/images/profile.jpg';
import More from '../../../assets/images/more.svg';
import Attach from '../../../assets/images/attach.svg'
import Voice from '../../../assets/images/voice.svg';
import Send from '../../../assets/images/send.svg';

const Messages = () => {
  return (
    <>
      <div className="pr-7 h-full flex flex-col">
        <div className="flex items-center justify-between border p-4 border-gray-100 w-full my-4 shadow-md rounded-2xl bg-white">
          <div className="flex w-[60%]">
            <div className="image">
              <img src={Profile} alt="profile image" className='rounded-full w-8 h-8' />
            </div>
            <div className="mx-6">
              <h1 className='font-bold'>Imran Ahmed</h1>
              <p className='text-sm'>Online</p>
            </div>
          </div>
          <div className="flex w-[40%]">
            <div className="">
              <button className='rounded-full border border-gray-200 py-2 px-4'>Profile</button>
              <button className='btn rounded-full bg-black text-white py-2 mx-4 px-6'>Call</button>
            </div>
            <div className="flex items-center border-l border-gray-300">
            <svg
                    class="w-4 h-4 text-gray-500 dark:text-gray-400 mx-4 hover:cursor-pointer"
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
                <img src={More} alt="see more icons" className='w-12 h-12 hover:cursor-pointer'/>
            </div>
          </div>
        </div>
        <div className="chats-middle bg-white py-6 rounded-2xl flex-grow">
          <div className="flex justify-center items-center">
          <button className='border border-gray-300 rounded-full py-2 px-6 font-semibold'>10 fab 2024</button>
          </div>
          <div className="messages">
            <div className="flex flex-col justify-end items-end mx-6">
              <div className="bg-black text-white p-4 rounded-tl-full rounded-tr-full rounded-bl-full max-w-xs">
                <p>Hello!</p>
              </div>
              <p className='text-sm'>5:06 pm</p>
            </div>
            <div className="flex flex-col justify-end items-start mx-6">
            <div className="bg-gray-100 text-black p-4 rounded-tl-full rounded-tr-full rounded-br-full max-w-xs">
                <p>Hi!</p>
              </div>
              <p className='text-sm'>5:07 pm</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center my-4 pt-1 w-full">
          <div className="input w-[70%]">
          <form class="mx-auto w-full">
              <label
                for="default-search"
                class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
              >
                Search
              </label>
              <div class="relative">
              <div class="absolute inset-y-0 px-4 start-0 flex items-center hover:cursor-pointer">
                  <img src={Attach} alt="attachment icon" className='w-6 h-6' />
                </div>
                <input
                  type="search"
                  id="default-search"
                  class="block py-4 px-6 ps-10 text-sm text-gray-900 border border-gray-300
                  rounded-full outline-none dark:border-gray-300 dark:placeholder-gray-300 dark:text-white w-full focus:shadow-md"
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
          </div>
          <button><img src={Voice} alt="voice icon" className='w-10 h-10' /></button>
          <button className='bg-black rounded-full '><img src={Send} alt="send icon" className='w-10 h-10'/></button>
        </div>
    </div>
    </>
  )
}

export default Messages
