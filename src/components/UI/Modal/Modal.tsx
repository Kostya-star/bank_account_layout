import { FC, ReactNode } from 'react'
import style from './Modal.module.scss'

interface IModalProps {
    children: ReactNode
}

export const Modal:FC<IModalProps> = ({ children }) => {
  return (
    <div className={style.modal}>
      {children}
    </div>
  )
}
