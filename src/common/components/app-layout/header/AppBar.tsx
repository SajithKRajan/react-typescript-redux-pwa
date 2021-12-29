
import { AppBar } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import UIConstants from '../../../constants/ui-constants';




export const CustomAppBar = withStyles((theme: Theme) => ({
    root: {
        backgroundColor: UIConstants.rootBgColor,
        border: '1px solid #C5FFFF',
        boxSizing: 'border-box',
        boxShadow: '0px 5px 8px rgba(0, 0, 0, 0.15)',
        borderRadius: 40,
        height: UIConstants.appBarHeight,
        margin: '0 55px 0 55px',
        width: `calc(100% - 110px)`
    }
}))(AppBar);
