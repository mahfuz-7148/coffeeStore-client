import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { router } from './Router/Routes.jsx';
import Authprovider from './Contexts/Authprovider.jsx';
import {ToastContainer} from 'react-toastify';
import {ThemeProvider} from './Contexts/ThemeContext.jsx';

createRoot(document.getElementById('root')).render(
    <ThemeProvider>
        <Authprovider>
            <RouterProvider router={router} />
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
        </Authprovider>
    </ThemeProvider>


);