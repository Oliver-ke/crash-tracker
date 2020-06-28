import React, { FC, ReactElement, MouseEvent } from 'react';



import './button.style.scss';

interface IButton {
  title: string
  onClickHandler: Function
  styleClass?: string
  iconName?: string
}

const Button: FC<IButton> = ({ title, onClickHandler, styleClass, iconName, }): ReactElement => {
  return (
    <button
      className={styleClass ? `${styleClass} custom-btn` : 'custom-btn'}
      onClick={(event: MouseEvent) => onClickHandler(event)}>
      {title}
      {iconName && (<i className={`fas fa-${iconName}`}></i>)}
    </button>
  )
}

export default Button;