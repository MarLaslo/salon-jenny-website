import { scrollUtil } from '../utils/scrollUtil';
import useNavRef  from '../hooks/useNavRef';


export const PriceCard = ({ priceListContent }) => {
    const navRef  = useNavRef();

    return (
        <div className="container m-4 mx-auto rounded-3xl border-b-2 border-slate-50/60 bg-slate-50/60 p-4 shadow-lg">
            <div className="flex h-full flex-col items-center justify-center">
                <h1 className="h-20 pb-6 text-center text-2xl font-bold">
                    {priceListContent.heading}
                </h1>
                <div className="container mx-auto mb-4 w-fit p-2">
                    <img
                        className="h-36 w-36"
                        src={priceListContent.image}
                    ></img>
                </div>
                <div className="mt-4 flex-grow">
                    <p className="min-h-48 px-6 py-1 text-justify">
                        {priceListContent.description}
                    </p>
                    {priceListContent.link && (
                        <a
                            onClick={() => scrollUtil(navRef.beforeVisitRef)}
                            className="text-pretty text-center text-lg text-orange-400 hover:text-orange-600 hover:underline hover:cursor-pointer"
                        >
                            <p>{priceListContent.linkText}</p>
                        </a>
                    )}
                </div>
                {priceListContent.items.map((item) => {
                    return (
                        <ul
                            key={item.title}
                            className="my-2 w-full items-center justify-center rounded-md border p-2 text-center shadow-inner bg-white/60"
                        >
                            <li className="text-lg xl:text-base">
                                {item.title}
                            </li>
                            <li className="text-cyan-800">{item.price}</li>
                        </ul>
                    );
                })}
            </div>
        </div>
    );
};
