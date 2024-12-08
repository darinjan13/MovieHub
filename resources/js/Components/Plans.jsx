// PricingPlans.jsx

import React from 'react';

const Plans = ({ plans, prices }) => {
    if (!plans) return null;

    return (
        <section className="bg-gradient-to-b from-black to-black dark:text-white py-20">
            <h1 className='text-center text-2xl font-bold mb-2'>Our plans and pricing</h1>
            <h1 className='text-center text-2xl font-bold mb-10 text-gray-400'>Choose between our Basic Plan or our Premium Plan with up to 4K video quality for selected content.</h1>
            <div className="container mx-auto p-6 overflow-x-auto">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th></th>
                            {plans?.map((plan, index) => (
                                <th key={index} scope="col">
                                    <h2 className="px-2 text-lg font-medium">{plan?.plan_name}</h2>
                                    <p className="mb-3">
                                        <span className="font-medium dark:divide-gray-300">${prices[index]}/mo</span>
                                    </p>
                                </th>
                            ))}

                        </tr>
                    </thead>
                    <tbody className="space-y-6 text-center dark:divide-gray-300">
                        <tr>
                            <th scope="row" className="text-left">
                                <h3 className="py-3">Max Profiles</h3>
                            </th>
                            {plans?.map((plan, index) => (
                                <td key={index}>{plan?.max_profiles} Profiles</td>
                            ))}
                        </tr>
                        <tr>
                            <th scope="row" className="text-left">
                                <h3 className="py-3">On Phone/Tablet/Laptop/TV</h3>
                            </th>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mx-auto dark:text-white">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mx-auto dark:text-white">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-left">
                                <h3 className="py-3">HD Streaming</h3>
                            </th>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mx-auto dark:text-white">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mx-auto dark:text-white">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <th scope="row" className="text-left">
                                <h3 className="py-3">4K Streaming</h3>
                            </th>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 mx-auto dark:text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>

                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mx-auto dark:text-white">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </td>
                        </tr>

                        <tr>
                            <th scope="row" className="text-left">
                                <h3 className="py-3">Offline Viewing</h3>
                            </th>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-label="Not Included" className="w-5 h-5 mx-auto dark:text-gray-400">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mx-auto dark:text-white">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                                </svg>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </section>

    );
};

export default Plans;
