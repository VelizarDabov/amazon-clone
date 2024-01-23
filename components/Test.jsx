

import { decrement, increment } from '@/slices/numbersSlice';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Test = () => {
  const dispatch = useDispatch();
const number = useSelector(state=>state.numbers.number )
console.log(number)
  return (
    <>
        <div className='flex flex-1 items-center justify-center'>
        <a>{number}</a>
        </div>
       <div className='flex  flex-0.7 items-center justify-center'>
       <button onClick={()=>dispatch(increment())} className='button'>+</button>
        <button onClick={() => dispatch(decrement())} className='button'>-</button>
       </div>
        
       <div class="flex">
  <div class="flex-1">
 
    Flex item 1
    <div class="flex-0.4">
 
 Flex item 2
</div>
  </div>
  <div class="">
 
    Flex item 2
  </div>
</div>
    </>
  )
}

export default Test