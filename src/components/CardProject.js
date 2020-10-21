import React from 'react'
import Modal from 'react-modal'

import './CardProject.css'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    transform             : 'translate(-50%, -50%)'
  }
}

const CardProject = ({ src, name, description, urlDeployed, urlGithub }) => {

  const [modalIsOpen,setIsOpen] = React.useState(false);

  const openModal = () => {
    setIsOpen(true)
  }
 
  const closeModal = () => {
    setIsOpen(false)
  }

  return (
    
    <>
      <img className='project' src={src} alt={name} onClick={openModal} />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='modalContainer'>

          <div className='modalHead'>
            <p className='modalClose' onClick={closeModal} />
          </div>

          <h3>{name}</h3>
          <a className='picProject' href={urlDeployed} target="_blank" rel="noopener noreferrer">
            <img className='modalImg' src={src} alt={name}/>
          </a>

          <div className='modalDes'>
            <p>{description}</p>
            <a className='projectCode' href={urlGithub} target="_blank" rel="noopener noreferrer">
              <p className='codeGithub'>Voir le code?</p>
            </a>

          </div>

        </div>
      </Modal>
    </>
  )
}

export default CardProject
