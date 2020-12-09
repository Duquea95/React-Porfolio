import internet from '../assets/images/internet.png';
import cms from '../assets/images/cms.png';
import dynamic from '../assets/images/atom.png';

const Cards = [
    {
        id: 1,
        img: Object.values({ internet }),
        title: "Responsive Design",
        copy: "Unique web designs custom created specifically for you and your brand. Always beautiful and always user-friendly." 
    },
    {
        id: 2,
        img: Object.values({ cms }),
        title: "CMS Customization",
        copy: "Integration of your custom design into a content management system gives you the freedom to easily update and manage your sites content."
    },
    {
        id: 3,
        img: Object.values({ dynamic }),
        title: "Dynamic Code",
        copy: "Each website is built on a solid code foundation based on current web standards and best SEO practices."
    },
]


export default Cards