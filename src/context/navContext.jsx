import { createContext, useRef } from 'react';

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
    const aboutRef = useRef();
    const priceListRef = useRef();

    const navRef = {
        aboutRef,
        priceListRef
    };

    return (
        <NavContext.Provider value={{ navRef }}>
            {children}
        </NavContext.Provider>
    );
};
