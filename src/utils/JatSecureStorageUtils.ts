import {
	UserCredentials,
	getGenericPassword,
	resetGenericPassword,
	setGenericPassword,
} from 'react-native-keychain';

const store = async (key: string, value: any) => {
	await setGenericPassword(key, value, {
		service: key,
	});
};

const get = async (key: string) => {
	const credentials: false | UserCredentials = await getGenericPassword({
		service: key,
	});

	if (credentials) {
		return credentials.password;
	}
};

const remove = async (key: string) => {
	await resetGenericPassword({ service: key });
};

export { store, get, remove };
