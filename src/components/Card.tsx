import Loader from './Loader'
import React from 'react'

interface IProps {
    title: string
    banner: string
    filmDirector?: string
    year: string
    country?: string
    onClick: React.MouseEventHandler<HTMLDivElement>
    loading: boolean
}

export default function Card(props: IProps): React.ReactElement {
    return (
        <div className='movie-card' onClick={props.onClick}>
            <div
                style={{ backgroundImage: `url(${props.banner})` }}
                className='movie-header'
            >
                {props.loading && <Loader />}
            </div>
            <div className='movie-content'>
                <div className='movie-content-header'>
                    <a href='#'>
                        <h3 className='movie-title'>{props.title}</h3>
                    </a>
                </div>
                <div className='movie-info'>
                    {!!props.filmDirector &&
                        <div className='info-section'>
                            <label>Directed by</label>
                            <span>{props.filmDirector}</span>
                        </div>}
                    <div className='info-section'>
                        <label>Year</label>
                        <span>{props.year}</span>
                    </div>
                    {!!props.country &&
                        <div className='info-section'>
                            <label>Country</label>
                            <span>{props.country}</span>
                        </div>}
                </div>
            </div>
        </div>
    )
}