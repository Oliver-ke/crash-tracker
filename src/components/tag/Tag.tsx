import React, { FC, ReactElement } from 'react';



import './tag.style.scss';

interface IButton {
  title: string
  styleClass?: string
}

const Button: FC<IButton> = ({ title, styleClass }): ReactElement => {
  return (
    <div
      className={styleClass ? `${styleClass} tag` : 'tag'}
    >
      <h6>{title}</h6>
    </div>
  )
}

export default Button;