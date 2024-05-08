import { LoginFormInput, LoginResponse } from '@_types/LoginTypes';

/**
 * Sign in a user using the given login credentials.
 * @param {LoginFormInput} The login credentials to use
 * @returns A promise that resolves when the sign-in process is complete, or rejects with an error if the sign-in fails.
 */
const signIn = async ({
	emailAddress,
	password,
}: LoginFormInput): Promise<LoginResponse> => {
	const response: Response = await fetch(
		'http://192.168.29.198:8080/auth/sign-in',
		{
			method: 'POST',
			headers: {
				Authorization: 'Basic ' + btoa(emailAddress + ':' + password),
			},
			credentials: 'include',
		},
	);
	if (!response.ok) {
		throw new Error('Failed to Login');
	}

	return await response.json();
};

export { signIn };
