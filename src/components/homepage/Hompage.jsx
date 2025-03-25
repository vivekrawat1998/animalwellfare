import React from 'react'
import Hero from '../herosection/Hero'
import Transform from '../transform/Transform'
import Shelter from '../transform/Shelter'
import Joinmisson from '../transform/Joinmisson'

const Hompage = () => {
    return (
        <div>
            <Hero />
            <Transform />
            <Shelter />
            <Joinmisson />
            <Transform />
        </div>
    )
}

export default Hompage