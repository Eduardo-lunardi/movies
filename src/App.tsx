import { Card, Container, Filters, InfoMovie, Input, Loader, Modal } from './components'
import { IFilter, order } from './components/Filters'
import { IOmdb } from './interfaces'
import React from 'react'

function App(): React.ReactElement {
  const [loading, setLoading] = React.useState(false)
  const [loadingMore, setLoadingMore] = React.useState('')
  const [movies, setMovies] = React.useState<IOmdb[]>([])
  const [moreInfo, setMoreInfo] = React.useState<IOmdb>()
  const [error, setError] = React.useState('')

  const idsMovies = [
    'tt1630029', // avatar 2
    'tt0499549', // avatar
    'tt2911666', // john wick
    'tt1877830', // the batman
    'tt0094721', // beetlejuice
    'tt0327597', // coraline
    'tt7659908', // fauno
    'tt1288558', // evil dead
    'tt0360486', // constantine
  ]

  React.useEffect(() => {
    initialMovies()
  }, [])

  async function initialMovies(): Promise<void> {
    setError('')
    setLoading(true)
    const firstMovies: IOmdb[] = []
    for (let idx = 0; idx < idsMovies.length; idx++) {
      await fetch(`https://www.omdbapi.com?i=${idsMovies[idx]}&apikey=2b63372b`)
        .then(response => response.json())
        .then(data => { firstMovies.push(data) })
    }
    firstMovies.sort((a, b) => {
      return parseInt(a.imdbVotes) - parseInt(b.imdbVotes)
    })
    setMovies(firstMovies)
    setLoading(false)
  }


  function order(order: IFilter, type?: order): void {
    const newOrder = [...movies]
    newOrder.sort((a, b) => {
      if (type === 'az' && order[type]) {
        if (order[type] === 'cres') {
          return a.Title.localeCompare(b.Title)
        }
        return b.Title.localeCompare(a.Title)
      }
      if (type === 'year' && order[type]) {
        if (order[type] === 'cres') {
          return parseInt(a.Year) - parseInt(b.Year)
        }
        return parseInt(b.Year) - parseInt(a.Year)
      }
      if (type === 'country' && order[type]) {
        if (order[type] === 'cres') {
          return a.Country.localeCompare(b.Country)
        }
        return b.Country.localeCompare(a.Country)
      }
      return parseInt(a.imdbVotes) - parseInt(b.imdbVotes)
    })

    setMovies(newOrder)
  }

  async function searchMovie(title: string): Promise<void> {
    setError('')
    setLoading(true)
    setMovies([])
    await fetch(`https://www.omdbapi.com?s=${title}&apikey=2b63372b&type=movie`)
      .then(response => response.json())
      .then(data => {
        if (data.Error) {
          setError(data.Error)
        } else {
          setMovies(data.Search)
        }
      })
      .finally(() => setLoading(false))
  }

  async function byId(id: string): Promise<void> {
    setLoadingMore(id)
    await fetch(`https://www.omdbapi.com?i=${id}&apikey=2b63372b&type=movie`)
      .then(response => response.json())
      .then(data => setMoreInfo(data))
      .finally(() => setLoadingMore(''))
  }


  return (
    <Container>
      <Input
        onChange={(e): void => { searchMovie(e) }}
        onClear={initialMovies}
        disabled={loading}
        placeholder='Type any movie title'
      />
      <Filters onClick={(e, t): void => order(e, t)} />
      {!!error && error}
      <Modal show={!!moreInfo} onClose={(): void => setMoreInfo(undefined)}>
        {!!moreInfo &&
          <InfoMovie
            actors={moreInfo.Actors.split(',')}
            director={moreInfo.Director}
            genre={moreInfo.Genre}
            plot={moreInfo.Plot}
            poster={moreInfo.Poster}
            rated={moreInfo.Rated}
            title={moreInfo.Title}
            writer={moreInfo.Writer}
            year={moreInfo.Year}
          />}
      </Modal>
      {loading && <Loader />}
      {movies.map(movie =>
        <Card
          onClick={(): void => { byId(movie.imdbID) }}
          title={movie.Title}
          banner={movie.Poster}
          country={movie.Country}
          filmDirector={movie.Director}
          year={movie.Year}
          key={movie.imdbID}
          loading={loadingMore === movie.imdbID}
        />
      )}
    </Container>
  )
}

export default App
