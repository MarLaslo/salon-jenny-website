export const PriceCard = ({priceListContent}) => {
  return (
    <div className="container m-4 mx-auto rounded-3xl border-b-2 border-t-2 border-gray-100 p-4 shadow-lg">
      <div className="flex flex-col justify-center items-center">
        <h1 className=" text-2xl font-bold">{priceListContent.heading}</h1>
        <img className="w-36 h-36" src={priceListContent.img}></img>
        <p className="text-xl">{priceListContent.price}{" €"}</p>
        <p>{priceListContent.description}</p>
      </div>
    </div>
  );
};