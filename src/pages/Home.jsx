import Header from "../components/Header"
import Footer from "../components/Footer"
import HeroSec from "../components/HeroSec"
import Slider from "../components/Slider"


export default function Home() {
    return (
        <>
            <Header />
            <div class="content-wrapper">
                <HeroSec />
                <h2 class="category-title mb-4"><span class="brand-text">Latest Releases</span></h2>
                <Slider />
                <h2 class="category-title mb-4">Trending on <span class="brand-text">Vivexa Flix</span></h2>
                <Slider />
                <h2 class="category-title mb-4">Popular on <span class="brand-text">Vivexa Flix</span></h2>
                <Slider />
            </div>
            <Footer />

        </>
    )
}