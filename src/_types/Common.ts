import { Dispatch, SetStateAction } from 'react';

type SnackBarMessage = {
	message: string;
	type: 'success' | 'error' | 'info' | 'warning';
};

type UserProfile = {
	auth: {
		access_token_expiry?: number;
		user_name: string;
	};
	roleId?: number;
	isSignedIn: boolean;
};

type JatErrorBody = {
	statusCode: number;
	debugMessage?: string;
	displayMessage: string;
	stackTrace?: string;
};

type JatContextType = {
	isLoading: boolean;
	message: SnackBarMessage;
	profile: UserProfile;

	setLoading: Dispatch<SetStateAction<boolean>>;
	setMessage: Dispatch<SetStateAction<SnackBarMessage>>;
	setProfile: Dispatch<SetStateAction<UserProfile>>;
};

interface ExtendedThemeColors {
	(
		key:
			| 'primary'
			| 'base'
			| 'btnBase'
			| 'btnRipple'
			| 'white'
			| 'inpBorder',
	): string;
}

export type {
	JatContextType,
	SnackBarMessage,
	UserProfile,
	ExtendedThemeColors,
	JatErrorBody,
};
