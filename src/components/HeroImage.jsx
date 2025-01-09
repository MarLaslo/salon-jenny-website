import heroImage from '../assets/0.png';
import useNavRef from '../hooks/useNavRef';
import { scrollUtil } from '../utils/scrollUtil';

export const HeroImage = () => {
    const navRef = useNavRef();

    return (
        <div
            ref={navRef.homeRef}
            className="mb-12 flex h-screen scroll-mt-20 flex-col items-center justify-items-center"
        >
            <div className="max-w-xs self-center p-4 pt-24 md:max-w-md">
                <img src={heroImage} alt="Salón pre psov Jenny" />
            </div>
            <h2 className="mx-6 break-words text-center text-3xl font-bold text-black md:text-4xl">
                Kadernícky salón a wellness <br /> pre psov v Trebišove
            </h2>
            <button
                onClick={() => scrollUtil(navRef.contactRef)}
                type="button"
                className="mt-16 rounded-md bg-cyan-500 px-6 py-3 text-center text-xl font-medium text-white shadow-xl transition duration-300 ease-in-out hover:bg-cyan-700"
            >
                Kontaktovať
            </button>
        </div>
    );
};
