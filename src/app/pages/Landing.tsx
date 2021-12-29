import { CustomAppBar } from "../../common/components/app-layout/header/AppBar";
import { useTranslation } from "react-i18next";
import { makeStyles } from "@mui/styles";
import { Grid, Theme, Typography } from "@mui/material";
import TsekmoLandingToolBar from "../components/ToolBar";
import UIConstants from "../../common/constants/ui-constants";

const useStyles = makeStyles((theme: Theme) => ({
    main: {
        top: '80px',
        position: 'relative',
        width: '100%',
        margin: `${theme.spacing(12)} ${theme.spacing(15)}`
    },
    heading: {
        margin: `0 ${theme.spacing(5)}`,
        maxWidth: '50%',
        '& .mainHeading': {
            fontWeight: 500,
            fontSize: '36px',
            lineHeight: '54px',
            fontFamily: UIConstants.appFont,
            color: UIConstants.primaryBgColor
        },
        '& .description': {
            marginTop: theme.spacing(4),
            fontWeight: 'normal',
            fontSize: '24px',
            lineHeight: '36px',
            fontFamily: UIConstants.appFont,
            color: UIConstants.primaryBgColor,
            opacity: '0.7'
        }
    },
    servicesTiles: {
        margin: `0 ${theme.spacing(5)}`,
    }
}));

export default function LandingPage() {
    const classes = useStyles();
    const { t } = useTranslation();
    return (
        <><CustomAppBar>
            <TsekmoLandingToolBar />
        </CustomAppBar>
            <main className={classes.main}>
                <div className={classes.heading}>
                    <Typography className="mainHeading">
                        {t('landingPage.mainHeading')}
                    </Typography>
                    <Typography className="description">
                        {t('landingPage.description')}
                    </Typography>
                </div>
                <Grid container spacing={4} className={classes.servicesTiles}>
                    <Grid item xs={4}>
                        
                    </Grid>
                    <Grid item xs={4}> </Grid>
                    <Grid item xs={4}></Grid>
                </Grid>
            </main>
        </>

    );
}
