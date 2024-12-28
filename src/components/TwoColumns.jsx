export const TwoColumns = ({ children }) => {
    return (
        <div className="container mx-auto mt-20 grid grid-cols-1 lg:grid-cols-2 gap-4 grid-flow-row">
            {children}
        </div>
    );
};