import React, { createContext, useState } from 'react'

interface iModalContext {
  showModal: boolean
  open: () => void
  close: () => void
}

export const ModalContext = createContext<iModalContext>({
  showModal: false,
  open: () => {},
  close: () => {},
})


export const ModalState = ({ children }: { children : React.ReactNode}) => {
  const [showModal, setShowModal] = useState(false)

  const open = () => setShowModal(true)
  const close = () => setShowModal(false)

  return (
    <ModalContext.Provider value={{
      showModal,
      open,
      close
    }}>
      {children}
    </ModalContext.Provider>
  )
}
