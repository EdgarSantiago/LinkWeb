import React, { Fragment } from 'react'
import {InfoSection} from '../../components'
import {homeObjOne} from './Data'

const Home = () => {
    return (
            <Fragment>
                <InfoSection {...homeObjOne}/>
            </Fragment>
    )
}

export default Home
