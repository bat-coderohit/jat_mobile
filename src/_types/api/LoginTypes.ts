type LoginFormInput = {
	emailAddress: string;
	password: string;
};

type SignUpFormInput = {
	emailAddress: string;
	password: string;
	contact: string;
	dateOfBirth: string;
	firstName?: string;
	lastName?: string;
};

interface SignUpRequest extends SignUpFormInput {
	roleId: 1 | 2;
}

type LoginResponse = {
	access_token: string;
	access_token_expiry: number;
	token_type: 'Bearer';
	user_name: string;
};

type SignUpResponse = {
	access_token: string;
	access_token_expiry: number;
	token_type: 'Bearer';
	user_name: string;
};

export type {
	LoginFormInput,
	LoginResponse,
	SignUpFormInput,
	SignUpResponse,
	SignUpRequest,
};
