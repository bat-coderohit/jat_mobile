import { Dispatch, SetStateAction } from 'react';

type LoadingContextType = {
	isLoading: boolean;
	setLoading: Dispatch<SetStateAction<boolean>>;
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

export type { LoadingContextType, ExtendedThemeColors };
