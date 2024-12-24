export const HeroImage = () => {
  return (
    <div className="flex flex-col items-center justify-items-center justify-center bg-white">
      <div className="basis-1/2 self-center">
        <img src="src/assets/0.png" alt="Salón pre psov Jenny" className="max-w-lg" />
      </div>
      <div className="flex basis-1/2 flex-col items-center justify-center">
        <h2 className="text-center text-3xl mx-6 font-bold text-black break-words md:text-4xl">
          Kadernický salón a wellness <br /> pre psov v Trebišove
        </h2>
        <p className="mt-6 text-black break-words">
          Otvaracie hodiny: Po-Pia 8:00 - 18:00, So 8:00 - 12:00
        </p>
        <button
          type="button"
          className="mt-20 rounded-md bg-blue-600 px-4 py-2 text-center text-md font-medium text-white transition duration-300 ease-in-out hover:bg-blue-700"
        >
          Objednať sa
        </button>
      </div>
    </div>
  );
};
