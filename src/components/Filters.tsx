import React from 'react'

interface IFilter {
    az?: string
    year?: 'desc' | 'cres' | undefined
    country?: 'desc' | 'cres' | undefined
}

interface IProps {
    onClick: (e: IFilter) => void
}

export default function Filters(props: IProps): React.ReactElement {

    const [filter, setFilter] = React.useState<IFilter>({ az: undefined, year: undefined, country: undefined })

    function check(type: 'az' | 'year' | 'country'): void {
        const value = { ...filter }
        if (value[type] === 'cres')
            value[type] = 'desc'
        else if (value[type] === 'desc')
            value[type] = undefined
        else value[type] = 'cres'
        props.onClick(value)
        setFilter(value)
    }

    function icons(type: 'az' | 'year' | 'country'): React.ReactElement {
        if (!filter[type]) return <></>
        return <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="8px" height="8px" viewBox="0 0 292.362 292.361" xmlSpace="preserve">
            <g>
                {filter[type] === 'cres' &&
                    <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M286.935,197.287L159.028,69.381c-3.613-3.617-7.895-5.424-12.847-5.424s-9.233,1.807-12.85,5.424L5.424,197.287   C1.807,200.904,0,205.186,0,210.134s1.807,9.233,5.424,12.847c3.621,3.617,7.902,5.425,12.85,5.425h255.813   c4.949,0,9.233-1.808,12.848-5.425c3.613-3.613,5.427-7.898,5.427-12.847S290.548,200.904,286.935,197.287z"
                    />}
                {filter[type] === 'desc' &&
                    <path
                        xmlns="http://www.w3.org/2000/svg"
                        d="M286.935,69.377c-3.614-3.617-7.898-5.424-12.848-5.424H18.274c-4.952,0-9.233,1.807-12.85,5.424   C1.807,72.998,0,77.279,0,82.228c0,4.948,1.807,9.229,5.424,12.847l127.907,127.907c3.621,3.617,7.902,5.428,12.85,5.428   s9.233-1.811,12.847-5.428L286.935,95.074c3.613-3.617,5.427-7.898,5.427-12.847C292.362,77.279,290.548,72.998,286.935,69.377z"
                    />}
            </g>
        </svg>
    }

    return (
        <ol className="filters">
            <li onClick={(): void => check('az')}>
                <label className={`${filter.az !== undefined && 'check'}`}>
                    A-Z {icons('az')}
                </label>
            </li>
            <li onClick={(): void => check('year')}>
                <label className={`${filter.year !== undefined && 'check'}`}>
                    Year {icons('year')}
                </label>
            </li>
            <li onClick={(): void => check('country')}>
                <label className={`${filter.country !== undefined && 'check'}`}>
                    Country {icons('country')}
                </label>
            </li>
        </ol>
    )
}