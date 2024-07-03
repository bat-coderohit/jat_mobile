import { BASE_URL } from '@env';
import axios, {
	AxiosError,
	AxiosInstance,
	InternalAxiosRequestConfig,
} from 'axios';

import { JatErrorResponseData } from '@_types/api/Common';
import { JatError } from './JatError';
import * as JatSecureStorage from '@utils/JatSecureStorageUtils';

const jatFetchSecure: AxiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 3000,
});

const jatFetch: AxiosInstance = axios.create({
	baseURL: BASE_URL,
	timeout: 3000,
});

jatFetchSecure.interceptors.request.use(
	async (config: InternalAxiosRequestConfig) => {
		let tokenKey =
			config.url === '/auth/sign-out' ? 'refresh_token' : 'access_token';
		let token = await JatSecureStorage.get(tokenKey);
		// If a token exists, add it to the Authorization header
		if (token) {
			config.headers.Authorization = `Bearer ${token}`;
		}

		return config;
	},
	(error: AxiosError<JatErrorResponseData>) => errorHandling(error),
);

jatFetch.interceptors.response.use(
	response => response,
	(error: AxiosError<JatErrorResponseData>) => errorHandling(error),
);

jatFetchSecure.interceptors.response.use(
	response => response,
	(error: AxiosError<JatErrorResponseData>) => errorHandling(error),
);

const errorHandling = (error: AxiosError<JatErrorResponseData>) => {
	// console.error(error.config);
	if (error.response) {
		// The request was made and the server responded with a status code
		// that falls out of the range of 2xx
		let jatError: JatErrorResponseData = error.response.data;
		console.debug(jatError);
		throw new JatError('Bad Request', {
			statusCode: jatError.status,
			displayMessage: jatError.message,
			debugMessage: jatError.path + ': ' + jatError.error,
		});
	} else if (error.request) {
		// The request was made but no response was received
		// `error.request` is an instance of XMLHttpRequest in the browser and an instance of
		// http.ClientRequest in node.js
		console.error(error.request);
		throw new JatError('Server Error', {
			statusCode: error.request.status,
			displayMessage: 'Server Down. Please try again later',
		});
	} else {
		// Something happened in setting up the request that triggered an Error
		console.error('Error', error.message);
		throw new JatError('Unknown Error', {
			statusCode: 500,
			displayMessage: 'Something went wrong',
		});
	}
};

export { jatFetch, jatFetchSecure };
