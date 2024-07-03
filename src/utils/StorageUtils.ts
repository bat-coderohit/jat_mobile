import AsyncStorage from '@react-native-async-storage/async-storage';

interface LoadStorageInterface {
	(key: 'user_profile'): Promise<string | null>;
}

interface SaveStorageInterface {
	(key: 'user_profile', data: any): Promise<void>;
}

const loadData: LoadStorageInterface = async key => {
	try {
		return await AsyncStorage.getItem(key);
	} catch (error) {
		console.error('Error loading data from AsyncStorage:', error);
		return Promise.reject(error);
	}
};

const saveData: SaveStorageInterface = async (key, data) => {
	try {
		await AsyncStorage.setItem(key, JSON.stringify(data));
	} catch (error) {
		console.error('Error saving data to AsyncStorage:', error);
	}
};

export { saveData, loadData };
