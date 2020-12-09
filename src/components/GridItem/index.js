import React, {useState} from 'react'
import Modal from 'react-modal'
import './styles.css'

export default function GridItem({project}){

    const [toggleOverlay, setToggleOverlay] = useState()
    const [modal, setModal] = useState(false)

    return(
      <div
        key={project.id}        
        className="project-card border-bottom--none dark"
      >
        <div
        className="grid-img--container"
        //   onClick={this.onModalOpen}
        onMouseEnter={() => setToggleOverlay(true)}
        onMouseLeave={() => setToggleOverlay(false)}
        >
          <img src={project.img} />
          <div className={`grid-img--overlay
          ${ toggleOverlay ? "" : "hidden"}`}
          >
            <div className="row">
              <div
                className={`grid-overlay-text--top animate__animated animate__fast ${
                toggleOverlay ? "animate__slideInDown" : ""}`}>
                <h4 className="card-title">{project.name}</h4>
              </div>
              <div
                className={`grid-overlay-text--bottom animate__animated animate__fast ${
                toggleOverlay ? "animate__slideInUp" : ""
              }`}>
                <div className="grid-img--border">
                  <a href={project.url}>Learn More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <Modal isOpen={this.state.showModal}>
          <span onClick={this.onModalClose}>X</span>
          <div className="modal_image__container">
            <img className="modal__image" alt={this.props.project.name} />
          </div>
          <div>
            <h2>{this.props.project.name}</h2>
            <p>{this.props.project.cms}</p>
            <p>{this.props.project.technologies}</p>
            <p>{this.props.project.copy}</p>
          </div>
        </Modal> */}
      </div>
    )
}