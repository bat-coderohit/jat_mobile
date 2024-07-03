import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/Login/Login.screen';
import { RootStackParamList } from '@_types/NavigationProps';
import { setCustomText } from 'react-native-global-props';
import JatLoader from '@components/JatLoader';
import { useJatContext } from '@contexts/JatContext';
import JatSnackBar from '@components/JatSnackBar';
import SignUp from '@screens/SignUp/SignUp.screen';
import HomeNavigation from './HomeNavigation';
import JatHomeHeader from '@components/JatHomeHeader';
import ProfileScreen from '@screens/Profile/Profile.screen';
import JatHeader from '@components/JatHeader';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Root = () => {
	setCustomText({
		style: {
			fontFamily: 'Montserrat',
		},
	});

	const { profile, isLoading, message, setMessage } = useJatContext();

	const hideMessage = () => {
		setMessage({ message: '', type: 'info' });
	};

	return (
		<>
			<JatLoader isLoading={isLoading} />
			<JatSnackBar prop={message} hideMessage={hideMessage} />
			<NavigationContainer>
				<Stack.Navigator>
					{profile != null && !profile.isSignedIn ? (
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
						<>
							<Stack.Screen
								name="Home"
								component={HomeNavigation}
								options={{
									headerShown: true,
									header: JatHomeHeader,
									headerShadowVisible: false,
									headerStyle: { backgroundColor: '#fff' },
								}}
							/>
							<Stack.Screen
								name="Profile"
								component={ProfileScreen}
								options={{
									headerShown: true,
									header: JatHeader,
									headerShadowVisible: false,
									headerStyle: { backgroundColor: '#fff' },
								}}
							/>
						</>
					)}
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
};

export default Root;
