import React, { useState } from 'react'
import styled from 'styled-components'

const TodoItem = () => {
  const [isOpen,setIsOpen] = useState(false)

  const openModal = ()=>{
    setIsOpen(true)
  }

  const closeModal = () => {
    setIsOpen(false)
  }
  return (
    <div>
      <button onClick={openModal}>open</button>
      {isOpen && (
        <Modal>
          <StyledModalContent>
            <StyledClose onClick={closeModal}>❌</StyledClose>
            <p>modalnoe okna</p>
          </StyledModalContent>
        </Modal>
      )}
    </div>
  )
}

export default TodoItem

const Modal = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background: #676565;
display: flex;
justify-content: center;
align-items: center;
`
const StyledModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
  max-width: 400px;
  width: 100%;
`
const StyledClose = styled.span`
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
`