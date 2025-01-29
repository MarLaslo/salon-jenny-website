import { HeroImage } from '../components/HeroImage';
import { PriceList } from '../components/PriceList';
import { OzoneArticle } from '../components/OzoneArticle';
import { About } from '../components/About';
import { BeforeVisit } from '../components/BeforeVisit';
import { FlexRows } from '../components/FlexRows';
import { Contact } from '../components/Contact';
import { PhotoGalery } from '../components/PhotoGalery';

export const HomePage = () => {
    return (
        <>
            <HeroImage />
            <PriceList />
            <BeforeVisit />
            <OzoneArticle />
            <About />
            <PhotoGalery />
            <Contact />
        </>
    );
};
