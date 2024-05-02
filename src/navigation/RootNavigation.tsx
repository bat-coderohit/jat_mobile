import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/Login/LoginScreen';
import HomeScreen from '@screens/Home/HomeScreen';
import { RootStackParamList } from '@_types/NavigationProps';

import { setCustomText } from 'react-native-global-props';

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
	setCustomText({
		style: {
			fontFamily: 'Montserrat',
		},
	});

	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen
					name="Login"
					component={LoginScreen}
					options={{ headerShown: false }}
					// options={{ title: 'Overview' }}
					/* {(props) => <HomeScreen {...props} extraData={someData} />} */
				/>
				<Stack.Screen
					name="Home"
					component={HomeScreen}
					// initialParams={{ userId: '000' }}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default RootNavigation;
