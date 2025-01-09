import photo from '/src/assets/Jarimil2.jpg';
import { useContext } from 'react';
import { NavContext } from '../context/navContext';

export const About = () => {
    const { navRef } = useContext(NavContext);

    return (
        <div ref={navRef.aboutRef} className="mt-10 pb-10 scroll-mt-20">
            <h2 className="mb-6 text-center text-3xl font-bold text-black md:text-4xl">
                O mne
            </h2>
            <div className="container mx-auto rounded-3xl border-b-2 border-cyan-300/20 bg-cyan-300/20 text-center italic shadow-lg">
                <div className="flex flex-col px-10 pt-10 md:px-20">
                    <div className="mb-10 pt-10 text-justify">
                        <img className="float-left h-72 p-4" src={photo}></img>
                        <p className="mb-4 text-lg text-black">
                            Vítajte na mojej stránke! Volám sa Jarmila a už od
                            malička mám hlboký vzťah k zvieratám, najmä k psom,
                            ktorí sú mojou srdcovou záležitosťou. Práve oni
                            stáli na začiatku mojej cesty pred viac ako 20
                            rokmi, keď som sa rozhodla sama doma upravovať
                            svojich pudlíkov. Moja práca sa vtedy zapáčila
                            veterinárovi, ktorý mi ponúkol prácu v salóne na
                            jeho klinike. Bolo to krásne obdobie, počas ktorého
                            som získala množstvo skúseností. Prešlo mi rukami
                            veľa psíkov s rôznymi povahami a rôznym stavom
                            srsti, a každý z nich ma niečo nové naučil.
                        </p>
                        <p className="mb-4 text-lg text-black">
                            Po čase, keď som sa ocitla na materskej, mi môj
                            manžel vnukol myšlienku otvoriť si vlastný salón
                            priamo doma. Zo začiatku som mala obavy, no dnes
                            viem, že to bolo jedno z najlepších rozhodnutí môjho
                            života. Absolvovala som ešte individuálny kurz a v
                            roku 2011 vznikol salón Jenny, pomenovaný po mojom
                            milovanom pudlíkovi. Rada sa posúvam ďalej a preto
                            pravidelne absolvujem rôzne semináre, aby som mohla
                            svojim zákazníkom ponúknuť čo najvyššiu odbornosť.
                        </p>
                        <p className="mb-4 text-lg text-black">
                            V salóne používam kvalitnú certifikovanú kozmetiku
                            IV SAN BERNARD, ktorú vždy vyberám podľa potrieb
                            konkrétneho psíka, pretože každý z nich si zaslúži
                            osobitnú starostlivosť a láskyplný prístup.
                        </p>
                        <p className="mb-4 text-lg text-black">
                            Teším sa na stretnutie s vaším štvornohým miláčikom
                            a na to, že mu môžem priniesť krásu a pohodlie v
                            priateľskom, čistom prostredí.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
