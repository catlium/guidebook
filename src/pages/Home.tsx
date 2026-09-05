import CTAFooter from "../components/cta-footer";
import FeaturedGuides from "../components/featured-guides";
import GuideFlow from "../components/guide-flow";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

function Home(){
    return(
        <main>
            <Navbar />
            <Hero />
            <GuideFlow />
            <FeaturedGuides />
            <CTAFooter />
        </main>
    );
}

export default Home