import React from 'react'
import living from './bus4.jpg'
const Home = () => {
  return (
    <div>
        <div className='relative'>
          <img src={living} className='w-full h-screen object-cover opacity-70'/>
          <h1 class="absolute  text-7xl text-gray-500 top-[1%] left-[20%] font-bold font-sans">
            TIME TO TRAVEL</h1>
            <p class="absolute  text-xl text top-[13%] left-[15%]  w-[50%] font-sans text-yellow-900">A bus is a large, self-propelled, wheeled vehicle that can carry  more passengers than a car or van, but fewer than a rail transport  Buses are used for many purposes, including public transport, tourism, student transport, and private charter</p>
        </div>

    </div>
  )
}


export default Home