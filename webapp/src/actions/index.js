import axios from 'axios';

const URL_ROUTE = 'http://localhost:3000';

// TODO: These should be moved into their own file before the project grows.
export const FETCH_SERIES = 'FETCH_SERIES';
export const FETCH_MOVIES = 'FETCH_MOVIES';

export function fetchSeries() {
	const req = axios.get(`${URL_ROUTE}/series`);
	return {
		type: FETCH_SERIES, 
		payload: req
	}
}

export function fetchMovies() {
	const req = axios.get(`${URL_ROUTE}/movies`);
	return {
		type: FETCH_MOVIES, 
		payload: req
	}
}