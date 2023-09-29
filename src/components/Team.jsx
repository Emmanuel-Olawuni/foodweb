import React from 'react'
import TeamCard from './teamCard/TeamCard';

const Team = () => {
  return (
    <section>
        <div className='relative team-section flex items-center justify-center h-[24vh] p-3 md:h-[30vh] flex-col  gap-3 mt-10'>
            <h4 className=' font-inter font-extrabold text-4xl  text-white '>Team Member</h4>
            <p className=' balance font-poppins font-normal text-white text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi hic.</p>
        </div>

        <TeamCard />
       
    </section>
  )
}

export default Team