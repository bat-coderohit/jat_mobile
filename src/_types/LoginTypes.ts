export type LoginFormInput = {
	emailAddress: string;
	password: string;
};

export type LoginResponse = {
	access_token: string;
	access_token_expiry: number;
	token_type: 'Bearer';
	user_name: string;
};
