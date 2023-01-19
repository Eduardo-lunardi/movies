import React from 'react'

interface IProps {
    title: string
    banner: string
    filmDirector: string
    year: string
    country: string
}

export default function Card(props: IProps): React.ReactElement {
    return (
        <div className='movie-card'>
            <div
                style={{ backgroundImage: `url(${props.banner})` }}
                className='movie-header'
            />
            <div className='movie-content'>
                <div className='movie-content-header'>
                    <a href='#'>
                        <h3 className='movie-title'>{props.title}</h3>
                    </a>
                </div>
                <div className='movie-info'>
                    <div className='info-section'>
                        <label>Diretor</label>
                        <span>{props.filmDirector}</span>
                    </div>
                    <div className='info-section'>
                        <label>Ano</label>
                        <span>{props.year}</span>
                    </div>
                    <div className='info-section'>
                        <label>País</label>
                        <span>{props.country}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}