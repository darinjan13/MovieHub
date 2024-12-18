import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import Plans from '@/Components/Plans';

const Home = ({ plans }) => {
    const user = usePage().props.auth.user;

    const prices = [29.99, 99.99]

    const [email, setEmail] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email) {
            Inertia.get('/login', { email });
        }
    };


    return (
        <>
            <Head title='Welcome' />
            <div className="bg-cover bg-center" style={{ backgroundImage: `url('/assets/images/home-background.jpg')` }} >
                <div className="h-full w-full bg-gradient-to-b from-black via-transparent to-black">
                    <nav className="flex flex-row justify-between">
                        <img className="h-10 xs:h-5 sm:h-10 my-6 xs:mx-5 sm:mx-16" src="/assets/images/logo.png" alt="Logo" />
                        {!user ? (
                            <button onClick={() => Inertia.get('/login')} className="bg-[#78B3CE] hover:bg-[#C9E6F0] rounded-md text-white px-3 xs:h-10 my-6 xs:mx-5">Sign In</button>
                        ) : (
                            <button onClick={() => Inertia.post('logout')} className="bg-[#e50914] rounded-md text-white px-3 xs:h-10 my-6 xs:mx-5">Sign out</button>
                        )}
                    </nav>

                    <div className="grid justify-items-center content-center">
                        <div className="text-center">
                            <h1 className="text-white text-5xl font-bold my-[1rem] xs:text-3xl sm:text-5xl">
                                <img className="h-full w-full" src="/assets/images/logo.png" alt="Logo" />
                                MovieHub
                            </h1>
                            <h2 className="text-white text-2xl xs:text-lg sm:text-2xl mx-auto">
                                Watch anywhere. Cancel anytime.
                            </h2>
                        </div>

                        <div className="text-center mt-8 xs:my-3 sm:mt-8 xs:px-10 sm:px-0">
                            <h3 className="text-white text-2xl px-auto">
                                Plans start at $29*/month. Learn more about our plans and pricing below.
                            </h3>
                        </div>

                        {!user ? (
                            <form className="flex  flex-wrap justify-center items-center w-full mb-36" onSubmit={handleSubmit}>
                                <input
                                    type="email"
                                    name="email"
                                    className="py-4 w-2/5 xs:w-full sm:w-2/5 xs:mx-5 sm:mx-0 px-4 text-black"
                                    placeholder="Email Address"
                                    onChange={(e) => { setEmail(e.target.value) }}
                                    required
                                />
                                <button
                                    type="submit"
                                    className="bg-[#78B3CE] hover:bg-[#C9E6F0] sm:h-full text-black px-4 xs:py-2 sm:py-4 xs:my-5 sm:my-0 xs:mx-auto sm:mx-0"
                                >
                                    Get Started &gt;
                                </button>
                            </form>
                        ) : (
                            <button className="bg-[#78B3CE] hover:bg-[#C9E6F0] sm:h-full text-black px-4 xs:py-2 sm:py-4 xs:my-5 sm:my-0 xs:mx-auto sm:mx-0" onClick={() => Inertia.get('/subscription/plans')}>Finish sign up</button>
                        )}
                    </div>
                </div>
            </div >
            <Plans plans={plans} prices={prices} />
        </>
    );
};

export default Home;
