
import { Theme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import UIConstants from '../../common/constants/ui-constants';


const useStyles = makeStyles((theme: Theme) => ({
    root: {
        background: UIConstants.rootBgColor,
        minHeight: '100vh',
        width: '100%'
    }
}));

export default function HomePage() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
Home
        </div>
    );
}
