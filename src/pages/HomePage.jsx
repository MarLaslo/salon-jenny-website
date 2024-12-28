import { HeroImage } from '../components/HeroImage';
import { PriceList } from '../components/PriceList';
import { OzoneArticle } from '../components/OzoneArticle';
import { About } from '../components/About';
import { TwoColumns } from '../components/TwoColumns';
import { BeforeVisit } from '../components/BeforeVisit';
import { FlexRows } from '../components/FlexRows';
import { Contact } from '../components/Contact';

export const HomePage = () => {
    return (
        <>
            <HeroImage />
            <PriceList />
            <FlexRows>
                <BeforeVisit />
                <OzoneArticle />
                <About />
                <Contact />
            </FlexRows>
        </>
    );
};
