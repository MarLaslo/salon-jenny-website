import useInitialState from "../hooks/useInitialState";
import heroImage from "../assets/0.png";

export const HeroImage = () => {
const intialState = useInitialState();

  return (
    <div className={`flex h-screen flex-col items-center justify-items-center justify-center bg-gradient-to-b from-white from-60% via-cyan-100 to-white transition-opacity ease-in duration-700 ${intialState ? 'opacity-100' : 'opacity-0'}`}>
      <div className="basis-1/2 self-center max-w-lg p-4">
        <img src={heroImage} alt="Salón pre psov Jenny"/>
      </div>
      <div className="flex basis-1/2 flex-col items-center justify-start">
        <h2 className="text-center text-3xl mx-6 font-bold text-black break-words md:text-4xl">
          Kadernický salón a wellness <br /> pre psov v Trebišove
        </h2>
        <p className="mt-6 text-center font-medium text-2xl text-black break-words">
          Otváracie hodiny: Podľa objednávky
        </p>
        <p className="mt-6 text-center font-medium text-1xl text-black break-words">Objednávky medzi 8:00 a 18:00 hod.</p>
        <p className="mt-6 text-center font-medium text-1xl text-black break-words">Kontakt: <a href="callto:+421908701017">+421 918 701 017</a></p>

        <a href="callto:+421908701017">
        <button
          type="button"
          className="shadow-xl mt-4 rounded-md bg-cyan-600 px-4 py-2 text-center text-md font-medium text-white transition duration-300 ease-in-out hover:bg-cyan-700"
        >
          Kontaktovať
        </button>
        </a>
      </div>
    </div>
  );
};
