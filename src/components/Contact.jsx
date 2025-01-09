import InstaIcon from '/src/assets/instagram.svg';
import FacebookIcon from '/src/assets/facebook.svg';
import LocationIcon from '/src/assets/location.svg';
import TelephoneIcon from '/src/assets/telephone.svg';
import useNavRef from '../hooks/useNavRef';

export const Contact = () => {
    const navRef = useNavRef();

    return (
        <div
            ref={navRef.contactRef}
            className="mt-10 w-full scroll-mt-20 pb-10"
        >
            <h2 className="mb-6 text-center text-3xl font-bold text-black md:text-4xl">
                Kontakt
            </h2>
            <div className="container mx-auto mt-6 flex flex-col space-y-2 rounded-3xl border-b-2 border-slate-50/60 bg-slate-50/60 p-12 lg:items-center lg:justify-between lg:space-x-4">
                <div>
                    <p className="break-words text-center text-2xl font-medium text-black">
                        Otváracie hodiny
                    </p>
                    <p className="mt-6 text-center text-xl font-normal text-black">
                        Podľa objednávok
                    </p>
                    <p className="text-1xl break-words text-center font-medium text-black">
                        Objednávky medzi 8:00 a 16:00 hod.
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row lg:space-x-4">
                    <div>
                        <p className="break-words pt-6 text-center text-2xl font-medium text-black">
                            Telefón a adresa
                        </p>
                        <div className="container mx-auto mt-6 flex w-96 flex-col space-y-2 rounded-3xl border-b-2 border-slate-50/60 bg-cyan-300/20 p-4 md:pl-10">
                            <div className="flex flex-row space-x-4">
                                <a href="tel:+421918701017" className="h-8 w-8">
                                    <img
                                        src={TelephoneIcon}
                                        alt="Telephone"
                                        className="h-8 w-8"
                                    />
                                </a>
                                <a
                                    href="tel:+421918701017"
                                    alt="+421918701017"
                                    rel="noopener noreferrer"
                                    className="text-md self-center font-semibold underline md:text-lg"
                                >
                                    <p>+421 918 701 017</p>
                                </a>
                            </div>
                            <div className="flex flex-row space-x-4">
                                <a
                                    href="https://maps.app.goo.gl/1qb7c6HeFvhbDxuUA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-8 w-8"
                                >
                                    <img
                                        src={LocationIcon}
                                        alt="Location"
                                        className="h-8 w-8"
                                    />
                                </a>
                                <a
                                    href="https://maps.app.goo.gl/1qb7c6HeFvhbDxuUA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-md self-center font-semibold underline md:text-lg"
                                >
                                    <p>Repná 664/8, 075 01 Trebišov</p>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div>
                        <p className="break-words pt-6 text-center text-2xl font-medium text-black">
                            Socialne siete
                        </p>
                        <div className="container mx-auto mt-6 flex w-96 flex-col space-y-2 rounded-3xl border-b-2 border-slate-50/60 bg-cyan-300/20 p-4 md:pl-10">
                            <div className="flex flex-row space-x-4">
                                <a
                                    href="https://www.instagram.com/salonprepsovjenny/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-8 w-8"
                                >
                                    <img
                                        src={InstaIcon}
                                        alt="Instagram"
                                        className="h-8 w-8"
                                    />
                                </a>
                                <a
                                    href="https://www.instagram.com/salonprepsovjenny/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-md self-center font-semibold underline md:text-lg"
                                >
                                    <p>salonprepsovjenny</p>
                                </a>
                            </div>
                            <div className="flex flex-row space-x-4">
                                <a
                                    href="https://www.facebook.com/profile.php?id=61559687371505"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="h-8 w-8"
                                >
                                    <img
                                        src={FacebookIcon}
                                        alt="Facebook"
                                        className="h-8 w-8"
                                    />
                                </a>
                                <a
                                    href="https://www.facebook.com/profile.php?id=61559687371505"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-md self-center font-semibold underline md:text-lg"
                                >
                                    <p>Salón a wellness pre psov Jenny</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
