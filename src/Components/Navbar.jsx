import React, { useContext } from 'react';
import {Link, NavLink, useNavigate} from 'react-router';
import { AuthContext } from '../Contexts/Authprovider.jsx';
import { ThemeContext } from '../Contexts/ThemeContext.jsx';
import { toast } from 'react-toastify';

const Navbar = () => {
    const { signOutUser, saveUser, loading } = useContext(AuthContext);
    const { theme, setTheme } = useContext(ThemeContext);
    const navigate = useNavigate();

    const links = (
        <>
            <li>
                <NavLink
                    className={({ isActive }) =>
                        `btn btn-ghost font-semibold text-base transition-colors ${
                            isActive ? 'bg-primary text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                        }`
                    }
                    to="/"
                >
                    Home
                </NavLink>
            </li>
            {saveUser ? (
                <li>
                    <NavLink
                        className={({ isActive }) =>
                            `btn btn-ghost font-semibold text-base transition-colors ${
                                isActive ? 'bg-primary text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                            }`
                        }
                        to="/addCoffee"
                    >
                        Add Coffee
                    </NavLink>
                </li>
            ) : (
                <>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                `btn btn-ghost font-semibold text-base transition-colors ${
                                    isActive ? 'bg-primary text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`
                            }
                            to="/register"
                        >
                            Register
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                `btn btn-ghost font-semibold text-base transition-colors ${
                                    isActive ? 'bg-primary text-white' : 'hover:bg-gray-200 dark:hover:bg-gray-700'
                                }`
                            }
                            to="/login"
                        >
                            Login
                        </NavLink>
                    </li>
                </>
            )}
        </>
    );

    const clickSignOut = () => {
        signOutUser()
            .then(() => {
                navigate('/login');
                toast.success('Logged out successfully!', { autoClose: 2000 });
            })
            .catch((error) => {
                console.error('Sign out error:', error);
                toast.error('Logout failed!', { autoClose: 2000 });
            });
    };

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    return (
        <div className="bg-base-100 shadow-lg">
            <div className="max-w-screen-2xl mx-auto navbar py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-lg border border-gray-200 dark:border-gray-700"
                        >
                            {links}
                        </ul>
                    </div>
                    <a
                        className="btn btn-ghost text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-500 hover:to-green-500 transition-all duration-300"
                        aria-label="FindMyStuff Home"
                    >
                        Coffeestore
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-2">{links}</ul>
                </div>
                <div className="navbar-end flex items-center gap-3">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
                    >
                        {theme === 'light' ? (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-7 text-yellow-500"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
                                />
                            </svg>
                        ) : (
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="size-7 text-blue-300"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
                                />
                            </svg>
                        )}
                    </button>
                    {saveUser && (
                        <div className="dropdown dropdown-end">
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar tooltip tooltip-bottom" data-tip={saveUser.displayName}>
                                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                    <img
                                        alt="User profile"
                                        src={saveUser?.photoURL}
                                    />
                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow-lg border border-gray-200 dark:border-gray-700"
                            >
                                <li className="px-4 py-2 text-base font-semibold text-gray-900 dark:text-gray-100">
                                    {saveUser?.displayName}
                                </li>
                                <li><Link to="/addItems">Add Item</Link></li>
                                <li><Link to="/allRecovered">Recovered Items</Link></li>
                                <li><Link to="/myItems">My Items</Link></li>
                                <li>
                                    <button
                                        onClick={clickSignOut}
                                        className="btn btn-ghost text-base font-medium text-red-600 hover:bg-red-100 dark:hover:bg-red-900"
                                    >
                                        Logout
                                    </button>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;