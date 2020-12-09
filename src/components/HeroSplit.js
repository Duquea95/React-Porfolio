import React, { useState } from 'react'

const HeroSplit = () => {
    const [isSquare, setSquare] = useState();
    const [isCircle, setCircle] = useState();
    const [isSquare2, setSquare2] = useState();
    const [isCircle2, setCircle2] = useState();
    
    const transitionCircle = (isCircle, isSquare) => {
        setSquare(isSquare);
        setCircle(isCircle);
    }

    const transitionSquare = (isSquare, isCircle) => {
        setCircle(isCircle);
        setSquare(isSquare);
    }
    
    const transitionCircle2 = (isCircle2, isSquare2) => {
        setSquare2(isSquare2);
        setCircle2(isCircle2);
    }

    const transitionSquare2 = (isSquare2, isCircle2) => {
        setCircle2(isCircle2);
        setSquare2(isSquare2);
    }
    
    return (
            <section className="row">
                <div className="hero-full">

                    <div className="row text-align--center hero-full">
                        <div className="hero-split full--height">
                            <div className="card-copy--container">

                                <Link onMouseLeave={() => transitionCircle(true,false)} onMouseEnter={() => transitionSquare(true,false)} className={`border-transition ${isSquare ? "shapeTransition" : ""}`} to={'About'} >
                                    
                                    <div className="border-hover">
                                        <div>
                                            <div className="margin-top--xl">
                                                <p>Want To Know More?</p>
                                            </div>
                                            <div className="margin-bottom--xl">
                                                <p>About Me</p>
                                            </div>
                                        </div>
                                    </div>

                                </Link>

                            </div>
                        </div>
                        <div className="hero-split full--height">
                            <div className="card-copy--container">

                                <Link onMouseLeave={() => transitionCircle2(true, false)} onMouseEnter={() => transitionSquare2(true, false)} className={`border-transition ${isSquare2 ? "shapeTransition" : ""}`}>

                                    <div className="border-hover">
                                        <div>
                                            <div className="margin-top--xl">
                                                <p>Need a service?</p>
                                            </div>
                                            <div className="margin-bottom--xl">
                                                <p>Contact Me</p>
                                            </div>
                                        </div>
                                    </div>

                                </Link>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
}

export default HeroSplit;