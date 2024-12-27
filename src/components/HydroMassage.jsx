import hydromassageContent from '../utils/hydromassageContent';

export const HydroMassage = () => {
    return (
        <div className=" mb-10">
            <h2 className="min-h-24 p-6 text-center text-3xl font-bold text-black md:text-4xl">
                Výhody hydromasážnej ozonoterapie
            </h2>
            <div className="px-10 pb-10">
                <table className="w-full table-auto border text-left">
                    <tbody>
                        {hydromassageContent.map((item) => {
                            return (
                                <tr key={item.function}>
                                    <td className="border border-black/40 px-4 py-2 font-semibold">
                                        {item.function}
                                    </td>
                                    <td className="border border-black/40 px-4 py-2">
                                        {item.description}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
