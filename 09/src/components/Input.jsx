import React from 'react'
import { useId } from 'react'
function Input({
    type="text",
    label,
    className="",
    ...props
},ref){
    const id=useId()
  return (<>
    {label && <label htmlFor={id}>{label}</label>}
  <input
  type={type}
  className={`border-2 rounded-lg font-serif text-emerald-900 bg-orange-200 border-emerald-900  hover:bg-orange-300 ${className}`}
  ref={ref}
  id={id}
  {...props}
  /></>
  )
}

export default React.forwardRef(Input)