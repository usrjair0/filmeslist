import { useEffect, useState } from "react"
import {MovieService} from "../../api/MovieService";

const Home = () => {
  const [movies, setMovies] = useState([])

  async function getMovies (){
    const { 
      data: { results }
    } = await MovieService.getMovies()
    console.log(results)

    setMovies(results)
  }

  useEffect(() => {
    getMovies();
  }, [])
  

  return (
    <section className="Home">
      {movies.map((movie)=>(
        <div key={movie.id}>
          <h1>{movie.title}</h1>
          <h2>{movie.vote_average}</h2>
        </div>
    ))}
    </section>
  )
}

export default Home