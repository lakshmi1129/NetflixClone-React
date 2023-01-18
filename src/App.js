import './App.css';
import Row from './components/Row'
import requests from './request';
import Banner from './components/Banner';
import Nav from './components/Nav'

function App() {
      return (
            <div className="App">
                  <header className="App-header">
                        <Nav/>
                  </header>

                  {/* banner */}
                  <Banner />

                  {/* first row trending */}
                  <Row title="Trending In India"
                        fetchurl={requests.fetchTrending}
                  />

                  <Row title="Netflix Originals"
                        fetchurl={requests.fetchNetflixOriginals}
                        isLargeRow={true}
                  />

                  <Row title="Top Rated"
                        fetchurl={requests.fetchTopRated}
                  />

                  <Row title="Action"
                        fetchurl={requests.fetchActionMovies}
                  />

                  <Row title="Comedy"
                        fetchurl={requests.fetchComedyMovies}
                  />

                  <Row title="Horror"
                        fetchurl={requests.fetchHorrorMovies}
                  />

                  <Row title="Romance"
                        fetchurl={requests.fetchRomanceMovies}
                  />

                  <Row title="Documentries"
                        fetchurl={requests.fetchDocumentaries}
                  />

            </div>
      );
}

export default App;
