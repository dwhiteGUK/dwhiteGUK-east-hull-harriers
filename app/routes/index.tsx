import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { Hero } from '~/components/Hero'

export default function Index() {
  return (
    <div>
      <Header />
      <Hero />
      <main className="h-[800px]"></main>
      <Footer />
    </div>
  )
}
