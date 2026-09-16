import CTAFooter from "../components/cta-footer";
import FeaturedGuides from "../components/featured-guides";
import GuideFlow from "../components/guide-flow";
import Hero from "../components/hero";

function Home(){
    return(
        <main>
            <Hero />
            <GuideFlow />
            <FeaturedGuides />
            <CTAFooter />
        </main>
    );
}

export default Home