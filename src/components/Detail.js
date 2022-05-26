import React, {useEffect} from 'react';
import { useLocation, useNavigate } from "react-router-dom";

function Detail() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.state === undefined) {
      navigate("/");
    } else if (location.state === null) {
      navigate("/");
    }
  });
  
  if (location.state) {
    return (
      <div className='de_movie'>
          <img src={location.state.poster} alt={location.state.title} title={location.state.title} />
          <div className='de_movie__data'>
            <h3 className='de_movie__title'>
              {location.state.title}
            </h3>
            <ul className='de_movie__genres'>
              {location.state.genres.map((genre, index) => {
                return <li key={index} className='de_movie__genre'>{genre}</li>
              })}
            </ul>
            <p className='de_movie_summary'>{location.state.summary}</p>
          </div>
        </div>
    );
  } else {
    return null;
  }
}

export default Detail;