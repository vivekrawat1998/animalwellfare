import React from 'react'

const Shelter = () => {
    return (
        <div className=' md:py-32 w-full h-full md:px-52 md:gap-20 gap-4  px-5 flex  items-center'
          
        >
            <div className=' w-full'>
                <img src='/assets/image/shelter.png' alt='' className='w-full h-full object-cover rounded-md' />
            </div>

            <div className='space-y-3 w-1/2'>
                <h3>Why us</h3>
                <h1 className='md:text-4xl'>Transforming Lives with Shelter Charity</h1>
                <p>With your support, we can rescue animals from overcrowded shelters, provide them with medical care and rehabilitation, and match them with loving forever families.</p>
                <li>
                    Promoting Animal Welfare </li>
                <li>
                    Community Engagement and Education
                </li>
                <li>
                    Addressing Overpopulation and Homelessness
                </li>
            </div>


        </div>
    )
}

export default Shelter