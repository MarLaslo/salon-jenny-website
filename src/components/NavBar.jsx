import { useState } from 'react';

export const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const buttons = [
    ['Domov', '/'],
    ['Cenník', '/'],
    ['O mne', '/'],
    ['Pred návštevou', '/'],
    ['Kontakt', '/'],
    ['Ozónoterapia', '/'],
  ];

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    console.log(isMenuOpen);
  };

  return (
    <>
      <nav className="sticky start-0 top-0 z-20 w-full bg-blue-400">
        <div className="flex flex-wrap items-center justify-center lg:justify-between">
          <a href="/" className="ml-4 flex items-start space-x-3 py-2">
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
          <div className="ml-auto hidden lg:flex">
            {buttons.map(([title, url]) => (
              <div
                className="font-extrabold text-white hover:bg-blue-300 hover:text-blue-500"
                key={title}
              >
                <a href={url} className="block px-4 py-4">
                  {title}
                </a>
              </div>
            ))}
          </div>
          <button
            type="button"
            className="ml-8 lg:ml-auto mr-4 hidden rounded-md bg-blue-600 px-4 py-2 text-center text-sm font-medium text-white transition duration-300 ease-in-out hover:bg-blue-700 min-[400px]:flex min-[400px]:w-auto"
          >
            Objednať sa
          </button>
          <button className="mr-4 lg:hidden" onClick={() => handleClick()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 stroke-current stroke-2 text-white transition duration-300 ease-in-out hover:text-blue-500"
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
      </nav>
      {isMenuOpen && (
        <div className="lg:hidden sticky start-0 top-0 z-20 w-full drop-shadow-2xl">
          {buttons.map(([title, url]) => (
            <div
              className="h-11 bg-blue-400 py-1 text-center text-sm font-bold text-white transition duration-300 ease-out hover:bg-blue-300 hover:text-blue-500"
              key={title}
            >
              <a href={url} className="block px-4 py-2">
                {title}
              </a>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
