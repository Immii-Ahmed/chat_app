import React from 'react'

const Signup = () => {
  return (
      <>
          <div className="h-full p-3 mt-20 flex justify-center items-center">
              <div className="flex flex-col justify-center items-center border rounded-2xl border-gray-200 p-10 py-20 shadow-md">
                  <h1 className='font-bold my-3'>Register Now</h1>
              <form action="##" className=''>
                  <div className="flex items-center my-6">
                      <label htmlFor="name" className='mr-6'>Name:</label>
                     <input type="text" name="name" id="name" className='border border-black px-4 rounded-md py-2' />
                  </div>
                  <div className="flex items-center my-6">
                      <label htmlFor="email" className='mr-6'>Email:</label>
                      <input type="email" name="email" id="email" className='border border-black px-4 rounded-md py-2' />
                  </div>
                  <div className="flex items-center my-6">
                      <label htmlFor="password" className='mr-6'>Password:</label>
                      <input type="text" name="password" id="password" className='border border-black px-4 rounded-md py-2' />
                  </div>
                  <div className="flex items-center my-6 mb-30">
                      <label htmlFor="Cpassword" className='mr-6'>Confrim Password:</label>
                      <input type="text" name="Cpassword" id="Cpassword" className='border border-black px-4 rounded-md py-2' />
                  </div>
                  <input type="submit" value="Signup" className='bg-black text-white py-2 px-4 rounded-md' />
                  <input type="reset" value="Clear" className='mx-6 bg-gray-200 border text-black py-2 px-4 rounded-md'/>
              </form>
                  
              </div>
      </div>
      </>
  )
}

export default Signup
