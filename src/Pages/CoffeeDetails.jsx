import React, {use, useEffect, useState} from 'react';
import {AuthContext} from '../Contexts/Authprovider.jsx';
import {useLoaderData} from 'react-router';
import axios from 'axios';

const CoffeeDetails = () => {
    const {saveUser} = use(AuthContext)
    const {data} = useLoaderData()
    const [coffee, setCoffee] = useState(data)
    const { _id, name, quantity, photo, email, likedBy, details } = coffee
    const [liked, setLiked] = useState(likedBy.includes(saveUser?.email))
    const [likeCount, setLikeCount] = useState(likedBy.length)
    // console.log(coffee)

    useEffect(() => {
        setLiked(likedBy.includes(saveUser?.email))
    }, [likedBy, saveUser]);

    const handleLike = () =>  {
        if (saveUser?.email === email) return

        axios.patch(`https://coffee-server-side-ochre.vercel.app/like/${_id}`,{
            email: saveUser?.email
        })
            .then(data => {
                // console.log(data?.data)
                const isLiked = data?.data?.liked
                // console.log(isLiked)

                setLiked(isLiked)

                setLikeCount(prev => (
                    isLiked ? prev + 1 : prev -1
                ))

            })
            .catch(error => {
                console.log(error)
            })

    }

    return (
        <div>
            <div className='flex flex-col md:flex-row justify-around items-center py-12 gap-12'>
                <div className='flex-1'>
                    <img className='w-full' src={photo} alt='' />
                </div>
                <div className='flex-1'>
                    <p>Name: {name}</p>
                    <p>Details: {details}</p>
                    <p>Quantity: {quantity}</p>
                    <p>Likes: {likeCount}</p>

                    <div className='flex gap-4'>
                        <button  className='btn btn-primary'>
                            Order
                        </button>
                        <button onClick={handleLike} className='btn btn-secondary'>
                            👍 {liked ? 'Liked' : 'Like'}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;