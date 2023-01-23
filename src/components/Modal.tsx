interface IProps {
    show: boolean
    onClose: React.MouseEventHandler<HTMLDivElement>
    children: React.ReactNode
}

export default function Modal(props: IProps): React.ReactElement {
    return (
        <div className={`modal ${props.show && 'modal-show'}`}>
            <div className="overlay" onClick={props.onClose} />
            <div className='content'>
                {props.children}
                <div className='close' onClick={props.onClose} >&times;</div>
            </div>
        </div>
    )
}