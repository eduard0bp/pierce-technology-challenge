'use client'

import { ReactNode, useState } from 'react'
import { ModalContext } from './modalContext'

interface ModalProviderProps {
  children: ReactNode
}

export const ModalProvider = ({ children }: ModalProviderProps) => {
  const [modalStates, setModalStates] = useState<{ [key: string]: boolean }>({})

  const openModal = (id: string) =>
    setModalStates({ ...modalStates, [id]: true })
  const closeModal = (id: string) =>
    setModalStates({ ...modalStates, [id]: false })

  return (
    <ModalContext.Provider value={{ modalStates, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  )
}
