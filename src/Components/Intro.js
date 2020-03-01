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
                항상 배움의 자세를 가지는 개발자가 되고 싶습니다.
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
