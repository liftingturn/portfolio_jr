import React from 'react'
import { Paper, Grid, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import Intro from './Intro'
import Footer from './Footer'

export default function Banner() {
    const classes = useStyles()

    return (
        <Paper className={classes.mainPost}>
            {
                <img
                    style={{ display: 'none' }}
                    src="https://source.unsplash.com/user/erondu"
                    alt="background"
                />
            }
            <div className={classes.overlay} />
            <Grid container justify="center">
                <Grid item md={6} style={{ marginRight: '40%' }}>
                    <div className={classes.mainContent}>
                        <Typography
                            component="h2"
                            variant="h3"
                            color="inherit"
                            gutterBottom
                            align="center"
                        >
                            Junior Web Developer
                        </Typography>
                        <Intro />
                        <Footer />
                    </div>
                </Grid>
            </Grid>
        </Paper>
    )
}

const useStyles = makeStyles(theme => ({
    mainPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage:
            'url(https://images.unsplash.com/photo-1484417894907-623942c8ee29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
    },
    overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)'
    },
    mainContent: {
        position: 'relative',
        padding: theme.spacing(3),
        [theme.breakpoints.up('md')]: {
            padding: theme.spacing(7),
            paddingRight: 0
        }
    }
}))
