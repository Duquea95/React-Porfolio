import HeroSrc from '../../../assets/images/coding.jpeg'
import internet from '../../../assets/images/internet.png';
import cms from '../../../assets/images/cms.png';
import dynamic from '../../../assets/images/atom.png';
import internetWhite from '../../../assets/images/internet-white.png';
import cmsWhite from '../../../assets/images/cms-white.png';
import dynamicWhite from '../../../assets/images/atom-white.png';
import anthony from '../../../assets/images/anthony.png';
import mail from '../../../assets/images/mail.png'

export const homeObjOne = {
    imgBg: true,
    lightText: true,
    lightDesc: true,
    topLine: "Hi I'm",
    headline: "Anthony Duque",
    description: "Creating responsive and user-friendly web experiences.",
    buttonLabel: "View Works",
    imgStart: '',
    src: HeroSrc,
    // src: anthony,
    alt: ''
}
export const homeObjTwo = {
    lightBg: true,
    lightText: false,
    lightDesc: false,
    topLine: null,
    headline: null,
    description: "I’m a Manhattan-based web developer. I build web and mobile products that make you and your company proud. I can take your awesome design and marketing ideas and bring them to life, to all screen sizes, in a way that beautifully and effortlessly works",
    buttonLabel: "View Works",
    imgStart: '',
    // src: HeroSrc,
    src: anthony,
    alt: ''
}

// export const homeObjTwo = {
//     lightBg: true,
//     // lightText: true,
//     lightDesc: false,
//     // headline: "Anthony Duque",
//     description: "I’m a Manhattan-based web developer. I build web and mobile products that make you and your company proud. I can take your awesome design and marketing ideas and bring them to life, to all screen sizes, in a way that beautifully and effortlessly works.",
//     buttonLabel: "View Works",
//     position: 'center',
//     src: HeroSrc,
//     alt: ''
// }
export const homeObjThree = {
    lightBg: false,
    lightText: true,
    lightDesc: true,
    topLine: "Hi I'm",
    headline: "Anthony Duque",
    description: "I’m a Manhattan-based web developer. I build web and mobile products that make you and your company proud. I can take your awesome design and marketing ideas and bring them to life, to all screen sizes, in a way that beautifully and effortlessly works.",
    buttonLabel: "View Works",
    imgStart: '',
    src: HeroSrc,
    alt: ''
}

export const cards = {
    lightBg: false,
    lightText: true,
    lightDesc: true,
    topLine: null,
    position: "center",
    headline: null,
    description: null,
    cards: [
        {
            src: internetWhite,
            alt: "Internet Icon",
            title: "Front-End Development",
            description: "I create responsive web pages that are fast and flexible. My focus on user-friendly experiences and responsiviness will allow you to take your business to the next level." 
        },
        {
            src: cmsWhite,
            alt: "CMS Icon",
            title: "CMS Integration",
            description: "Integrating your site with CMS platform pavess the way for seamless growth, while giving you the freedom to easily update and manage your sites content."
        },
        {
            src: dynamicWhite,
            alt: "React Icon",
            title: "Best Practices Applied",
            description: "Each website is built on a solid code foundation based on current web standards, best SEO practices, and meet ADA compliancy."
        },
    ]
}

export const homeObjFour = {
    lightBg: false,
    lightText: true,
    lightDesc: true,
    topLine: "Duquea95@gmail.com",
    headline: "Contact",
    description: "Have a question or want to work together? Just get in touch!",
    buttonLabel: "View Works",
    imgStart: '',
    src: mail,
    alt: ''
}