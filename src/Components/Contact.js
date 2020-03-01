import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography } from '@material-ui/core'
import Footer from './Footer'

export default function Contact() {
    const classes = useStyles()
    return (
        <>
            <Typography className={classes.thanks} variant="h2" align="center">
                <b>🙇🏻‍♂️ 감사합니다 🙇🏻‍♂️</b>
            </Typography>
            <Footer />
        </>
    )
}

const useStyles = makeStyles(theme => ({
    thanks: {
        color: '#fff'
    }
}))
