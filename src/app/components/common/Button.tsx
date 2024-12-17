import React from 'react'

type Props = {
  label: string
  textColor: string
  onClick?: any
}

function Button({ label, onClick, textColor }: Props) {
  return (
    <button
      onClick={onClick}
      className={`border-primary border ${textColor} py-3 px-6 round transition-transform  hover:animate-moveDiagonal`}
    >
      {label}{' '}
    </button>
  )
}

export default Button
