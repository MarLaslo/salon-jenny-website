import beforeVisitContent from '../utils/beforeVisitContent';
import useNavRef from '../hooks/useNavRef';

export const BeforeVisit = () => {
    const navRef = useNavRef();

    return (
        <div ref={navRef.beforeVisitRef} className="mt-10 scroll-mt-20 pb-10">
            <h2 className="mb-6 text-center text-3xl font-bold text-black md:text-4xl">
                Pred návštevou salónu
            </h2>
            <div className="container mx-auto rounded-3xl pb-10 text-left">
                <div className="flex flex-col px-10 pt-10 md:px-20">
                    <ol>
                        {beforeVisitContent[0].guidelines.map((item) => (
                            <li
                                key={item.id}
                                className="text-md mb-4 text-black"
                            >
                                {item.id}. {item.text}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};
