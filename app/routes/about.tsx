import { Footer } from '~/components/Footer'
import { Header } from '~/components/Header'
import { SubPageHero } from '~/components/SubPageHero'

export default function About() {
  return (
    <div>
      <Header />
      <SubPageHero />
      <main className="h-[800px]"></main>
      <Footer />
    </div>
  )
}
