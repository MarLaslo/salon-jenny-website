import { NavBar } from '../components/NavBar';
import { Outlet } from 'react-router';

export const MainLayout = ({ children }) => {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
