import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div className='bg-white min-w-[440px] h-[460px] rounded-lg shadow-lg flex flex-col items-center justify-start'>
        <div className='w-[100%] h-[25%] flex justify-center items-center'>
          <div className='flex flex-col my-4 justify-center items-center w-[100%] h-[100%]'>
            <svg className='mb-4' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
              <path fill="#03A9F4" d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"></path>
            </svg>
            <p className='w-[100%] font-bold text-xl flex font-sans justify-center items-center'>Sign In to Twitter</p>
          </div>
        </div>
        <div className=' w-[100%] h-[70%] flex flex-col items-center justify-start'>
          <div className='container gap-3 p-0 m-0 box-border w-[100%] h-[30%] flex flex-col items-center justify-start'>
            <button className='google cursor-pointer bg-white border-1 gap-3 border-gray-400 rounded-2xl w-[55%] h-[35px] flex flex-row items-center justify-center bg-white'>
              <svg className='' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="18" height="18" viewBox="0 0 48 48">
                <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
              </svg>
              <p className='text-[12px] mb-0 flex justify-center items-center'>Sign In with Google</p>
            </button>
            <button className='mac cursor-pointer border-1 border-gray-400 bg-white rounded-2xl w-[55%] h-[35px] flex flex-row items-center justify-start'>
              <svg className='ml-13' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 30 30">
                <path d="M25.565,9.785c-0.123,0.077-3.051,1.702-3.051,5.305c0.138,4.109,3.695,5.55,3.756,5.55 c-0.061,0.077-0.537,1.963-1.947,3.94C23.204,26.283,21.962,28,20.076,28c-1.794,0-2.438-1.135-4.508-1.135 c-2.223,0-2.852,1.135-4.554,1.135c-1.886,0-3.22-1.809-4.4-3.496c-1.533-2.208-2.836-5.673-2.882-9 c-0.031-1.763,0.307-3.496,1.165-4.968c1.211-2.055,3.373-3.45,5.734-3.496c1.809-0.061,3.419,1.242,4.523,1.242 c1.058,0,3.036-1.242,5.274-1.242C21.394,7.041,23.97,7.332,25.565,9.785z M15.001,6.688c-0.322-1.61,0.567-3.22,1.395-4.247 c1.058-1.242,2.729-2.085,4.17-2.085c0.092,1.61-0.491,3.189-1.533,4.339C18.098,5.937,16.488,6.872,15.001,6.688z"></path>
              </svg>
              <p className='ml-2 text-[12px] flex justify-center items-center'>Sign In with Mac</p>
            </button>
          </div>
          <div className='w-[100%] mt-2 flex flex-row justify-center items-center h-[10%]'>
            <hr className='w-[22%] border-gray-300' /> <p className='mx-3 text-gray-500 w-[5%] text-[12px] flex justify-center items-center'>Or</p> <hr className='w-[22%] border-gray-300' />
          </div>
          <div className='gap-4 w-[100%] h-[50%] flex flex-col items-center justify-start'>
            <input className='w-[55%] outline-gray-400 border-gray-400 text-[12px] pl-2 rounded h-[40%] border-1' placeholder='Phone email or username' type="text" name="" id="" />
            <button className='w-[55%] text-[10px] rounded-2xl bg-black text-white h-[30%]' type="submit">Next</button>
            <button className='w-[55%] text-[12px] rounded-2xl  border-gray-400 h-[30%] border-1' type="submit">Forget Password</button>
          </div>
        </div>
        <div className='w-[100%] h-[25%] flex justify-center pt-5 text-[12px]'>
          <p className='text-gray-400'>Don't Have an account <a className='text-blue-400 font-bold cursor-pointer'>Sign Up</a></p>
        </div>
      </div>
    </>
  )
}

export default App
