import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';

const Register = ({ email }) => {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: email || '',
        password: '',
        password_confirmation: ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('register'));
    };

    return (
        <>
            <Head title="Register" />
            <div className="bg-gray-900 min-h-screen flex items-center justify-center">
                <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
                    <form onSubmit={handleSubmit} className="flex flex-col text-center">
                        <h1 className="text-white text-lg font-bold mb-5">Create an Account</h1>
                        <div className="mb-4">
                            <input
                                type="text"
                                name="name"
                                className="w-full p-2 mb-4 text-white bg-gray-800 border border-gray-700 rounded"
                                placeholder="Name"
                                value={data.name}
                                onChange={(e) => setData('name', e.target.value)}
                                required
                            />
                            {errors.name && <div className="mt-2 text-red-500">{errors.name}</div>}
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                name="email"
                                className="w-full p-2 mb-4 text-white bg-gray-800 border border-gray-700 rounded"
                                placeholder="Email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                required
                            />
                            {errors.email && <div className="mt-2 text-red-500">{errors.email}</div>}
                        </div>

                        <div className="mb-4">
                            <input
                                type="password"
                                name="password"
                                className="w-full p-2 mb-4 text-white bg-gray-800 border border-gray-700 rounded"
                                placeholder="Password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                required
                            />
                            {errors.password && <div className="mt-2 text-red-500">{errors.password}</div>}
                        </div>

                        <div className="mb-4">
                            <input
                                type="password"
                                name="password_confirmation"
                                className="w-full p-2 mb-4 text-white bg-gray-800 border border-gray-700 rounded"
                                placeholder="Confirm Password"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                required
                            />
                            {errors.password_confirmation && (
                                <div className="mt-2 text-red-500">{errors.password_confirmation}</div>
                            )}
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-[#78B3CE] text-black font-bold py-2 rounded hover:bg-[#C9E6F0] transition duration-300"
                            disabled={processing}
                        >
                            {processing ? 'Signing up...' : 'Sign Up'}
                        </button>
                    </form>

                    <p className="mt-4 text-white text-center">
                        Already have an account? <a href="/login" className="underline">Log in.</a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Register;
