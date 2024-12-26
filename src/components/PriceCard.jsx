export const PriceCard = ({ priceListContent }) => {
  return (
    <div className="container m-4 mx-auto rounded-3xl border-b-2 border-t-2 border-gray-100 bg-slate-50 p-4 shadow-lg">
      <div className="flex h-full flex-col items-center justify-center">
        <h1 className="h-20 pb-6 text-center text-2xl font-bold">
          {priceListContent.heading}
        </h1>
        <img className="h-36 w-36" src={priceListContent.image}></img>
        <div className="flex-auto p-6">
          <p className="text-pretty p-1 text-center text-lg">
            {priceListContent.description}
          </p>
          {priceListContent.link && (
            <a
              href={priceListContent.link}
              className="text-pretty text-center text-lg text-orange-400"
            >
              <p>{priceListContent.linkText}</p>
            </a>
          )}
        </div>
        {priceListContent.items.map((item) => {
          return (
            <ul
              key={item.title}
              className="m-2 w-full items-center justify-center rounded-md border p-2 text-center shadow-inner"
            >
              <li className="text-lg xl:text-base">{item.title}</li>
              <li className="text-cyan-800">{item.price}</li>
            </ul>
          );
        })}
      </div>
    </div>
  );
};
