import React from 'react'
// import Cards from '../../data/Cards'
import style from './style.css'

// const CopyCollection = ({  }) => {

//     return (
//         <React.Fragment>
//             <section className="row">
//                 <div className="container-fluid">
//                     <div className="card-collection">
//                         {Cards.map((card) => 
//                             <div 
//                             className="card-container"
//                             // style={{width, height}}
//                             >
//                                 <div className="inner-card">
//                                     <div className="card-img--container">
//                                         <img src={card.img} alt={card.title}/>
//                                     </div>
//                                     <div className="card-copy--container">
//                                         <p className="card-title">{card.title}</p>
//                                         <p className="card-copy">{card.copy}</p>
//                                     </div>
//                                 </div>
//                             </div>
//                         )}
//                     </div>
//                 </div>
//             </section>
//         </React.Fragment>
//         );
// }

// export default CopyCollection;

const CopyCollection = ({
    lightBg,
    lightText,
    lightDesc, 
    headline,
    position,
    cards,
    description,
}) => {
    console.log(cards)
    return (
        <>
            <section>
                <div className={`${lightBg ? "copy-collection" : "copy-collection darkBg"}`}>
                    <div className="container-fluid">
                        {description &&
                        <div className="row copy-collection__copy"
                        style={{display:'flex', justifyContent: position == 'center' ? 'center' : 'start' }}
                        >
                            <div className="col">
                                <p className={lightDesc ? 'home__hero-subtitle' : 'home__hero-subtitle dark'}>{description}</p>
                            </div> 
                        </div>
                        }
                        <div className="row"
                        // style={{display:'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}
                        >
                            <div className="card-collection">
                                <div 
                                className="card-collection-wrapper animate__animated animate__fadeIn"
                                >   
                                    {cards.map((card) => 
                                    <div className="col">
                                        <div 
                                        className="card-container"
                                        >
                                            <div className="inner-card">
                                                <div className="card-img--container">
                                                    <img src={card.src} alt={card.alt}/>
                                                </div>
                                                <div className="card-copy--container">
                                                    <p className={lightText ? 'card-title' : 'card-title dark'}>{card.title}</p>
                                                    <p className={lightText ? 'card-copy' : 'card-copy dark'}>{card.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    )}
                                    {/* <Link>
                                        <Button buttonSize={btn--wide} buttonColors={blue}>
                                        {buttonLabel}
                                        </Button>
                                    </Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CopyCollection;