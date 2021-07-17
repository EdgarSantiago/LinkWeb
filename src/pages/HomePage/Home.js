import React, { Fragment } from 'react'
import {InfoSection} from '../../components'
import {homeObjOne, homeObjTwo} from './Data'

const Home = () => {
    return (
            <Fragment>
                <InfoSection {...homeObjOne}/>
                <InfoSection {...homeObjTwo}/>
            </Fragment>
    )
}

export default Home
