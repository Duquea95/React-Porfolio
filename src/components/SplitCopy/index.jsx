import React, {useState, useEffect} from 'react'
import Button from '../Button'
import { Link } from 'react-router-dom'
import './styles.css'

// const SplitCopy = ({ 
//     dimensions 
// }) => {

//     let width = dimensions*9
//     let height = dimensions/3
    
//     return(
//         <section className="row">
//             <div className="container-fluid">
//                 <div className="split-copy--container">
//                     <div 
//                     className="split-title"
//                     >
//                         <div className="title-top"> 
//                             <p>Hi, I am.</p>
//                         </div>
//                         <div className="title-bottom">
//                             <p>Anthony Duque</p>
//                         </div>
//                     </div>
//                     <div className="split-copy">
//                         <p>I’m a Manhattan-based web developer. I build web and mobile products that make you and your company proud. I can take your awesome design and marketing ideas and bring them to life, to all screen sizes, in a way that beautifully and effortlessly works.</p>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     )
// }

// export default SplitCopy

const SplitCopy = ({
    lightBg,
    topLine,
    lightText,
    lightDesc,
    headline,
    description,
    buttonLabel,
    src,
    alt,
    imgStart
}) => {
    
    return (
        <>
            <section>
                <div className={`${lightBg ? "hero" : "hero darkBg"}`}>
                    <div className="container-fluid">
                        <div className="row hero-row"
                        style={{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}
                        >
                            <div className="col">
                                <div 
                                className="home_hero-text-wrapper animate__animated animate__fadeIn"
                                >   
                                    <div className="top-line">{topLine}</div>
                                    <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                                    {/* <Link>
                                    <Button buttonSize={btn--wide} buttonColors={blue}>
                                    {buttonLabel}
                                    </Button>
                                    </Link> */}
                                </div>
                            </div>
                            <div className="col">
                                <p className={lightDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SplitCopy;