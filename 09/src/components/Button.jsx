import React from 'react'

function Button({
    children,
    type="button",
    bgColor="",
    textColor="",
    className="",
    ...props
}) {
  return (
    <button
    type={type}
    className={`font-serif text-orange-200 border-2 bg-emerald-900 border-emerald-700  hover:bg-emerald-700 
      ${bgColor}
       ${textColor}
        ${className}`}
    {...props}
    >{children}</button>
  )
}

export default Button