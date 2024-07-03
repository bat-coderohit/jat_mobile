import { AxiosResponse } from 'axios';

import {
	LoginFormInput,
	LoginResponse,
	SignUpFormInput,
	SignUpRequest,
	SignUpResponse,
} from '@_types/api/LoginTypes';
import { jatFetch, jatFetchSecure } from '@api/api';
import { MessageResponse } from '@_types/api/Common';
import * as JatSecureStorage from '@utils/JatSecureStorageUtils';

/**
 * Sign in a user using the given login credentials.
 * @param {LoginFormInput} The login credentials to use
 * @returns A promise that resolves when the sign-in process is complete, or rejects with an error if the sign-in fails.
 */
const signIn = async ({
	emailAddress,
	password,
}: LoginFormInput): Promise<LoginResponse> => {
	return jatFetch({
		method: 'POST',
		url: '/auth/sign-in',
		auth: { username: emailAddress, password: password },
	}).then((response: AxiosResponse) => {
		console.log(response.status);
		console.log(response.headers['set-cookie']);

		let refreshToken = '';
		if (response.headers['set-cookie']) {
			const setCookieHeader: string[] =
				response.headers['set-cookie'][0].split(';');

			const refreshTokenCookie: string =
				setCookieHeader.find(cookie =>
					cookie.startsWith('refresh_token'),
				) || '';

			refreshToken = refreshTokenCookie.split('=')[1];
		}
		const authData: LoginResponse = response.data;

		JatSecureStorage.store('access_token', authData.access_token);
		JatSecureStorage.store('refresh_token', refreshToken);

		return response.data;
	});
};

const signUp = async (formData: SignUpFormInput): Promise<SignUpResponse> => {
	// @param {
	// 	"emailAddress": "johndoe@gmail.com",
	// 	"password": "johndoe",
	// 	"contact": "+91-9878876776",
	// 	"dateOfBirth": "1997-11-11",
	// 	"roleId": 2
	//   }

	const requestBody: SignUpRequest = { ...formData, roleId: 1 };
	requestBody.roleId = 2;

	const response: Response = await fetch(`${'BASE_URL'}/auth/sign-up`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(requestBody),
	});
	if (!response.ok) {
		console.debug(response);
		throw new Error('Failed to Login');
	}

	return await response.json();
};

const signOut = async (): Promise<MessageResponse> => {
	return jatFetchSecure({
		method: 'POST',
		url: '/auth/sign-out',
	}).then((response: AxiosResponse) => {
		console.log(response);

		return response.data;
	});
};

export { signIn, signUp, signOut };
