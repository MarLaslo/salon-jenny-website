export const NavBar = () => {
  const buttons = [
    ['Domov', '/'],
    ['Cenník', '/'],
    ['Služby', '/'],
    ['O mne', '/'],
    ['Kontakt', '/'],
  ];

  return (
    <nav className="fixed start-0 top-0 z-20 w-full bg-blue-400">
      <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img
            src="src/assets/0.png"
            alt="Salon pre psov Jenny"
            className="m-0 w-10 p-0"
          />
          <span className="hidden self-center whitespace-nowrap text-2xl font-bold text-cyan-50 lg:order-1 lg:flex lg:w-auto">
            Salón pre psov Jenny
          </span>
        </a>
        <div className="flex space-x-3 md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="hidden rounded-md bg-blue-500 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 lg:order-1 lg:flex lg:w-auto"
          >
            Objednať sa
          </button>
        </div>
        <div
          className="flex w-auto items-center justify-between"
          id="navbar-sticky"
        >
          <div>
            {buttons.map(([title, url]) => (
              <a
                key={title}
                href={url}
                className="rounded-lg px-1 py-0 font-medium text-white hover:bg-blue-300 hover:text-blue-500 sm:px-3 sm:py-3"
              >
                {title}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
