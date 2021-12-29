
import { Button } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { withStyles } from '@mui/styles';
import UIConstants from '../../../constants/ui-constants';




export const PrimaryButton = withStyles((theme: Theme) => ({
    root: {
        backgroundColor: UIConstants.primaryBgColor,
        color: UIConstants.primaryColor,
        fontFamily: UIConstants.appFont,
        fontSize: "18px",
        fontWeight: 400,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '9px 22px',
        borderRadius: UIConstants.appBorderRadius,
        lineHeight: '27px',
    }
}))(Button);
