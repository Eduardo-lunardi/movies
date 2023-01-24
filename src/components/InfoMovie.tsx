interface IProps {
    title: string
    poster: string
    rated: string
    year: string
    genre: string
    plot: string
    writer: string
    director: string
    actors: string[]
}

export default function InfoMovie(props: IProps): React.ReactElement {
    return (
        <div className="movie" id="movie-card">
            <div className="movie__data" id="movie-data" >
                <div className="movie__poster">
                    <span className="movie__poster--fill">
                        <img src={`${props.poster}`} alt='poster' />
                    </span>
                    <span className="movie__poster--featured">
                        <img src={`${props.poster}`} alt='poster' />
                    </span>
                </div>
                <div className="movie__details">
                    <h2 className="movie__title">{props.title}</h2>
                    <ul className="movie__tags list--inline">
                        <li className="movie__rated">{props.rated}</li>
                        <li className="movie__year">{props.year}</li>
                        <li className="movie__year">{props.genre}</li>
                    </ul>
                    <p className="movie__plot">{props.plot}</p>
                    <div className="movie__credits">
                        <p><strong>Written by:</strong> {props.writer}</p>
                        <p><strong>Directed by:</strong> {props.director}</p>
                        <p><strong>Starring:</strong></p>
                        <ul className="movie__actors list--inline">
                            {props.actors.map((actor, idx) => <li key={actor}>{actor}{idx + 1 !== props.actors.length && ','}</li>)}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}