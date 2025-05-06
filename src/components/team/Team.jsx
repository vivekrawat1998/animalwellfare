import React from 'react'
import Header from '../ui/Header'
import { useApi } from "../context/Apiprovider";

const Team = () => {
    const { data } = useApi();
    const teamdata = Array.isArray(data?.api4) ? data.api4 : [];
    console.log("teamdata", teamdata);
    return (
        <div>
            <Header
                title={'Our Team'}
                subheading={'Changing Lives Through Shelter Support'}
                description={'At our shelter charity, we believe that compassion has the power to change lives. Every animal deserves a loving home, and our shelter charity is committed to making that a reality.'}
            />

            <div className="grid grid-cols-1 font-Lora md:px-10 px-5 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
                {teamdata.map((member, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                             src={member.images?.[0]?.url || "https://via.placeholder.com/300"}
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