import React from 'react'
import ReactFullpage from '@fullpage/react-fullpage'
import Banner from './Banner'
import '../Styles/FullPage.css'
import Intro from './Intro'
import Footer from './Footer'
import SkillContainer from './SkillContainer'
import ProjectContainer from './ProjectContainer'

const FullPage = fullpageProps => {
    // const classes = useStyles();
    return (
        <ReactFullpage
            {...fullpageProps}
            render={({ state, fullpageApi }) => {
                return (
                    <div id="fullpage-wrapper">
                        <div className="section">
                            <Banner />
                            <Intro />
                            <Footer />
                        </div>
                        <div className="section">
                            <SkillContainer />
                        </div>
                        <div className="section">
                            <ProjectContainer />
                        </div>
                        <div className="section">
                            {/* <ThanksContainer /> */}
                        </div>
                    </div>
                )
            }}
        />
    )
}

export default FullPage
