
import React from 'react'
import CustomForm from '../CustomForm'
import './styles.css'
const Contact = ({
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
    return(
        <section>
            <div className={`${lightBg ? "section" : "section darkBg"}`}>
                <div className="container-fluid">
                    <div className="row row-center center-text">
                        <div className="col">
                            <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                            <div className="header-bar"></div>
                            <p className={lightDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                            <div className="top-line align-center">
                                <img className="mail-icon" src={src} />
                                <a className={lightText ? "lightText" : "dark" } href="mailto:duquea95@gmail.com">{topLine}</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact