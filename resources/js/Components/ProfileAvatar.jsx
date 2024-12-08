import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Description } from '@headlessui/react';

export default function ProfileAvatar({ profile, profileDashboard }) {
    return (
        <div onClick={profileDashboard} className="flex flex-col items-center cursor-pointer">
            <div className="w-24 h-24 bg-[#78B3CE] hover:bg-[#C9E6F0] rounded-full flex items-center justify-center">
                <span className="text-black text-2xl">{profile?.profile_name}</span>
            </div>
        </div>
    )
}
