export const TwoRows = ({ children }) => {
    return (
        <div className="container mx-auto mt-20 grid grid-rows-2 gap-4">
            {children}
        </div>
    );
};