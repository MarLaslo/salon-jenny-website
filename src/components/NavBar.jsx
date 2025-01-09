import { useState } from 'react';
import useNavRef  from '../hooks/useNavRef';
import { scrollUtil } from '../utils/scrollUtil';

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navRef = useNavRef();

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="sticky start-0 top-0 z-20 w-full bg-cyan-600/95 backdrop-blur-sm shadow-md">
                <div className="flex flex-wrap items-center justify-between lg:justify-between">
                    <a
                        href="/"
                        className="ml-4 flex items-start space-x-3 py-2"
                    >
                        <span
                            className="font-bebas-neue text-4xl font-bold text-cyan-50 lg:flex lg:w-auto"
                            alt="Salón Jenny"
                        >
                            Salón Jenny
                        </span>
                    </a>
                    <div className="mx-auto hidden xl:flex">
                        <button
                            className="block px-4 py-4 font-extrabold text-white hover:bg-cyan-500"
                            onClick={() => scrollUtil(navRef.homeRef)}
                        >
                            Domov
                        </button>
                        <button
                            className="block px-4 py-4 font-extrabold text-white hover:bg-cyan-500"
                            onClick={() => scrollUtil(navRef.priceListRef)}
                        >
                            Cenník služieb
                        </button>
                        <button
                            className="block px-4 py-4 font-extrabold text-white hover:bg-cyan-500"
                            onClick={() => scrollUtil(navRef.beforeVisitRef)}
                        >
                            Pred návštevou salónu
                        </button>
                        <button
                            className="block px-4 py-4 font-extrabold text-white hover:bg-cyan-500"
                            onClick={() => scrollUtil(navRef.spaRef)}
                        >
                            SPA a ozónoterapia
                        </button>
                        <button
                            className="block px-4 py-4 font-extrabold text-white hover:bg-cyan-500"
                            onClick={() => scrollUtil(navRef.aboutRef)}
                        >
                            O mne
                        </button>
                        <button
                            className="block px-4 py-4 font-extrabold text-white hover:bg-cyan-500"
                            onClick={() => scrollUtil(navRef.contactRef)}
                        >
                            Kontakt
                        </button>
                        <button
                            className="block px-4 py-4 font-extrabold text-white hover:bg-cyan-500"
                            onClick={() => scrollUtil(navRef.galleryRef)}
                        >
                            Moje práce
                        </button>
                    </div>
                    <button className="mr-4 xl:hidden" onClick={handleClick}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 stroke-current stroke-2 text-white transition duration-300 ease-in-out"
                            fill="none"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                </div>
                {isMenuOpen && (
                    <div className="fixed top-14 z-20 w-full drop-shadow-2xl xl:hidden">
                        <button
                            className="block h-10 w-full border-b bg-cyan-600/95 px-4 py-1 text-center text-sm font-bold text-white transition duration-300 ease-out hover:bg-cyan-500"
                            onClick={() => {
                                scrollUtil(navRef.homeRef);
                                setIsMenuOpen(!isMenuOpen);
                            }}
                        >
                            Domov
                        </button>
                        <button
                            className="block h-10 w-full border-b bg-cyan-600/95 px-4 py-1 text-center text-sm font-bold text-white transition duration-300 ease-out hover:bg-cyan-500"
                            onClick={() => {
                                scrollUtil(navRef.priceListRef);
                                setIsMenuOpen(!isMenuOpen);
                            }}
                        >
                            Cenník služieb
                        </button>
                        <button
                            className="block h-10 w-full border-b bg-cyan-600/95 px-4 py-1 text-center text-sm font-bold text-white transition duration-300 ease-out hover:bg-cyan-500"
                            onClick={() => {
                                scrollUtil(navRef.beforeVisitRef);
                                setIsMenuOpen(!isMenuOpen);
                            }}
                        >
                            Pred návštevou salónu
                        </button>
                        <button
                            className="block h-10 w-full border-b bg-cyan-600/95 px-4 py-1 text-center text-sm font-bold text-white transition duration-300 ease-out hover:bg-cyan-500"
                            onClick={() => {
                                scrollUtil(navRef.spaRef);
                                setIsMenuOpen(!isMenuOpen);
                            }}
                        >
                            SPA a ozónoterapia
                        </button>
                        <button
                            className="block h-10 w-full border-b bg-cyan-600/95 px-4 py-1 text-center text-sm font-bold text-white transition duration-300 ease-out hover:bg-cyan-500"
                            onClick={() => {
                                scrollUtil(navRef.aboutRef);
                                setIsMenuOpen(!isMenuOpen);
                            }}
                        >
                            O mne
                        </button>
                        <button
                            className="block h-10 w-full border-b bg-cyan-600/95 px-4 py-1 text-center text-sm font-bold text-white transition duration-300 ease-out hover:bg-cyan-500"
                            onClick={() => {
                                scrollUtil(navRef.contactRef);
                                setIsMenuOpen(!isMenuOpen);
                            }}
                        >
                            Kontakt
                        </button>
                        <button
                            className="block h-10 w-full border-b bg-cyan-600/95 px-4 py-1 text-center text-sm font-bold text-white transition duration-300 ease-out hover:bg-cyan-500"
                            onClick={() => {
                                scrollUtil(navRef.galleryRef);
                                setIsMenuOpen(!isMenuOpen);
                            }}
                        >
                            Moje práce
                        </button>
                    </div>
                )}
            </nav>
        </>
    );
};
