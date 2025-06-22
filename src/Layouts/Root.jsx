
import Navbar from '../Components/Navbar.jsx';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer.jsx';
import {useContext} from 'react';
import {ThemeContext} from '../Contexts/ThemeContext.jsx';


const Root = () => {
    const { theme } = useContext(ThemeContext);
    return (

        <div
            className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen w-full transition-colors duration-300"
            data-theme={theme}
        >
            {/* Navbar */}
            <nav className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md">
                <Navbar />
            </nav>

            {/* Main Content */}
            <main className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 dark:bg-gray-900 text-gray-300 mt-auto">
                <Footer />
            </footer>
        </div>
    );
};

export default Root;