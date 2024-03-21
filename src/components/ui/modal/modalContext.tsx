'use client'

import { createContext, useContext } from 'react'

interface ModalContextProps {
  modalStates: { [key: string]: boolean }
  openModal: (id: string) => void
  closeModal: (id: string) => void
}

export const ModalContext = createContext<ModalContextProps>({
  modalStates: {},
  openModal: () => {},
  closeModal: () => {}
})

export const useModal = () => useContext(ModalContext)
