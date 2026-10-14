import AssociatedVentures from "./components/associated/AssociatedVentures";
import Carousel from "./components/carousel/Carousel";
import FaqSection from "./components/faq-section/FaqSection";
import Services from "./components/services/Services";
import SpecialFeatures from "./components/special-features/SpecialFeatures";
export default function Home() {
    return (
        <>
            <Carousel />
            <AssociatedVentures/>
            <Services />
            <SpecialFeatures />
            <FaqSection />
        </>
    );
}