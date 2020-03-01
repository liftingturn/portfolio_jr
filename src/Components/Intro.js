import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import '../Styles/FullPage.css'
import { Typography, Grid } from '@material-ui/core'

const Intro = () => {
    const classes = useStyles()
    return (
        <Grid>
            <Typography
                className={classes.titleName}
                component="h3"
                variant="h3"
            >
                이해준
            </Typography>
            <Typography
                className={classes.titleIntro}
                component="h4"
                variant="h4"
            >
                조금 더 편한 세상을 만드는 <br />
                개발자가 되고 싶습니다.
            </Typography>
        </Grid>
    )
}

const useStyles = makeStyles(theme => ({
    titleName: {
        color: '#fff',
        fontWeight: 600,
        marginBottom: theme.spacing(4)
    },
    titleIntro: {
        color: '#eee'
    }
}))

export default Intro
