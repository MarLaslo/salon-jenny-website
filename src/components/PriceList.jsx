import { PriceCard } from './PriceCard';
import PriceListContent from '../utils/priceListContent';

export const PriceList = () => {
    return (
        <>
            <h2 className="mt-20 mb-6 text-center text-3xl font-bold text-black md:text-4xl">
                Cenník služieb
            </h2>
            <div className="container mx-auto">
                <div className=" grid grid-cols-1 md:grid-cols-2 md:gap-6 xl:grid-cols-4">
                    {PriceListContent.map((item) => {
                        return (
                            <PriceCard
                                key={item.heading}
                                priceListContent={item}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="container mx-auto mb-2 rounded-3xl border-b-2 border-t-2 border-blue-200/60 bg-blue-300/60 p-4 px-8 shadow-lg">
                <p>
                    <strong className="text-blue-500">V cene každej služby: </strong>
                    Čistenie uší, očí a strihanie pazúrov.
                </p>
            </div>
            <div className="container mx-auto mb-20 rounded-3xl border-b-2 border-t-2 border-red-200/60 bg-red-300/60 p-4 px-8 shadow-lg">
                <p>
                    <strong className="text-red-500">Dôležité 1: </strong>
                    Pred návštevou salónu si prosím prečítajte naše pravidlá a
                    odporúčania v sekcii{' '}
                    <a
                        href="/pred-navstevou-salonu"
                        className="text-blue-500 underline hover:text-blue-700"
                    >
                        Pred návštevou salónu
                    </a>
                    .
                </p>
                <p>
                    <strong className="text-red-500">Dôležité 2: </strong>
                    Za nadmerne znečisteného a zabĺšeného psa sa účtuje poplatok
                    od <span className="font-semibold">15€</span>.
                </p>
            </div>
        </>
    );
};
