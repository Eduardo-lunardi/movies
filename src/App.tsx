import { Card, Container, Filters, InfoMovie, Modal } from './components'
import { IFilter, order } from './components/Filters'
import { IOmdb } from './interfaces'
import React from 'react'

function App(): React.ReactElement {
  const [movies, setMovies] = React.useState([
    { 'Title': 'The Batman', 'Year': '2022', 'Rated': 'PG-13', 'Released': '04 Mar 2022', 'Runtime': '176 min', 'Genre': 'Action, Crime, Drama', 'Director': 'Matt Reeves', 'Writer': 'Matt Reeves, Peter Craig, Bob Kane', 'Actors': 'Robert Pattinson, Zoë Kravitz, Jeffrey Wright', 'Plot': 'When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city\'s hidden corruption and question his family\'s involvement.', 'Language': 'English, Spanish, Latin, Italian', 'Country': 'United States', 'Awards': 'Nominated for 4 BAFTA 19 wins & 115 nominations total', 'Poster': 'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg', 'Ratings': [{ 'Source': 'Internet Movie Database', 'Value': '7.8/10' }, { 'Source': 'Rotten Tomatoes', 'Value': '85%' }, { 'Source': 'Metacritic', 'Value': '72/100' }], 'Metascore': '72', 'imdbRating': '7.8', 'imdbVotes': '657,733', 'imdbID': 'tt1877830', 'Type': 'movie', 'DVD': '19 Apr 2022', 'BoxOffice': '$369,345,583', 'Production': 'N/A', 'Website': 'N/A', 'Response': 'True' },
    { 'Title': 'Avatar', 'Year': '2009', 'Rated': 'PG-13', 'Released': '18 Dec 2009', 'Runtime': '162 min', 'Genre': 'Action, Adventure, Fantasy', 'Director': 'James Cameron', 'Writer': 'James Cameron', 'Actors': 'Sam Worthington, Zoe Saldana, Sigourney Weaver', 'Plot': 'A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.', 'Language': 'English, Spanish', 'Country': 'United States', 'Awards': 'Won 3 Oscars. 89 wins & 131 nominations total', 'Poster': 'https://m.media-amazon.com/images/M/MV5BNjA3NGExZDktNDlhZC00NjYyLTgwNmUtZWUzMDYwMTZjZWUyXkEyXkFqcGdeQXVyMTU1MDM3NDk0._V1_SX300.jpg', 'Ratings': [{ 'Source': 'Internet Movie Database', 'Value': '7.9/10' }, { 'Source': 'Rotten Tomatoes', 'Value': '82%' }, { 'Source': 'Metacritic', 'Value': '83/100' }], 'Metascore': '83', 'imdbRating': '7.9', 'imdbVotes': '1,280,965', 'imdbID': 'tt0499549', 'Type': 'movie', 'DVD': '22 Apr 2010', 'BoxOffice': '$785,221,649', 'Production': 'N/A', 'Website': 'N/A', 'Response': 'True' },
    { 'Title': 'Avatar: The Way of Water', 'Year': '2022', 'Rated': 'PG-13', 'Released': '16 Dec 2022', 'Runtime': '192 min', 'Genre': 'Action, Adventure, Fantasy', 'Director': 'James Cameron', 'Writer': 'James Cameron, Rick Jaffa, Amanda Silver', 'Actors': 'Sam Worthington, Zoe Saldana, Sigourney Weaver', 'Plot': 'Jake Sully lives with his newfound family formed on the extrasolar moon Pandora. Once a familiar threat returns to finish what was previously started, Jake must work with Neytiri and the army of the Na\'vi race to protect their home.', 'Language': 'English', 'Country': 'United States', 'Awards': '12 wins & 45 nominations', 'Poster': 'https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_SX300.jpg', 'Ratings': [{ 'Source': 'Internet Movie Database', 'Value': '7.9/10' }, { 'Source': 'Rotten Tomatoes', 'Value': '77%' }, { 'Source': 'Metacritic', 'Value': '67/100' }], 'Metascore': '67', 'imdbRating': '7.9', 'imdbVotes': '167,554', 'imdbID': 'tt1630029', 'Type': 'movie', 'DVD': 'N/A', 'BoxOffice': 'N/A', 'Production': 'N/A', 'Website': 'N/A', 'Response': 'True' },
    { 'Title': 'John Wick', 'Year': '2014', 'Rated': 'R', 'Released': '24 Oct 2014', 'Runtime': '101 min', 'Genre': 'Action, Crime, Thriller', 'Director': 'Chad Stahelski, David Leitch', 'Writer': 'Derek Kolstad', 'Actors': 'Keanu Reeves, Michael Nyqvist, Alfie Allen', 'Plot': 'An ex-hit-man comes out of retirement to track down the gangsters that killed his dog and took his car.', 'Language': 'English, Russian, Hungarian', 'Country': 'United States, United Kingdom, China', 'Awards': '5 wins & 10 nominations', 'Poster': 'https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_SX300.jpg', 'Ratings': [{ 'Source': 'Internet Movie Database', 'Value': '7.4/10' }, { 'Source': 'Rotten Tomatoes', 'Value': '86%' }, { 'Source': 'Metacritic', 'Value': '68/100' }], 'Metascore': '68', 'imdbRating': '7.4', 'imdbVotes': '633,998', 'imdbID': 'tt2911666', 'Type': 'movie', 'DVD': '03 Feb 2015', 'BoxOffice': '$43,037,835', 'Production': 'N/A', 'Website': 'N/A', 'Response': 'True' },
  ])

  const [moreInfo, setMoreInfo] = React.useState<IOmdb>()

  React.useEffect(() => {
    const newOrder = [...movies]
    newOrder.sort((a, b) => {
      return parseInt(a.imdbVotes) - parseInt(b.imdbVotes)
    })
    setMovies(newOrder)

  }, [])

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

  return (
    <Container>
      <Filters onClick={(e, t): void => order(e, t)} />
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
      {movies.map(movie =>
        <Card
          onClick={(): void => setMoreInfo(movie)}
          title={movie.Title}
          banner={movie.Poster}
          country={movie.Country}
          filmDirector={movie.Director}
          year={movie.Year}
          key={movie.Title}
        />
      )}
    </Container>
  )
}

export default App
