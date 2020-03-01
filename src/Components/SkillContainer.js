import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid } from '@material-ui/core'

const SkillContainer = () => {
    const classes = useStyles()
    return (
        <Grid md="auto">
            <Typography
                className={classes.skillTitle}
                component="h2"
                variant="h2"
            >
                <b
                    style={{
                        borderTop: '1px solid lightGray',
                        borderBottom: '1px solid lightGray'
                    }}
                >
                    Skill
                </b>
            </Typography>
            <Typography
                className={classes.skillSubTitle}
                component="h4"
                variant="h4"
            >
                <b>💪🏻 Strong</b>
            </Typography>
            <Typography
                className={classes.skillItem1}
                component="h6"
                variant="h6"
            >
                JavaScript(ES6), React, Node, express, MySQL, AWS EC2 / RDS
            </Typography>
            <Typography
                className={classes.skillSubTitle}
                component="h4"
                variant="h4"
            >
                <b>👀 Experience</b>
            </Typography>
            <Typography
                className={classes.skillItem2}
                color="secondary"
                component="h6"
                variant="h6"
            >
                React Native, TypeScript, Redux, JWT, Sequelize, node-schedule
                Firebase,
            </Typography>
            <Typography
                className={classes.skillSubTitle}
                component="h4"
                variant="h4"
            >
                <b>⚙️ Tools</b>
            </Typography>
            <Typography
                className={classes.skillItem3}
                component="h6"
                variant="h6"
            >
                Github, Slack, Notion, VSCode, Miro, Zoom, Postman, Xshell
            </Typography>
        </Grid>
    )
}

const useStyles = makeStyles(theme => ({
    skillTitle: {
        color: '#fff',
        marginBottom: theme.spacing(8)
    },
    skillSubTitle: {
        color: '#fff',
        marginBottom: theme.spacing(4)
    },
    skillItem1: {
        color: '#5588ff',
        fontWeight: 600,
        marginBottom: theme.spacing(4)
    },
    skillItem2: {
        fontWeight: 600,
        marginBottom: theme.spacing(4)
    },
    skillItem3: {
        color: '#55dd55',
        fontWeight: 600,
        marginBottom: theme.spacing(4)
    }
}))

export default SkillContainer
