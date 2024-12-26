import { PriceCard } from './PriceCard';
import PriceListContent from '../utils/priceListContent';

export const PriceList = () => {
    PriceListContent.map((PriceListContent) => {
        console.log(PriceListContent.heading);
    });

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 md:gap-6 mx-6'>
    {PriceListContent.map((item) => {
        return(
            <PriceCard key={item.heading} priceListContent={item} />
        );
    })}
    </div>

  );
};
