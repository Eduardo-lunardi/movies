import React from 'react'

export default function Loader(): React.ReactElement {
    return (
        <div className="loader">
            <div className="loader__filmstrip">
            </div>
            <p className="loader__text">
                loading
            </p>
        </div>
    )
}