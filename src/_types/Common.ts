import { Dispatch, SetStateAction } from 'react';

type SnackBarMessage = {
	message: string;
	type: 'success' | 'error' | 'info' | 'warning';
};

type JatContextType = {
	isLoading: boolean;
	message: SnackBarMessage;

	setLoading: Dispatch<SetStateAction<boolean>>;
	setMessage: Dispatch<SetStateAction<SnackBarMessage>>;
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

export type { JatContextType, SnackBarMessage, ExtendedThemeColors };
