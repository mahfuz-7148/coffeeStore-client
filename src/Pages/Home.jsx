import React, {useState} from 'react';
import Banner from '../Components/Banner.jsx';
import {useLoaderData} from 'react-router';
import CoffeeCard from '../Components/CoffeeCard.jsx';

const Home = () => {
    const data = useLoaderData()
    // console.log(data.data)
    const [coffees, setCoffees] = useState(data?.data)
    console.log(coffees)

    return (
        <div>
           <Banner />
            <div className='grid grid-cols-2 gap-6 py-12'>
                {
                    coffees.map(coffee =>
                        <CoffeeCard key={coffee._id} coffee={coffee} />
                    )
                }
            </div>
        </div>
    );
};

export default Home;