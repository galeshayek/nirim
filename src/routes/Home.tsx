import AfterOct from "../sections/AfterOct/AfterOct"
import Hero from "../sections/Hero/Hero"
import Kibbutz from "../sections/Kibbutz"
import Needs from "../sections/Needs"
const Home = () => {


    return (<div className="flex flex-col text-lg">
        <Hero />
        <AfterOct />
        <Kibbutz />
        <Needs />
    </div>
    )
}

export default Home