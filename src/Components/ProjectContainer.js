import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    Typography,
    Grid,
    Link
} from '@material-ui/core'
import CardMedia from '@material-ui/core/CardMedia'
export default function ProjectContainer() {
    const classes = useStyles()
    return (
        <Grid container>
            <Grid container xs={12} sm={6} justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={require('../Images/err.jpg')}
                            title="errHadDuckImg"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                에러했덕
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                개인용 디버깅 로그 웹 페이지.
                                <br /> 역할 : 백엔드
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link
                            component="a"
                            variant="body2"
                            href="http://mysterious-journey.surge.sh/"
                        >
                            배포 주소
                        </Link>
                        <Link
                            component="a"
                            variant="body2"
                            href="https://www.notion.so/ErrorHadDuck-back-end-cbc9dc6e96034b0fa8b2499f278d359f"
                        >
                            자세한 정보
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
            <Grid container xs={12} sm={6} justify="center">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            className={classes.media}
                            image={require('../Images/memon-circle.png')}
                            title="memon이미지"
                        />
                        <CardContent>
                            <Typography
                                gutterBottom
                                variant="h5"
                                component="h2"
                            >
                                메몬
                            </Typography>
                            <Typography
                                variant="body2"
                                color="textSecondary"
                                component="p"
                            >
                                더치페이 기록 하이브리드 어플리케이션.
                                <br /> 역할 : 팀장 / 프론트엔드
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Link
                            component="a"
                            variant="body2"
                            href="https://play.google.com/store/apps/details?id=com.memon.app"
                        >
                            배포 주소
                        </Link>
                        <Link
                            component="a"
                            variant="body2"
                            href="https://www.notion.so/Memon-Front-end-562691d6199849679cc3b1d3c0cbc5ff"
                        >
                            자세한 정보
                        </Link>
                    </CardActions>
                </Card>
            </Grid>
        </Grid>
    )
}
const useStyles = makeStyles({
    root: {
        width: 345
        // maxWidth: 345
    },
    media: {
        height: 140,
        paddingTop: '56.25%', // 16:9,
        marginTop: '30'
    }
})
