
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { ApplicationState } from '../../store';


export function AuthGuard({ children }: { children: JSX.Element }) {
    const location = useLocation();
    const { authData } = useSelector((state: ApplicationState) => state.app);
    if (!authData.isAuthenticated) {
        // Redirect them to the /login page, but save the current location they were
        // trying to go to when they were redirected. This allows us to send them
        // along to that page after they login, which is a nicer user experience
        // than dropping them off on the home page.
        return <Navigate to="/login" state={{ from: location }} />;
    }
    return children;
}


