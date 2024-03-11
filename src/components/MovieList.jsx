import axios from 'axios';
import { useEffect, useState } from 'react';
import { baseImgURL, options } from '../constant';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const MovieList = ({ genre }) => {
    MovieList.propTypes = {
        genre: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
        }).isRequired,
    };
  const [movies, setMovies] = useState(null);

  // Gelen prop'taki kategorini id'sine göre
  // kategoriye ait film verisini çek ardından
  // bunları slider içerisnde listele
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/discover/movie?with_genres=${genre.id}`,
        options
      )
      .then((res) => setMovies(res.data.results));
  }, [genre.id]);

  return (
    <div className="p-4">
      <h1 className="mb-3">{genre.name}</h1>

      <Splide
        options={{
          gap: '20px',
          autoWidth: true,
          pagination: true,
        }}
      >
        {movies?.map((movie) => (
          <SplideSlide key={movie.id}>
            <Link to={`/detay/${movie.id}`}>
              <img
                className="movie"
                src={baseImgURL + movie.poster_path}
                alt={movie.title}
              />
            </Link>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
};

export default MovieList;