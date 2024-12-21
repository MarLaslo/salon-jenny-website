import { HomePage } from './pages/HomePage';
import { MainLayout } from './layouts/mainLayout';
import { BrowserRouter, Routes, Route} from "react-router";

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
      </Route>
    </Routes>
  </BrowserRouter>

  );
}

export default App;
