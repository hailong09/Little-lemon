import React from 'react'

const Button = ({ title, className, onClick }) => {
    return (
        <button className={className} onClick={onclick}>{title}</button>
    )
}

export default Button