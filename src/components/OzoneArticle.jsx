import { HydroMassage } from '../components/HydroMassage';
import useNavRef  from '../hooks/useNavRef';

export const OzoneArticle = () => {
    const navRef  = useNavRef();

    return (
        <div ref={navRef.spaRef} className="mt-10 pb-10 scroll-mt-20">
            <h2 className="mb-6 text-center text-3xl font-bold text-black md:text-4xl">
                SPA a ozónoterapia
            </h2>
            <div className="container mx-auto rounded-3xl border-b-2 border-slate-50/60 bg-slate-50/60 text-center shadow-lg">
                <div className="flex flex-col px-10 pt-10 md:px-20">
                    <div className="mb-10 text-justify">
                        <p className="mb-4 text-md text-black">
                            Ozonoterapia je celosvetovo uznávaná relaxačná a
                            liečivá procedúra pre psov, ktorá sa začala používať
                            po prvýkrát v 19. storočí. Zahŕňa perličkový kúpeľ s
                            ozónom, ktorý pôsobí blahodarne na zdravie psíka,
                            jeho imunitný systém kože a celkovú vitalitu. Ozón
                            má totižto sám o sebe až 3000-krát silnejšie
                            dezinfekčné účinky ako chlór.
                        </p>
                        <p className="mb-4 text-md text-black">
                            Ozón je tri-atómová forma kyslíka využívaná v
                            mnohých oblastiach ľudského života, okrem iného aj v
                            ozonoterapii pre psov. Vďaka pôsobeniu bubliniek
                            presýtených O3 je výborným pomocníkom v liečbe
                            rôznych kožných ochorení u psov. Pri samotnej
                            procedúre dochádza k okysličeniu krvi čím sa
                            zlepšuje činnosť krvného obehu, lymfatického systému
                            a tiež srdcová činnosť. Uvoľňuje sa aj napätie v
                            svaloch a uľahčuje sa dýchanie.
                        </p>
                        <p className="mb-4 text-md text-black">
                            Ozonoterapia má tiež antibakteriálne, antivírusové a
                            antimykotické účinky. Pôsobí protizápalovo,
                            urýchľuje hojenie rán a lieči hnisavé miesta na
                            koži. Jedným z najväčších benefitov, ktoré prináša,
                            je obmedzenie nadmerného pĺznutia. Podporuje rast
                            zdravej srsti a zmierňuje svrbenie aj alergie.
                        </p>
                        <p className="mb-4 text-md text-black">
                            Procedúra je vhodná pre všetky, aj staršie psíky,
                            ktoré majú menej pohybu, prípadne reumatické
                            problémy. Odporúča sa taktiež aj pre veľmi
                            aktívnych, napríklad služobných psov. Neodporúča sa
                            pre hárajúce a dojčiace fenky.
                        </p>
                        <p className="mb-4 text-md text-black">
                            Ozonoterapiu môže navštíviť samozrejme aj psík so
                            zdravou kožou, pre ktorého pôsobí procedúra
                            preventívne. Navyše je to pre psíka určitý druh
                            relaxu, ako taký psí wellness. Zástancami
                            ozonoterapie sú aj samotní lekári veterinárnej
                            dermatológie, ktorí danú procedúru odporúčajú
                            opakovať niekoľkokrát do roka, najmä po vystriedaní
                            ročných období.
                        </p>
                        <p className="mb-4 text-md text-black">
                            Nabudúce, keď budete rozmýšľať nad darčekom pre
                            vášho psa, zvážte možnosť absolvovania ozonoterapie,
                            pri ktorej si psík dopraje kombináciu hydromasáže a
                            ozónu. Ozonoterapia by mala byť spojená aj s
                            česaním, prípadne strihaním, ak to psík potrebuje,
                            preto myslite pri objednávke aj na tieto dodatočné
                            služby. Výsledkom bude zrelaxovaný psík s krásnou
                            voňavou srsťou, ktorá bude citeľne menej pĺznuť.
                        </p>
                    </div>
                </div>
                <HydroMassage />
            </div>
        </div>
    );
};
