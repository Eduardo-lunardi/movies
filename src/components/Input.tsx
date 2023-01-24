import React from 'react'

interface IProps {
    onChange: (value: string) => void
    onClear: () => void
    disabled?: boolean
    placeholder: string
}

export default function Input(props: IProps): React.ReactElement {
    const [value, setValue] = React.useState('')
    const [clear, setClear] = React.useState(false)

    function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>): void {
        if (event.key === 'Enter' && !props.disabled && value.length) {
            props.onChange(value)
            setClear(true)
        }
    }

    function clickSearch(): void {
        if (value.length && !props.disabled && value.length) {
            props.onChange(value)
            setClear(true)
        }
    }

    function clearSearch(): void {
        setValue('')
        setClear(false)
        props.onClear()
    }

    return (
        <label className="autoComplete_wrapper">
            <svg xmlns="http://www.w3.org/2000/svg" focusable="false" x="0px" y="0px" width="30" height="30" viewBox="0 0 171 171" style={{ fill: '#000000' }} onClick={clickSearch}>
                <g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{ mixBlendMode: 'normal' }}>
                    <path d="M0,171.99609v-171.99609h171.99609v171.99609z" fill="none"></path>
                    <g fill="#49b293">
                        <path d="M74.1,17.1c-31.41272,0 -57,25.58728 -57,57c0,31.41272 25.58728,57 57,57c13.6601,0 26.20509,-4.85078 36.03692,-12.90293l34.03301,34.03301c1.42965,1.48907 3.55262,2.08891 5.55014,1.56818c1.99752,-0.52073 3.55746,-2.08067 4.07819,-4.07819c0.52073,-1.99752 -0.0791,-4.12049 -1.56818,-5.55014l-34.03301,-34.03301c8.05215,-9.83182 12.90293,-22.37682 12.90293,-36.03692c0,-31.41272 -25.58728,-57 -57,-57zM74.1,28.5c25.2517,0 45.6,20.3483 45.6,45.6c0,25.2517 -20.3483,45.6 -45.6,45.6c-25.2517,0 -45.6,-20.3483 -45.6,-45.6c0,-25.2517 20.3483,-45.6 45.6,-45.6z"></path>
                    </g>
                </g>
            </svg>
            <input
                type="text"
                tabIndex={1}
                value={value}
                onChange={(e): void => { setValue(e.target.value) }}
                onKeyDown={handleKeyDown}
                disabled={props.disabled}
                placeholder={props.placeholder}
            />
            {clear && <button className='clear' onClick={clearSearch} type='button'>&times;</button>}
        </label>
    )
}