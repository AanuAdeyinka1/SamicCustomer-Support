import { Head, Link } from '@inertiajs/react';
import logo from '@/assets/images/logo.svg';
export default function Welcome({ auth }) {
   

    return (
        <>
            <Head title="Welcome" />
            <div className="bg-gray-50 text-black/50 dark:bg-gray-100 dark:text-white/50">
                
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-[#FF2D20] selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-4xl rounded-xl shadow-2xl">
                        <main className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex flex-row lg:col-start-1 lg:justify-center p-40 bg-green-500 border-l-gray-200 w-full">
                              
                                <h1 className='text-white font-extrabold text-3xl'>Samic Customer Support</h1>
                                
                            </div>
                            
                            <div className='ml-10 w-full'>
                                <img src={logo} alt='logo' className='mt-10 flex m-auto items-center justify-center'/>
                                
                                <h1 className='text-black font-extrabold text-3xl'>Welcome to Samic</h1>
                                <p className='text-black/50 font-semibold text-lg'>We are here to help you with your queries and issues.</p>
                                <p className='text-black/50 font-semibold text-lg'>Please login or register to continue.</p>
                               
                                 <nav className="-mx-3 flex flex-col flex-1 justify-center items-center m-auto p-40 gap-2 px-3 lg:col-start-2 lg:flex-row lg:justify-end lg:gap-0">
                                 
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                                    >
                                        Dashboard
                                    </Link>
                                ) : (
                                    <div className="flex flex-row gap-2 ml-10 mt-10">
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-black dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Log in
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-black dark:hover:text-white/80 dark:focus-visible:ring-white"
                                        >
                                            Register
                                        </Link>
                                    </div>
                                )}
                            </nav>
                            </div>
                           
                        </main>

                     

                       
                    </div>
                </div>
            </div>
        </>
    );
}
