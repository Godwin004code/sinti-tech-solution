import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Header from "@/components/Nav/Header";
import Services from "@/components/Service/Service";


export default function Home() {
  return (
    
      <>
      <section className="w-full build">
      <Header />
      <Hero />
      </section>
      <section className="w-full services">
        <Services />
      </section>
      <Contact />
      <section className="footer py-6">
        <Footer />
      </section>
      </>
  )
}
