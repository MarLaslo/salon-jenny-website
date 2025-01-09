import { NavBar } from '../components/NavBar';
import { Outlet } from 'react-router';
import bgImage from '/src/assets/bg-image-1.jpg';
import useInitialState from '../hooks/useInitialState';
import { NavProvider } from '../context/navContext';

export const MainLayout = () => {
    const intialState = useInitialState();

    return (
        <div
            className="bg-fixed bg-center"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            <div
                className={`transition-opacity duration-700 ease-in ${intialState ? 'opacity-100' : 'opacity-0'}`}
            >
                <NavProvider>
                    <NavBar />
                    <main>
                        <Outlet />
                    </main>
                </NavProvider>
            </div>
        </div>
    );
};
