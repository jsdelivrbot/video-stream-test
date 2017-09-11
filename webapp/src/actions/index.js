import axios from 'axios'

const URL_ROUTE = 'http://localhost:3000/data'

// TODO: These should be moved into their own file before the project grows.
export const FETCH_SERIES = 'FETCH_SERIES';

export default function fetchSeries() {
	const req = axios.get(URL_ROUTE);
	return {
		type: FETCH_SERIES, 
		payload: req
	}
}