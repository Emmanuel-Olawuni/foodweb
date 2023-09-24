'use client'
import React from 'react'
import TabData from './TabData'

const TabContent = ({id , type}) => {
    const {data} = type;

  return (
    <div key={id} className=' grid grid-cols-2 p-3 gap-3'>
       
       {
        data.map((x)=> (
            <TabData  data={x} /> 
        ))
       }
    </div>
  )
}

export default TabContent