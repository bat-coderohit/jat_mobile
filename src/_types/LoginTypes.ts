import { Dispatch, SetStateAction } from 'react';

type AuthContextType = {
	user: LoginResponse | null;
	setUser: Dispatch<SetStateAction<LoginResponse | null>>;
};

type LoginFormInput = {
	emailAddress: string;
	password: string;
};

type LoginResponse = {
	access_token: string;
	access_token_expiry: number;
	token_type: 'Bearer';
	user_name: string;
};

export type { AuthContextType, LoginFormInput, LoginResponse };
