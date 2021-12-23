
import { Route, Routes } from 'react-router-dom';
import HomePage from './app/pages/Home';
import LoginPage from './app/pages/Login';
import { AuthGuard } from './common/components/AuthGuard';


const MainRoutes = () => (
  <Routes>
    <Route path="/login" element={<LoginPage />} />
    <Route
      path="/" element={
        <AuthGuard >
          <HomePage />
        </AuthGuard>
      }
    />
    < Route element={< div > Not Found</div >} />
  </Routes >
);

export default MainRoutes;
