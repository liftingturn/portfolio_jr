import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import '../Styles/FullPage.css'
import { Typography, Container, Link, Grid } from '@material-ui/core'

const Footer = () => {
    const classes = useStyles()
    return (
        <Grid className={classes.footer}>
            <Container maxWidth="lg">
                {/* <Copyright /> */}
                <Typography variant="body2" color="primary" align="center">
                    {'Blog 👉🏻 '}
                    <Link
                        color="secondary"
                        href="https://medium.com/liftingturn"
                    >
                        https://medium.com/liftingturn
                    </Link>
                </Typography>
                <Typography variant="body2" color="primary" align="center">
                    {'email 👉🏻'}
                    <Typography
                        display="inline"
                        variant="body2"
                        color="secondary"
                        align="center"
                    >
                        haejoon.dev@gmail.com
                    </Typography>
                </Typography>
                <Typography variant="body2" color="primary" align="center">
                    {'github 👉🏻'}
                    <Link
                        color="secondary"
                        href="https://github.com/liftingturn"
                    >
                        https://github.com/liftingturn
                    </Link>
                </Typography>
            </Container>
        </Grid>
    )
}

const useStyles = makeStyles(theme => ({
    footer: {
        backgroundColor: 'inherit',
        marginTop: theme.spacing(4),
        padding: theme.spacing(3, 0)
    }
}))

export default Footer
