import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from 'axios';

export const About = () => {
  const API_URL_UPCOMING = 'https://api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1';
  const API_URL_TOP_RATED_TV = 'https://api.themoviedb.org/3/tv/{tv_id}?api_key=<<api_key>>&language=en-US';

  const [movies, setmovies] = useState([]);
  const [rating, setRating] = useState(0);

  useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(API_URL_UPCOMING);
			const filteredUpcomnigMovies = data.results.map( (movie: { title: any; overview: any; id: any; vote_average: any; }) => 
			{
				 return {
					 title: movie.title,
					 description: movie.overview,
					 id: movie.id,
					 rating:movie.vote_average
				 }
			});
			setMovies(filteredUpcomnigMovies);
		};

    fetchData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLFormElement>) => {
    const value = parseInt(e.target.value);
    event.preventDefault();
    const user = {
      name: rating
    };

    const request = await axios.post('URL_Post', user);
    console.log('Post', request);

  }

  console.log(movies);
	return <><Calculator/>

		<Link to='/'> Back to Home</Link>
		<form onSubmit={(e) => handleSubmit(e)}>
			<label>Name: </label>
			<input type='number' name='name' onChange={(e) => handleChange(e)} />
			<button type='submit'>Add</button>
		</form>
		<div>
		{movies.map( (movie:any) => ( 
			<div key={movie.id}>
				<h1>{movie.title}</h1>
				<p>{movie.description}</p>
				<span>rating {movie.rating}</span>
			</div>))}
		</div>
	</>
}