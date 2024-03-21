'use client'

import { useContext } from 'react'
import { ModalContext } from './modalContext'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '..'

interface ModalProps {
  id: string
  title?: string
  description?: string
  children: React.ReactNode
}

const Modal = ({ id, title, description, children }: ModalProps) => {
  const { modalStates, closeModal } = useContext(ModalContext)

  return (
    <Dialog open={modalStates[id] || false} onOpenChange={() => closeModal(id)}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  )
}

export default Modal
