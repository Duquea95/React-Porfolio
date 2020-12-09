import React, {useState, useEffect} from 'react'
import Projects from './../../data/Projects'
import GridItem from '../GridItem'
import './styles.css'

export default function CardGrid({}){

    return(
        <section>
            <div className="section">
                <div className="container-fluid row">
                    <div className="card-grid--container">
                        <div className="margin-top--xl">
                            <h3 className="dark">Past Experience</h3>     
                        </div>
                                {/* <div className="margin-top--s row justify-content--center">
                                    <div className="project-filter">
                                        <ProjectFilter key={id} name={name} />)
                                    </div>
                                </div> */}
                        <div className="">
                            <div className="card-grid">
                                {Projects.map((project) => (
                                <GridItem project={project}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}