import JA from '../assets/images/jonathan-adler.jpg'
import BMCC from '../assets/images/bmcc-school.jpg'
import CB from '../assets/images/coco-breezy.jpg'
// import JB from '../assets/images/JB.png'
import BB from '../assets/images/billys-bakery.png'
import ML from '../assets/images/morgan-lane-lp.jpg'
import NYSL from '../assets/images/ssl.jpg'

const Projects = [
  {
    id: 1,
    name: "Jonathan Adler",
    url: "https://jonathanadler.com",
    img: Object.values({ JA }),
    copy:
      "For JA, I worked with a designer to design and develop the homepage based on Sketch file mockups at least twice a week. Designed and developed the J'Approved Blog Landing Page and developed Jonathan Adler blog posts. Created components for reusability, decreasing site loading time. Developed daily marketing emails on Bronto and Listrak after changning ESPs. Integrated Listrak's APIs to salesforce site using ",
    cms: "Salesforce, Shopify",
    technologies: "HTML, CSS, Javascript, DemandwareScript",
  },
  {
    id: 2,
    name: "BMCC",
    url: "bmcc.cuny.edu",
    img: Object.values({ BMCC }),
    copy: "My responsibilities at BMCC included working with a designer to redesign and develop the homepage, redesigning and developing all academic curriculum pages, and developing templates for repeated sections.",
    cms: "Wordpress",
    technologies: "HTML, CSS, Javascript, PHP",
  },
  {
    id: 3,
    name: "New York Sports Science Lab",
    url: "https://nysportssciencelab.com",
    img: Object.values({ NYSL }),
    copy: "",
    cms: "Wordpress",
    technologies: "HTML, CSS, Javascript",
  },
  {
    id: 4,
    name: "Morgan Lane",
    url: "https://morgan-lane.com",
    img: Object.values({ ML }),
    copy: "Morgan Lane was a client I worked with during my time freelancing for Ross Brand Partners. My contribution to the site include redeveloping the navbar, making the website responsive across all devices, integrating a Klaviyo subscription form, and assisting in development of the product detail page. The client also requested for the PDPs to have certain product care details for.",
    cms: "Shopify",
    technologies: "HTML, CSS, Javascript, Liquid",
  },
  {
    id: 5,
    name: "Billy's Bakery",
    url: "https://billysbakerynyc.com/",
    img: Object.values({ BB }),
    copy: "Billy's Bakery was a client I worked with during my time freelancing for Ross Brand Partners. I assisted in designing and redeveloping the homepage and collections page. The redevelopment process also required making the pages responsive and mobile-friendly. I also integrated a Klaviyo subscription form to the site's footer to allow users to subscribe to their mailing list.",
    cms: "Shopify",
    technologies: "HTML, CSS, Javascript, Liquid",
  },
  {
    id: 6,
    name: "Coco & Breezy",
    url: "https://cocoandbreezy.com/",
    img: Object.values({ CB }),
    copy: "During my time at Coco & Breezy, I was given the task of setting up their online storefront on Shopify. I used a pre-existing theme to start, and developed custom sections to allow the client to manipulate dynamic content. I also developed the store locations page and used custom javascript to allow users to filter through stores by the state they are located in. When sales and website traffic began to increase, I integrated Mailchimp and added a subcription form to the footer. This allowed the client to collect emails and use them to reach out to shoppers regarding promotional sales and new releases.",
    cms: "Shopify",
    technologies: "HTML, CSS, Javascript, Liquid",
  },
];

export default Projects