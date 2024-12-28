export const FlexRows = ({ children }) => {
    return (
        <div className="container mx-auto flex flex-row flex-wrap justify-center">
            {children}
        </div>
    );
};