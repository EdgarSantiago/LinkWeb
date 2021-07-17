import React, { Fragment } from 'react'
import {InfoSection, Pricing} from '../../components'
import {homeObjOne, homeObjTwo} from './Data'

const Home = () => {
    return (
            <Fragment>
                <InfoSection {...homeObjOne}/>
                <InfoSection {...homeObjTwo}/>
                <Pricing/>
            </Fragment>
    )
}

export default Home
