import Header from "../components/Header"
import Footer from "../components/Footer"
import HeroSec from "../components/HeroSec"
import Slider from "../components/Slider"
import SliderProps from "../components/SliderProps"


export default function Home() { 
    return (
        <>
            <Header />
            <div class="content-wrapper">
                <HeroSec />
                <SliderProps />
            </div>
            <Footer />

        </>
    )
}
