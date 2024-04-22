import type { LoginScreenProps } from '@/types/navigation';
import React from 'react';

import { Button, Text, View } from 'react-native';

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
	return (
		<View className="flex-1 items-center justify-center bg-slate-950">
			<Text>LOGIN SCREEN</Text>

			<Button
				title="Go to Login"
				onPress={() => navigation.navigate('Home')}
			/>
		</View>
	);
};

export default LoginScreen;
