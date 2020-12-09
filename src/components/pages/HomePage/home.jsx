import React from 'react'
import Hero from '../../Hero'
import {homeObjOne, homeObjTwo,homeObjThree,homeObjFour, cards} from  './data'
import SplitCopy from '../../SplitCopy';
import CardGrid from '../../CardGrid';
import CopyCollection from '../../CopyCollection';
import CopyBlock from '../../CopyBlock';
import Contact from '../../Contact';
// import Contact from '../../components/Contact';
// import {HeroImage} from '../../Images';

export default function Home(){
    return(
        <>
            <Hero {...homeObjOne} />
            <CopyBlock {...homeObjTwo}/>
            <CopyCollection {...cards}/>
            <CardGrid/>
            <Contact {...homeObjFour}/>
        </>
    )
}