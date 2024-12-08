import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { Inertia } from '@inertiajs/inertia';
import { Link, usePage } from '@inertiajs/react';
import { useState } from 'react';

export default function AuthenticatedLayout({ header, children, subscribed, profilePage }) {

    const user = usePage().props.auth.user;
    const { profileId } = usePage().props
    // const [profileId, setProfileId] = useState(null);


    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-800">
            <nav className="border-b bg-gray-800">
                <div className="mx-auto max-w-screen px-4">
                    <div className="flex h-16 justify-between">
                        <div className="flex">
                            <div className="flex shrink-0 items-center md:ml-10">
                                <Link href={profileId ? route('dashboard', { profileId: profileId }) : route("profiles.index")}>
                                    <img className="block h-9 w-auto fill-current" src="/assets/images/logo.png" alt="Logo" />
                                </Link>
                            </div>
                            {(subscribed && !profilePage && profileId) && (
                                <div className="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex text-white">
                                    <NavLink
                                        href={route('dashboard', { profileId: profileId })}
                                        active={route().current('dashboard')}
                                    >
                                        Browse
                                    </NavLink>
                                    <NavLink
                                        href={route('profiles.index')}
                                        active={route().current('profiles')}
                                    >
                                        Favorites
                                    </NavLink>
                                </div>
                            )}

                        </div>

                        <div className="hidden sm:ms-6 sm:flex sm:items-center ">
                            <div className="relative ms-3 ">
                                {subscribed ? (
                                    <Dropdown>
                                        <Dropdown.Trigger>
                                            <span className="inline-flex rounded-md">
                                                <button
                                                    type="button"
                                                    className="inline-flex items-center rounded-md border border-transparent bg-gray-900 px-3 py-2 text-sm font-medium leading-4 text-white transition duration-150 ease-in-out hover:text-gray-700 focus:outline-none"
                                                >
                                                    {user.name}

                                                    <svg
                                                        className="-me-0.5 ms-2 h-4 w-4"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 20 20"
                                                        fill="currentColor"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                </button>
                                            </span>
                                        </Dropdown.Trigger>

                                        <Dropdown.Content>
                                            <Dropdown.Link
                                                href={route('profiles.index')}
                                            >
                                                Profiles
                                            </Dropdown.Link>
                                            {!profileId && (
                                                <Dropdown.Link
                                                    href={route('settings.edit')}
                                                >
                                                    Settings
                                                </Dropdown.Link>
                                            )}
                                            <Dropdown.Link
                                                href={route('logout')}
                                                method="post"
                                                as="button"
                                            >
                                                Log Out
                                            </Dropdown.Link>
                                        </Dropdown.Content>
                                    </Dropdown>
                                ) : (
                                    <button onClick={() => Inertia.post('/logout')} className="rounded-lg block w-full px-4 py-2 text-start text-sm leading-5 text-white hover:text-black transition duration-150 ease-in-out bg-[#63291a] hover:bg-[#C9E6F0] focus:bg-gray-100 focus:outline-none">Sign out</button>
                                )}
                            </div>
                        </div>

                        <div className="-me-2 flex items-center sm:hidden">
                            <button
                                onClick={() =>
                                    setShowingNavigationDropdown(
                                        (previousState) => !previousState,
                                    )
                                }
                                className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 transition duration-150 ease-in-out hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none"
                            >
                                <svg
                                    className="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        className={
                                            !showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        className={
                                            showingNavigationDropdown
                                                ? 'inline-flex'
                                                : 'hidden'
                                        }
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div
                    className={
                        (showingNavigationDropdown ? 'block' : 'hidden') +
                        ' sm:hidden bg-gray-300 hover:bg-gray-100'
                    }
                >
                    {profileId && (
                        <ResponsiveNavLink
                            href={route('dashboard', { profileId: profileId })}
                            active={route().current('dashboard')}
                        >
                            Dashboards
                        </ResponsiveNavLink>
                    )}

                    <div className="border-t border-gray-200 pb-1 pt-4">
                        <div className="px-4">
                            <div className="text-base font-medium text-gray-800">
                                {user.name}
                            </div>
                            <div className="text-sm font-medium text-gray-500">
                                {user.email}
                            </div>
                        </div>

                        <div className="mt-3 space-y-1">
                            <ResponsiveNavLink href={route('settings.edit')}>
                                Profile
                            </ResponsiveNavLink>
                            <ResponsiveNavLink
                                method="post"
                                href={route('logout')}
                                as="button"
                            >
                                Log Out
                            </ResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </nav>

            <main>{children}</main>
        </div>
    );
}
