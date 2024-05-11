import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/Login/Login.screen';
import HomeScreen from '@screens/Home/Home.screen';
import { RootStackParamList } from '@_types/NavigationProps';

import { setCustomText } from 'react-native-global-props';
import { useAuth } from '@contexts/AuthContext';
import JatLoader from '@components/JatLoader';
import { useJatContext } from '@contexts/JatContext';
import JatSnackBar from '@components/JatSnackBar';
import SignUp from '@screens/SignUp/SignUp.screen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Root = () => {
	setCustomText({
		style: {
			fontFamily: 'Montserrat',
		},
	});
	const { user } = useAuth();
	const { isLoading, message, setMessage } = useJatContext();

	const hideMessage = () => {
		setMessage({ message: '', type: 'info' });
	};

	return (
		<>
			<JatLoader isLoading={isLoading} />
			<JatSnackBar prop={message} hideMessage={hideMessage} />
			<NavigationContainer>
				<Stack.Navigator>
					{user == null ? (
						<>
							<Stack.Screen
								name="Login"
								component={LoginScreen}
								options={{ headerShown: false }}
							/>
							<Stack.Screen
								name="SignUp"
								component={SignUp}
								options={{ headerShown: false }}
							/>
						</>
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
