import { Inertia } from '@inertiajs/inertia';
import { useState } from 'react';
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Description } from '@headlessui/react';

export default function Create({ isOpen, onClose, movie }) {
    const [profileName, setProfileName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        Inertia.post('/profiles', { profile_name: profileName });
    };

    return (
        <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 flex w-screen items-center justify-center p-4 transition duration-300 ease-out data-[closed]:opacity-0 z-10">
            <DialogBackdrop className="absolute inset-0 bg-black/30" />

            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <DialogPanel className="max-w-lg bg-gray-700 p-12 text-white rounded-2xl">
                    <DialogTitle className="font-bold text-2xl text-center">Create new Profile</DialogTitle>
                    <div className="container mx-auto p-4 sm:p-8">
                        <div className="max-w-xl mx-auto bg-gray-800 p-6 rounded-lg shadow-md">
                            <form onSubmit={handleSubmit} className='flex flex-col'>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-300">
                                        Profile Name
                                    </label>
                                    <input
                                        type="text"
                                        className="mt-1 block w-full px-4 py-2 border text-black border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#78B3CE] focus:border-[#C9E6F0]"
                                        value={profileName}
                                        onChange={(e) => setProfileName(e.target.value)}
                                        required
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full sm:w-auto mt-4 bg-[#78B3CE] hover:bg-[#C9E6F0] text-black py-2 px-6 rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Create Profile
                                </button>
                            </form>
                        </div>
                    </div>
                </DialogPanel>
            </div>
        </Dialog>

    );
}
