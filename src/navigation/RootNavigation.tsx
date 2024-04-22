import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@/screens/Login/LoginScreen';
import HomeScreen from '@/screens/Home/HomeScreen';
import { RootStackParamList } from '@/types/navigation';

// export type RootStackParamList = {
// 	Login: undefined;
// 	Home: undefined;
// 	// Home: { userId: string };
// };

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator initialRouteName="Login">
				<Stack.Screen
					name="Login"
					component={LoginScreen}
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
