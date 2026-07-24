import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import GalleryTeaser from '../components/GalleryTeaser'
import Testimonials from '../components/Testimonials'
import Location from '../components/Location'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <GalleryTeaser />
      <Testimonials />
      <Location />
    </>
  )
}
