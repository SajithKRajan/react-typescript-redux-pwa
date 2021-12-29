
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import UIConstants from '../../common/constants/ui-constants';
import logo from "../../assets/images/logo.svg";
import Toolbar from '@mui/material/Toolbar';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { PrimaryButton } from '../../common/components/app-layout/buttons/PrimaryButton';

const useStyles = makeStyles((theme: Theme) => ({
    toolBar: {
        height: '100%'
    },
    logo: {
        cursor: "pointer",
    },
    navlinks: {
        marginLeft: 'auto',
        display: "flex",
        minHeight: '28px',
    },
    link: {
        textDecoration: "none",
        color: UIConstants.primaryBgColor,
        fontSize: "18px",
        fontWeight: 400,
        marginLeft: theme.spacing(4),
        lineHeight: '27px',
        opacity: '50%',
        "&:hover": {
            borderBottom: `1px solid ${UIConstants.primaryBgColor}`,
        }
    },
    loginButton: {
        marginLeft: theme.spacing(4),
    }
}));

export default function TsekmoLandingToolBar() {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <Toolbar className={classes.toolBar}>
            <img className={classes.logo}
                src={logo}
                alt={t('appName')}
                loading="lazy"
            />
            <div className={classes.navlinks}>
                <Link to={{ pathname: '/signup', search: '?isHost=true' }} className={classes.link}>
                    {t('landingPageToolBar.hostSignUp')}
                </Link>
                <Link to="/signup" className={classes.link}>
                    {t('landingPageToolBar.signUp')}
                </Link>
            </div>
            <PrimaryButton name='login-button' variant="contained" size='small' className={classes.loginButton}>{t('landingPageToolBar.login')}</PrimaryButton>
        </Toolbar>
    );
}
