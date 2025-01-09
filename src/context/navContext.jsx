import { createContext, useRef } from 'react';

export const NavContext = createContext();

export const NavProvider = ({ children }) => {
    const homeRef = useRef();
    const priceListRef = useRef();
    const beforeVisitRef = useRef();
    const spaRef = useRef();
    const aboutRef = useRef();
    const contactRef = useRef();
    const galleryRef = useRef();

    const navRef = {
        homeRef,
        priceListRef,
        beforeVisitRef,
        spaRef,
        aboutRef,
        contactRef,
        galleryRef        
    };

    return (
        <NavContext.Provider value={{ navRef }}>
            {children}
        </NavContext.Provider>
    );
};
