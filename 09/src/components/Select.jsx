import React,{useId} from 'react'

function Select({
    options,
    className="",
    label,
...props},ref){
    const id = useId()
  return (
    <div>
        {label && <label htmlFor={id}>{label}</label>}
        <select className={`font-serif text-emerald-900 bg-orange-200 border-emerald-900  hover:bg-orange-300  ${className}`} 
        {...props} 
        ref={ref}>
            {options?.map((option)=>(
              <option key={option} value={option}>
                    {option}
                    </option>))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)