
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import UIConstants from '../../common/constants/ui-constants';
import { ApplicationState } from '../../store';
import { setAuthenticationData } from '../../store/app/actions';
import { AppState, AuthData } from '../../store/app/types';

interface PropsFromState {
    authData: AuthData
}

interface PropsFromDispatch {
    setAuthData: typeof setAuthenticationData
}


type AllProps = PropsFromState & PropsFromDispatch;

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        background: UIConstants.rootBgColor,
        minHeight: '100vh',
        width: '100%'
    }
}));

function LoginPage({ authData, setAuthData }: AllProps) {
    let location = useLocation();
    let navigate = useNavigate();
    let locastate = location.state as any;
    let from = locastate?.from?.pathname || "/";

    setTimeout(() => {
        setAuthData({
            isAuthenticated: true,
            token: "fdf"
        });
    }, 5000);
    useEffect(() => {
        if (authData?.isAuthenticated) {
            navigate(from, { replace: true });
        }
    }, [authData]);
    const classes = useStyles();
    return (
        <div className={classes.root}>
            Login
        </div>
    );
}

const mapStateToProps = ({
    app
}: ApplicationState) => ({
    authData: app.authData 
});

const mapDispatchToProps = {
    setAuthData: setAuthenticationData
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage); 
