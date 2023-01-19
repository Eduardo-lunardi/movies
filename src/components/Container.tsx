import React from 'react'

interface IProps {
    children: React.ReactNode
}

export default function Container(props: IProps): React.ReactElement {
    return (
        <div className='container' >{props.children}</div>
    )
}