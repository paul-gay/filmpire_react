import React, {useState, useEffect} from 'react';
import {Box, CircularProgress, useMediaQuery, Typography} from '@mui/material';
import {useSelector} from 'react-redux';

import {useGetMoviesQuery} from '../../services/TMDB';
import { MovieList } from '..';


function Movies() {
	// console.log('movies');
  const { data, error, isFetching } = useGetMoviesQuery();
  // console.log(data);

  if(isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="4rem" />
      </Box>
    );
  };

  // if 'movies' don't exist -- no data
  if(!data.results.length) {
    return (
      <Box display="flex" alignItems="center" mt="20px">
        <Typography variant="h4">
          No movies that match that name.
          <br />
          Please try searching something else.
        </Typography>
      </Box>
    );
  };

  if(error) return 'An error has occured.';

	return (
    <div>
      <MovieList movies={data} />
    </div>
  ); 
};

export default Movies;
