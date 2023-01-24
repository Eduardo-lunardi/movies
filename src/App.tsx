import { Card, Container, Filters, InfoMovie, Modal } from './components'
import React from 'react'

function App(): React.ReactElement {
  const [show, setShow] = React.useState(false)

  const movie = {
    'Title': 'The Batman', 'Year': '2022', 'Rated': 'PG-13', 'Released': '04 Mar 2022', 'Runtime': '176 min', 'Genre': 'Action, Crime, Drama', 'Director': 'Matt Reeves', 'Writer': 'Matt Reeves, Peter Craig, Bob Kane', 'Actors': 'Robert Pattinson, Zoë Kravitz, Jeffrey Wright', 'Plot': 'When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city\'s hidden corruption and question his family\'s involvement.', 'Language': 'English, Spanish, Latin, Italian', 'Country': 'United States', 'Awards': 'Nominated for 4 BAFTA 19 wins & 115 nominations total', 'Poster': 'https://m.media-amazon.com/images/M/MV5BMDdmMTBiNTYtMDIzNi00NGVlLWIzMDYtZTk3MTQ3NGQxZGEwXkEyXkFqcGdeQXVyMzMwOTU5MDk@._V1_SX300.jpg', 'Ratings': [{ 'Source': 'Internet Movie Database', 'Value': '7.8/10' }, { 'Source': 'Rotten Tomatoes', 'Value': '85%' }, { 'Source': 'Metacritic', 'Value': '72/100' }], 'Metascore': '72', 'imdbRating': '7.8', 'imdbVotes': '657,733', 'imdbID': 'tt1877830', 'Type': 'movie', 'DVD': '19 Apr 2022', 'BoxOffice': '$369,345,583', 'Production': 'N/A', 'Website': 'N/A', 'Response': 'True'
  }


  return (
    <Container>
      <Filters onClick={(e): void => console.log(e)} />
      <Modal show={show} onClose={(): void => setShow(!show)}>
        <InfoMovie
          actors={movie.Actors.split(',')}
          director={movie.Director}
          genre={movie.Genre}
          plot={movie.Plot}
          poster={movie.Poster}
          rated={movie.Rated}
          title={movie.Title}
          writer={movie.Writer}
          year={movie.Year}
        />
      </Modal>
      <Card
        onClick={(): void => setShow(!show)}
        title={movie.Title}
        banner={movie.Poster}
        country={movie.Country}
        filmDirector={movie.Director}
        year={movie.Year}
      />
    </Container>
  )
}

export default App
