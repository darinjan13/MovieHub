import { useState } from 'react';
import { Inertia } from '@inertiajs/inertia';
import { Head } from '@inertiajs/react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import Create from '@/Pages/Profiles/Create';
import ProfileAvatar from '@/Components/ProfileAvatar';

export default function Profiles({ profiles, subscribed }) {

    const [isModalOpen, setIsModalOpen] = useState(false); // State for controlling modal visibility
    let [isOpen, setIsOpen] = useState(false)

    const profileDashboard = (profileId) => {
        Inertia.visit(`/dashboard/${profileId}`);
    }

    const openModal = () => {
        setIsOpen(true); // Open the modal
    };

    return (
        <AuthenticatedLayout subscribed={subscribed} profilePage={true}>
            <Head title='User Profiles' />
            <div className="bg-gray-800 text-white min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-8">
                <h1 className="text-3xl sm:text-4xl md:text-5xl mb-8">Who's watching MovieHub?</h1>
                <div className="flex flex-wrap justify-center gap-8">
                    {/* Profile Avatars */}
                    {profiles?.map(profile => {
                        return <ProfileAvatar key={profile.profile_id} profile={profile} profileDashboard={() => profileDashboard(profile.profile_id)} />;
                    })}
                    <div className="flex flex-col items-center">
                        <div className="w-24 h-24 bg-gray-800 hover:bg-[#C9E6F0] text-black rounded-full ">
                            <button className='h-full w-full flex items-center justify-center' onClick={openModal}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal */}
            <Create isOpen={isOpen} onClose={() => setIsOpen(false)} />
            {isModalOpen && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded-lg w-96">
                        <Create />
                        <div className="flex justify-end mt-4">
                            <button onClick={closeModal} className="bg-gray-500 text-white p-2 rounded">Close</button>
                        </div>
                    </div>
                </div>
            )}
        </AuthenticatedLayout>
    );
}
