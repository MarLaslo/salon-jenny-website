import beforeVisitContent from '../utils/beforeVisitContent';

export const BeforeVisit = () => {
    return (
        <div className="pb-10  mt-10">
            <h2 className="mb-6 text-center text-3xl font-bold text-black md:text-4xl">
                Pred návštevou salónu
            </h2>
            <div className="container pb-10 mx-auto rounded-3xl border-b-2 border-slate-50/60 bg-slate-50/60 text-left shadow-lg">
                <div className="flex flex-col px-10 pt-10 md:px-20">
                    <ol>
                        {beforeVisitContent[0].guidelines.map((item) => (
                            <li
                                key={item.id}
                                className="mb-4 text-md text-black"
                            >
                                {item.id}.{' '}
                                {item.text}
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
};
