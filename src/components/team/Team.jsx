import React from 'react'
import Header from '../ui/Header'

const Team = () => {
    const teamMembers = [
        {

            name: 'John Doe',
            position: 'Founder',
            image: '/assets/image/founder.png',
        },
        {
            name: 'Jane Doe',
            position: 'Director',
            image: '/assets/image/team2.jpg',
        },
        {
            name: 'John Smith',
            position: 'Manager',
            image: '/assets/image/team3.jpg',
        },
        {
            name: 'Jane Smith',
            position: 'Volunteer',
            image: '/assets/image/team4.jpg',
        },
        {
            name: 'John Doe',
            position: 'Founder',
            image: '/assets/image/team1.jpg',
        },
        {
            name: 'Jane Doe',
            position: 'Director',
            image: '/assets/image/team2.jpg',
        },
        {
            name: 'John Smith',
            position: 'Manager',
            image: '/assets/image/team3.jpg',
        },
        {
            name: 'Jane Smith',
            position: 'Volunteer',
            image: '/assets/image/team4.jpg',
        },
    ]
    return (
        <div>
            <Header
                title={'Our Team'}
                subheading={'Changing Lives Through Shelter Support'}
                description={'At our shelter charity, we believe that compassion has the power to change lives. Every animal deserves a loving home, and our shelter charity is committed to making that a reality.'}
            />

            <div className="grid grid-cols-1 font-Lora md:px-10 px-5 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                {teamMembers.map((member, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={member.image}  
                            alt={member.name}
                            className="md:w-[32vw] object-cover rounded-md   "
                        />
                        <span className="text-[1.4rem]  mt-5  text-[#D89D55]">{member.position}</span>
                        <h3 className="text-[1.4rem] text-[#072724] font-bold font mt-1">{member.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Team