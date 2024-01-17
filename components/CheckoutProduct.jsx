'use client'
import { StarIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import React, { useState } from 'react'
import prime from '../assets/prime.jpg'
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket, selectItems } from '@/slices/basketSlice'
const CheckoutProduct = ({  productId,
    productName,
    productPrice,
    productDescription,
    productImage,
    productMaterial,hasPrime}) => {
        const MAX_RATING = 5;
        const MIN_RATING = 1;
        const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
const dispatch = useDispatch()
        const addItemToBasket = () => {
            const product = {
                productId,
                productName,
                productPrice,
                productDescription,
                productImage,
                productMaterial,
                hasPrime,
              };
dispatch(addToBasket(product))
        }
        const remove = () => {
dispatch(removeFromBasket({productId}))
        }
  return (
    <div className='grid grid-cols-5'>
        {/* left */}
        <div>
<Image src={productImage} height={200} width={200} objectFit='contain'/>
        </div>
        {/* middle */}
        <div className='col-span-3 mx-5'>
<p>{productName}</p>
<div className='flex'>
    {Array(rating).fill().map((_, i) => (<StarIcon key={i} className='h-5 text-yellow-500'/>))}
</div>
<p className='text-xs my-2 line-clamp-3'>{productDescription}</p>
<p>${productPrice}</p>
{hasPrime && (
    <div className='flex items-center space-x-2'>
<img loading='lazy' className='w-12' src={prime}/>
<p className='text-xs text-gray-400'>FREE Next-day Delivery</p>
        </div>
)}
        </div>
       

        <div className='flex flex-col space-y-2 my-auto'>
        <button className='button' onClick={addItemToBasket}>Add to Basket</button>
        <button className='button' onClick={remove}>Remove from Basket</button>
        </div>
         {/* right */}
       
    </div>
  )
}

export default CheckoutProduct