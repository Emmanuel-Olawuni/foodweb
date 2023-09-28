'use client'
import React, { useEffect } from 'react'
import TabData from './TabData'
import Aos from 'aos'
import 'aos/dist/aos.css'

const TabContent = ({id , type}) => {
  useEffect(()=> {
    Aos.init();

  }, [])

    const {data} = type;

  return (
    <div key={id} className=' grid grid-cols-1 md:grid-cols-2 p-3 gap-3' data-aos='fade-right' data-aos-anchor-placement="top-bottom"          data-aos-easing="ease-in-sine">
       
       {
        data.map((x)=> (
            <TabData  data={x} /> 
        ))
       }
    </div>
  )
}

export default TabContent
