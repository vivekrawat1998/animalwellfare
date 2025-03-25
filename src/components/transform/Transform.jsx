import React from 'react'
import Button from '../ui/Button'

const Transform = () => {
    return (
        <div className='w-full py-20  md:px-52 px-5 flex gap-10 items-center'
            style={{
                backgroundImage: 'url(/assets/image/secondoverlay.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div className='w-1/2 space-y-3'>
                <h3 className='text-lg font-semibold'>Pawsitive Impact</h3>
                <h1 className='text-2xl font-bold'>Transforming Lives with Shelter Charity</h1>
                <p className='text-sm text-gray-700'>
                    With your support, we can rescue animals from overcrowded shelters, provide them with medical care and rehabilitation, and match them with loving forever families. Together, we can rewrite the narrative for these animals, giving them a second chance at happiness and security.
                </p>
                <img className='w-full h-full object-cover rounded-lg shadow-lg' src='https://atria.peerduck.com/wp-content/uploads/2024/03/3kjgb3-600x762.png' alt='Animal Rescue' />
            </div>
            <div className='w-1/2 space-y-3'>
                <img className='w-full h-full object-cover rounded-lg shadow-lg' src='https://atria.peerduck.com/wp-content/uploads/2024/03/3kjgb3-600x762.png' alt='Animal Rescue' />
                <h3 className='text-lg font-semibold'>Pawsitive Impact</h3>
                <h1 className='text-2xl font-bold'>Transforming Lives with Shelter Charity</h1>
                <p className='text-sm text-gray-700'>
                    With your support, we can rescue animals from overcrowded shelters, provide them with medical care and rehabilitation, and match them with loving forever families. Together, we can rewrite the narrative for these animals, giving them a second chance at happiness and security.
                </p>
                <div className='w-full grid place-items-start'>
                    <Button item={"Donate Now"} />
                </div>
            </div>
        </div>
    )
}

export default Transform
