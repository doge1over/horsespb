import Header   from "@/components/Header";
import Hero     from "@/components/Hero";
import Services from "@/components/Services";
import Pricing  from "@/components/Pricing";
import About    from "@/components/About";
import Gallery  from "@/components/Gallery";
import Reviews  from "@/components/Reviews";
import Contact  from "@/components/Contact";
import Footer   from "@/components/Footer";

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <Services />
                <Pricing />
                <About />
                <Gallery />
                <Reviews />
                <Contact />
            </main>
            <Footer />
        </>
    );
}
