import heroImage from '../assets/0.png';

export const HeroImage = () => {

    return (
        <div
            className="mb-12 mt-8 flex flex-col items-center justify-center justify-items-center"
        >
            <div className="max-w-lg self-center p-4">
                <img src={heroImage} alt="Salón pre psov Jenny" />
            </div>
            <div className="flex flex-col items-center justify-start">
                <h2 className="sha mx-6 break-words text-center text-3xl font-bold text-black md:text-4xl">
                    Kadernický salón a wellness <br /> pre psov v Trebišove
                </h2>
                <p className="mt-6 break-words text-center text-2xl font-medium text-black">
                    Otváracie hodiny: Podľa objednávky
                </p>
                <p className="text-1xl mt-6 break-words text-center font-medium text-black">
                    Objednávky medzi 8:00 a 16:00 hod.
                </p>
                <p className="text-1xl mt-6 break-words text-center font-medium text-black">
                    Kontakt: <a href="callto:+421908701017">+421 918 701 017</a>
                </p>

                <a href="callto:+421908701017">
                    <button
                        type="button"
                        className="text-md mt-4 rounded-md bg-cyan-500 px-4 py-2 text-center font-medium text-white shadow-xl transition duration-300 ease-in-out hover:bg-cyan-700"
                    >
                        Kontaktovať
                    </button>
                </a>
            </div>
        </div>
    );
};
