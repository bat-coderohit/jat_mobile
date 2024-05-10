import { ExtendedThemeColors } from '@_types/Common';
import { theme } from '../../tailwind.config';

export const getThemeColor: ExtendedThemeColors = key => {
	if (theme && theme.extend && theme.extend.colors) {
		let validKey: keyof typeof theme.extend.colors;
		if (key in theme.extend.colors) {
			validKey = key as keyof typeof theme.colors;
		} else {
			return '#000000';
		}

		return theme.extend.colors[validKey];
	} else {
		throw new Error('Theme colors not configured');
	}
};
