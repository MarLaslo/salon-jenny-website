import { useContext } from 'react';
import { NavContext } from '../context/navContext';

function useNavRef() {
    const { navRef } = useContext(NavContext);

    return navRef;
};

export default useNavRef;