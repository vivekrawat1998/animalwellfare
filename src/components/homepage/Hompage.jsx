import React from 'react'
import Hero from '../herosection/Hero'
import Transform from '../transform/Transform'
import Shelter from '../transform/Shelter'
import Joinmisson from '../transform/Joinmisson'
import FixedUi from '../transform/FixedUi'
import OurValues from '../transform/OurValues'
import Services from '../ourservices/Services'
import Testimmonials from '../testimonials/Testimonials'

const Hompage = () => {
    return (
        <div>
            <Hero />
            <Transform />
            <Services />
            <Shelter />
            <FixedUi />
            <OurValues />
            <Testimmonials />
            <Joinmisson />
        </div>
    )
}

export default Hompage