import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

const Hero = ({
    imgBg,
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
    
    console.log(src)
    return (
        <>
            <section>
                <div className={`hero ${imgBg ? "imgBg" : ""}`}
                style={{backgroundImage: imgBg ? `url(${src})` : "" }}
                >
                    <div className="container-fluid"
                    style={{display: imgBg ? "flex" : "block",
                    height: "100vh"}}>
                        <div className="row hero-row"
                        style={{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}
                        // style={{display:'flex',backgroundImage: `url(${src})` }}
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
                            {!imgBg && 
                            <div className="col">
                                <div className="home_hero-image-wrapper animate__animated animate__fadeIn">
                                    <img src={src} alt={alt} className=".home__hero-image"/>
                                </div>
                            </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="overlay">

                </div>
            </section>
        </>
    );
}

export default Hero;

{/* 
         <React.Fragment>
             <section>
                 <div className={`${mainbg ? "hero" : "hero subBg"}`}>
                    <div className="row hero-container"
                     style={{backgroundImage: `url(${image[0].src})` }}
                     >
                         <div className="overlay">

                         </div>
                         <div 
                         className="hero__copy-container container-fluid"
                         >
                             <div className="align-self--center animate__animated animate__fadeIn">
                                 <div className="">
                                     <h1 className="type--xl">Web Developer</h1>
                                 </div>
                                 <div className="margin-top--xl">
                                     <h2>
                                         <span className="span-blue"></span> Creating unique web
                                         experiences.
                                     </h2>
                                 </div>
                             </div>
                         </div>
                         {/* <div 
                         className="hero__image-container"
                         >
                             <div 
                             className="hero-image"
                             >
                                 {image.map((image) =>
                                     <img
                                     src={image.src} alt={image .alt} 
                                     />
                                 )}
                             </div>
                         </div>
                     </div>
                 </div>
             </section>
         </React.Fragment> 
        */}


// const [state, setState] = useState({count: 0, hover: false})
    // const hover = state.hover
    // const count = state.count

    // let images = []
    // let imgTag = []
    // let temp = 0;
    

    // const createSlider = () => {
    //     Projects.map(project => (
    //         imgTag.push(<img onMouseEnter={hoverOn} onMouseLeave={hoverOff} className={`introHeroImage ${hover ? "introOverlay" : ""}`} src={project.src}/>)
    //     ))
    //     if (temp == 0) {
    //         setTimeout(createSlider , 6000)
    //         return imgTag[temp];
    //     }
    //     else{
    //         temp++
    //         setTimeout(createSlider , 6000)
    //         return imgTag[temp];
    //     }

    // }


    // const hoverOn = () => {

    //     setState(prevState => {
    //         return {hover: true}
    //     })

    //     console.log(state)
    // }

    // const hoverOff = () => {
    //     setState(prevState => {
    //         return {hover: false}
    //     })
    //     console.log(state)
    // }

    // slider = ("#my-slider");
    // rImg = (".right-img");
    // tint = (".tint");
    // link = (".links");
    // count = 0;
    // slider();

    // function slider() {
    //     for (var i = 0; i < rImg.length; i++) {
    //         rImg[i].style.display = "none";
    //     }

    //     count++;
    //     if (count > rImg.length) { count = 1 };
    //     rImg[count - 1].style.display = "grid";
    //     setTimeout(slider, 4000);
    // }

    // console.log({dimensions})