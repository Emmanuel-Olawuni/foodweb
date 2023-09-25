import About from '@/components/About'
import Category from '@/components/Category'
import Choose from '@/components/Choose'
import Foodmenu from '@/components/Foodmenu'
import Hero from '@/components/Hero'
import LatestNews from '@/components/LatestNews'
import Partners from '@/components/Partners'
import Team from '@/components/Team'
import Testimonial from '@/components/Testimonial'
import Background from '@/components/background'


export default function Home() {
  return (
  <>
    <Background />
    <Hero />
    <About />
    <Category />
    <Choose />
    <Foodmenu />
    <Team/>
    <Testimonial />
    <LatestNews />
    <Partners />
    </>
  )
}
