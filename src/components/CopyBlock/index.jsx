import React from 'react'
import './styles.css'

export default function CopyBlock({lightBg, lightDesc, topLine, lightText, headline,description,imgStart, src,alt, position}){

    return(
        <>
          <section>
                <div className={`${lightBg ? "section" : "section darkBg"}`}
                >
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
                                    <p className={lightDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                                    
                                    {/* <Link>
                                        <Button buttonSize={btn--wide} buttonColors={blue}>
                                        {buttonLabel}
                                        </Button>
                                    </Link> */}
                                </div>
                            </div>
                            <div className="col">
                                <div className="home_hero-image-wrapper animate__animated animate__fadeIn">
                                    <img src={src} alt={alt} className=".home__hero-image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}