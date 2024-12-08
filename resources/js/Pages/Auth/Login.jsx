// resources/js/Pages/Auth/Login.jsx

import { Head, useForm } from '@inertiajs/react';
import React from 'react';

const Login = ({ email }) => {
    const { data, setData, post, processing, errors } = useForm({
        email: email || '',
        password: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('login'));
    };
    // return (
    //     <div className="flex flex-col md:flex-row h-screen">
    //         {/* Left Panel */}
    //         <div className="md:w-1/2 bg-gradient-to-r from-pink-500 to-purple-500 flex items-center justify-center p-4 md:p-0" style={{
    //             backgroundImage: `url('/assets/images/login_background.jpg')`,
    //             backgroundPosition: 'center',
    //             backgroundSize: 'cover', // Optional: Ensures the image covers the div fully
    //             backgroundRepeat: 'no-repeat', // Optional: Prevents tiling of the image
    //         }} >
    //             <div className="text-white text-center">
    //                 <h1 className="text-4xl font-bold mb-4">Welcome to MovieHub!</h1>
    //                 <p className="text-lg">Enjoy your favorite movies and shows.</p>
    //             </div>
    //         </div>

    //         {/* Right Panel */}
    //         <div className="md:w-1/2 flex items-center justify-center p-4 md:p-0 bg-[#78B3CE]">
    //             <div className="w-full max-w-md">
    //                 <h2 className="text-3xl font-bold mb-6 text-black">Welcome to Movie Hub</h2>
    //                 <form>
    //                     <div className="mb-4">
    //                         <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
    //                             Email
    //                         </label>
    //                         <input
    //                             value={data.email}
    //                             onChange={(e) => setData('email', e.target.value)}
    //                             type="email"
    //                             name="email"
    //                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    //                             required
    //                         />
    //                         {errors.email && <div className="mt-2 text-red-500">{errors.email}</div>}
    //                     </div>
    //                     <div className="mb-6">
    //                         <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
    //                             Password
    //                         </label>
    //                         <input
    //                             value={data.password}
    //                             onChange={(e) => setData('password', e.target.value)}
    //                             type="password"
    //                             name="password"
    //                             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
    //                             required
    //                         />
    //                         {errors.password && (
    //                             <div className="mt-2 text-red-500">{errors.password}</div>
    //                         )}
    //                     </div>
    //                     <div className="flex items-center justify-between">
    //                         <button className="bg-[#C9E6F0] hover:bg-[#FBF8EF] text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
    //                             Login
    //                         </button>
    //                         <div className='flex flex-row space-x-1 items-center text-black'>
    //                             <h1>Dont have an Account yet? </h1>
    //                             <a className="inline-block align-baseline font-bold text-sm underline hover:text-[#FBF8EF]" href="#">
    //                                 Sign Up
    //                             </a>
    //                         </div>
    //                     </div>
    //                 </form>
    //             </div>
    //         </div>
    //     </div>
    // );
    return (
        <>
            <Head title='Login' />
            <div className="bg-gray-900 min-h-screen flex items-center justify-center">
                <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit} className="flex flex-col text-center">
                        <h1 className="text-white text-xl font-bold mb-5">Welcome to Movie Hub</h1>

                        <div className="mb-4">
                            <input
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                type="email"
                                name="email"
                                className="w-full p-2 mb-4 text-white bg-gray-800 border border-gray-700 rounded"
                                placeholder="Email"
                                required
                            />
                            {errors.email && <div className="mt-2 text-red-500">{errors.email}</div>}
                        </div>

                        <div className="mb-4">
                            <input
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                type="password"
                                name="password"
                                className="w-full p-2 mb-4 text-white bg-gray-800 border border-gray-700 rounded"
                                placeholder="Password"
                                required
                            />
                            {errors.password && (
                                <div className="mt-2 text-red-500">{errors.password}</div>
                            )}
                        </div>

                        <div className="flex items-center justify-between mt-4">
                            <button
                                type="submit"
                                className="w-full bg-[#78B3CE] text-black font-bold py-2 rounded hover:bg-[#C9E6F0] transition duration-300"
                                disabled={processing}
                            >
                                {processing ? 'Logging in...' : 'Log in'}
                            </button>
                        </div>

                        <p className="mt-4 text-white text-center">
                            No account?{' '}
                            <a href="/register" className="underline">
                                Register.
                            </a>
                        </p>
                    </form>
                </div>
            </div></>
    );
};

export default Login;
