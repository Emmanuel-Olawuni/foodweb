import React from 'react'
import FlowerHead from './FlowerHead'
import NewsCard from './NewsCard'

const LatestNews = () => {
  return (
   <section className='w-full relative mt-32'>
    <FlowerHead title='Latest News & Blog' />
    <div className=' flex justify-around items-center gap-8 mt-6 flex-col md:flex-row  '>
        <NewsCard />
        <NewsCard />
        <NewsCard />
    </div>
   </section>
  )
}

export default LatestNews