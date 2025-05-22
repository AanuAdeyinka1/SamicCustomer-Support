import React from 'react'
import { Link } from '@inertiajs/react';
import logo from '@/assets/images/logo.svg';


const NewDashboard = ({auth, issue ={}}) => {

const { title, description, status } = issue;


  return (
    
    <div className='p-10'> 
    <p>{title}</p>
    <p>{description}</p>
    <p>{status}</p>
      <div className=' flex bg-gray-50 text-black/50 dark:bg-gray-100 dark:text-white/50 mt-10 shadow-xl rounded-xl'>
        <div className='flex flex-col bg-green-500 p-40 rounded-tl-xl rounded-bl-xl w-200'>
        <img src={logo} alt='logo' className='mt-10 flex m-auto items-center justify-start'/>
        <h1 className='text-white font-extrabold text-3xl m-auto items-center justify-start'>Samic Support</h1>
      </div>
      <div className='p-40'>
        
        <h1 className=' font-extrabold text-2xl  text-green-500'>Thank you for reaching out to us</h1>
            <p className='text-black/50 font-semibold text-lg -ml-9 mt-5'>Your queries and issues are well received.</p>
            <p className='text-black/50 font-semibold text-lg -ml-9'>We are always here to serve.</p>

                               
         <nav className="">
                                 
                                {auth.user ? (
                                    
                                    <Link
                                        href={route('adminDashboard')}
                                        className="bg-green-400 flex justify-center mt-8 rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-gray-100 dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                     View your issues
                                    </Link>
                                ) : (
                                    <div className="flex flex-row gap-2 ml-10 mt-10">
                                        <Link
                                            href={route('login')}
                                            className="font-semibold text-xl rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-black dark:hover:text-green-500 dark:focus-visible:ring-green-500 ml-5 "
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className=" font-semibold text-xl rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-black dark:hover:text-green-500 dark:focus-visible:ring-green-500"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                )}
                            </nav>
      </div>
      
      </div>
      
    </div>
  )
}

export default NewDashboard;