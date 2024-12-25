import { PriceCard } from './PriceCard';
import PriceListContent from '../utils/priceListContent';
import priceListContent from '../utils/priceListContent';

export const PriceList = () => {
    PriceListContent.map((PriceListContent) => {
        console.log(PriceListContent.heading);
    });

  return (
    PriceListContent.map((item) => {
        return(
            <PriceCard key={item.heading} priceListContent={item} />
        );
    })
  );
};
