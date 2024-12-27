export const TwoRows = ({ children }) => {
    return (
        <div className="container mx-auto grid grid-rows-2 gap-4">
            {children}
        </div>
    );
};