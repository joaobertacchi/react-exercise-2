import React, {Component} from 'react'
import Likes from './Likes'

function Movie(props) {
  	const movie = props.movie;
 	return (
		<div>
			<h2>{movie.name}</h2>
			<Likes movie={movie} users={props.users} profiles={props.profiles}/>
		</div>
    ) 
}

export default Movie;