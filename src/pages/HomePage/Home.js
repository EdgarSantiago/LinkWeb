import React, { Fragment, useRef } from 'react'
import {InfoSection, Pricing} from '../../components'
import {homeObjOne, homeObjTwo, homeObjThree, homeObjFour, homeObjFive, homeObjSix, homeObjSeven, homeObjEight} from './Data'

const Home = () => {

    return (
            <Fragment>
                <InfoSection id_scroll="obj1" {...homeObjOne}/> 
                <InfoSection id_scroll="obj2"  {...homeObjTwo}/>
                <InfoSection id_scroll="obj3"{...homeObjThree}/>
                <InfoSection id_scroll="obj4" {...homeObjFour}/>
                <InfoSection id_scroll="obj5" {...homeObjFive}/>
                <InfoSection id_scroll="obj6" {...homeObjSix}/>
                <Pricing id_scroll="finances"/>
                <InfoSection id_scroll="obj7" {...homeObjSeven}/>
                <Pricing id_scroll="services" preço_s='true'/>
                <InfoSection id_scroll="obj8" {...homeObjEight}/>

            </Fragment>
    )
}

export default Home
