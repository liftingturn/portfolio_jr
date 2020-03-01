import React from 'react'
import './App.css'

import FullPage from './Components/FullPage'

const fullpageOptions = {
    anchors: ['Top', 'second', 'third', 'fourth'],
    sectionsColor: ['#171b23', '#171b23', '#171b23', '#171b23'],
    callbacks: ['onLeave'],
    scrollingSpeed: 480,
    scrollOverflow: false,
    navigation: true,
    navigationPosition: 'right',
    navigationTooltips: ['Top', 'second', 'third', 'fourth'],
    autoScrolling: true,
    scrollHorizontally: true,
    keyboardScrolling: true
}

function App() {
    return <FullPage {...fullpageOptions} />
}

export default App
