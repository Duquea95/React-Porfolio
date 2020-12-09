import React, { useState } from 'react'
import Projects from './data/Projects'
import SliderContent from './SliderContent'

const Slider = () => {
    return (
        // <div css={sliderCSS}>
        <div>
            <SliderContent/>
        </div>
    );
}

// const sliderCSS = css`
//     position: relative;
//     height: 100vh;
//     width: 100vw;
//     margin: 0 auto;
//     overflow: hidden;
// `

export default Slider;