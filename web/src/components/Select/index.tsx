import React, {SelectHTMLAttributes} from 'react'

import './styles.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    label: string,
    name: string,
    options: Array<{
        value:string,
        label: string
    }>
}

const Select: React.FC<SelectProps> = ({ label, name, options, ...props }) => {
    return (
        <div className="select-block">
            <label htmlFor={name}>
                {label}
            </label>
            <select value="" id={name} {...props} autoComplete="off" >
                <option value="" disabled hidden>Selecione uma opção</option>
                {options.map(op => {
                    return(
                        <option value={op.value} key={op.value}>
                            {op.label}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default Select