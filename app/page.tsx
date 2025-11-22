import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Programs from '@/components/Programs'
import Reviews from '@/components/Reviews'
import TimingsLocation from '@/components/TimingsLocation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Reviews />
      <TimingsLocation />
      <Footer />
    </main>
  )
}

