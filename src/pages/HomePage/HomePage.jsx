import { Banner } from "../../components/Banner/Banner";
import { Catalogtovarov } from "../../components/catalogtovarov/catalogtovarov";
import SimpleSlider from "../../components/Slider/Slider";

export function HomePage(){
    return(
        <section className="main">
            <Banner/>
            <SimpleSlider/>
            <Catalogtovarov/>
        </section>
    )
}