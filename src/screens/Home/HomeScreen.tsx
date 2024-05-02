import { HomeScreenProps } from '@_types/NavigationProps';
import React from 'react';

import { Pressable, Text, View } from 'react-native';

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
	return (
		<View className="flex-1 items-center justify-center bg-gray-500">
			<Pressable onPress={() => navigation.goBack()}>
				<Text>Back to Login</Text>
			</Pressable>
		</View>
	);
};

export default HomeScreen;
