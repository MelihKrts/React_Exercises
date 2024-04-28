import React from 'react'

export default function Button({ number, onClick, className }) {
    return (
        <>
            <button onClick={onClick} className={className}>{number}</button>
        </>
    )
}
