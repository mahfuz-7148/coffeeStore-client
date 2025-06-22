import { createBrowserRouter } from 'react-router';
import Home from '../Pages/Home.jsx';
import Login from '../Pages/Login.jsx';
import Register from '../Pages/Register.jsx';
import Root from '../Layouts/Root.jsx';
import NotFound from '../Components/NotFound.jsx';
import AddCoffee from '../Pages/AddCoffee.jsx';
import PrivateRoute from './PrivateRoute.jsx';
import axios from 'axios';
import CoffeeDetails from '../Pages/CoffeeDetails.jsx';
import UpdateCoffee from '../Pages/UpdateCoffee.jsx';


export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                loader: () =>  axios(`https://coffee-server-side-ochre.vercel.app/coffees`),
                Component: Home,
            },
            {
                path: '/login',
                Component: Login,
            },
            {
                path: '/register',
                Component: Register,
            },
            {
                path: '/addCoffee',
                element: <PrivateRoute><AddCoffee /> </PrivateRoute>
            },
            {
                path: '/coffee/:id',
                loader: ({params}) =>  axios(`https://coffee-server-side-ochre.vercel.app/coffee/${params.id}`),
                element: <PrivateRoute><CoffeeDetails /> </PrivateRoute>
            },
            {
                path: '/updateCoffee/:id',
                element: <PrivateRoute><UpdateCoffee /> </PrivateRoute>
            }
        ],
    },
    {
        path: '/*',
        Component: NotFound,
    },
]);