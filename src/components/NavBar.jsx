import { useContext, useState } from 'react';
import { NavContext } from '../context/navContext';

export const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const { navRef } = useContext(NavContext);

    const buttons = [
        ['Domov', '/'],
        ['Cenník služieb', '/'],
        ['Pred návštevou salónu', '/'],
        ['SPA a ozónoterapia', '/'],
        ['O mne', '/'],
        ['Kontakt', '/'],
        ['Moje práce', '/']
    ];

    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="sticky start-0 top-0 z-20 w-full bg-cyan-400/95 shadow-md">
                <div className="flex flex-wrap items-center justify-between lg:justify-between">
                    <a
                        href="/"
                        className="ml-4 flex items-start space-x-3 py-2"
                    >
                        <img
                            src="src/assets/0.png"
                            alt="Salón pre psov Jenny"
                            className="m-0 w-10 p-0"
                        />
                        <span
                            className="self-center whitespace-nowrap text-2xl font-bold text-cyan-50 lg:flex lg:w-auto"
                            alt="Salón Jenny"
                        >
                            Salón Jenny
                        </span>
                    </a>
                    <button onClick={() => navRef.aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                        TestButton
                    </button>
                    <button onClick={() => navRef.priceListRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' })}>
                        TestButton
                    </button>
                    <div className="mx-auto hidden xl:flex">
                        {buttons.map(([title, url]) => (
                            <div 
                                className="font-extrabold text-white hover:bg-cyan-300 hover:text-cyan-600"
                                key={title}
                            >
                                <a href={url} className="block px-4 py-4">
                                    {title}
                                </a>
                            </div>
                        ))}
                    </div>
                    <button className="mr-4 xl:hidden" onClick={handleClick}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8 stroke-current stroke-2 text-white transition duration-300 ease-in-out hover:text-cyan-500"
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
                    <div className="sticky start-0 top-0 z-20 w-full drop-shadow-2xl xl:hidden">
                        {buttons.map(([title, url]) => (
                            <div
                                className="h-11 border-b bg-cyan-400 py-1 text-center text-sm font-bold text-white transition duration-300 ease-out hover:bg-cyan-300 hover:text-cyan-500"
                                key={title}
                            >
                                <a href={url} className="block px-4 py-2">
                                    {title}
                                </a>
                            </div>
                        ))}
                    </div>
                )}
            </nav>
        </>
    );
};
