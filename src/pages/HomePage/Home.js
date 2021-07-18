import React, { Fragment } from 'react'
import {InfoSection, Pricing} from '../../components'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive, homeObjSix, homeObjSeven, homeObjEight} from './Data'

const Home = () => {
    return (
            <Fragment>
                <InfoSection {...homeObjOne}/> 
                <InfoSection {...homeObjTwo}/>
                <InfoSection {...homeObjThree}/>
                <InfoSection {...homeObjFour}/>
                <InfoSection {...homeObjFive}/>
                <InfoSection {...homeObjSix}/>
                <Pricing />
                <InfoSection {...homeObjSeven}/>
                <Pricing preço_s='true'/>
                <InfoSection {...homeObjEight}/>

            </Fragment>
    )
}

export default Home
