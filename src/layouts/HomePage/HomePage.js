import About from "./components/About"
import Banner from "./components/Banner"
import Community from "./components/Community"
import Pricing from "./components/Pricing"
import Workouts from "./components/Workouts"

export default function HomePage () {

    return (
        <>
            <Banner />
            <About />
            <Workouts />
            <Pricing />
            <Community />
            {/* <Faq />
            <Join /> */}
        </>
    )
}

