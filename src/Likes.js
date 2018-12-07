import React, {Component} from 'react'

function Likes(props) {
  const movieID = props.movie.id;
  const profiles = props.profiles;
  const users = props.users;
  const likedProfiles = profiles.filter(profile => Number(profile.favoriteMovieID) === movieID)
  
  if (likedProfiles.length > 0) {
  	return (
		<div>
			<p>Liked By:</p>
			<ul>
				{likedProfiles.map(profile => (
					<li key={profile.userID}>{users[profile.userID].name}</li>
				))}
			</ul>
		</div>
	)
	} else {
      return (
      <p>None of the current users liked this movie</p>
    	)
	}
}

export default Likes;