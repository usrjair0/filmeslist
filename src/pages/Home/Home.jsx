import { useEffect, useState } from "react"
import {MovieService} from "../../api/MovieService";
import MovieCard from "../../components/MovieCard/MovieCard";

const Home = ({searchValueprop}) => {
  const [movies, setMovies] = useState([])

  async function getMovies (){
    const { 
      data: { results }
    } = await MovieService.getMovies()
    console.log(results)

    setMovies(results)
  }

  async function getMoviesSearch(movieString) {
    const {
      data: {results}, 
    } = await MovieService.searchMovies(movieString);

    setMovies(results);
  }
  

  useEffect(() => {
    getMovies();
  }, [])

  useEffect(() => {
    if (searchValueprop) {
      getMoviesSearch(searchValueprop);
    }
    if(searchValueprop=== ""){
      getMovies();
    }
  }, [searchValueprop])
  

  return (
    <section className="Home">
      {movies.map((movie)=>(
        <div key={movie.id}>
          <MovieCard movieProp={movie}/>
        </div>
    ))}
    </section>
  )
}

export default Home