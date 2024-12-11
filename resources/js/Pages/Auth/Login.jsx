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
