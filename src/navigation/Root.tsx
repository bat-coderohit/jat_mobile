import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/Login/LoginScreen';
import HomeScreen from '@screens/Home/HomeScreen';
import { RootStackParamList } from '@_types/NavigationProps';

import { setCustomText } from 'react-native-global-props';
import { useAuth } from '@contexts/AuthContext';
import JatLoader from '@components/JatLoader';
import { useLoading } from '@contexts/LoaderContext';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Root = () => {
	setCustomText({
		style: {
			fontFamily: 'Montserrat',
		},
	});
	const { user } = useAuth();
	const { isLoading } = useLoading();

	return (
		<>
			<JatLoader isLoading={isLoading} />
			<NavigationContainer>
				<Stack.Navigator>
					{user == null ? (
						<Stack.Screen
							name="Login"
							component={LoginScreen}
							options={{ headerShown: false }}
						/>
					) : (
						<Stack.Screen
							name="Home"
							component={HomeScreen}
							// initialParams={{ user }}
							/* {(props) => <HomeScreen {...props} extraData={someData} />} */
						/>
					)}
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};

export default Root;
