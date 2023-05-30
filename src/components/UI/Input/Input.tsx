import { FC } from 'react'
import style from './Input.module.scss'

interface InputProps {
    type: string
    placeholder: string 
}

export const Input:FC<InputProps> = ({...props}) => {
  return (
    <input {...props} className={style.input}/>
  )
}
