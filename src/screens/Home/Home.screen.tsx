import { JatText } from '@components/JatText';
import { useAuth } from '@contexts/AuthContext';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
	const { user } = useAuth();

	return (
		<SafeAreaView className="flex flex-1 flex-col bg-white p-5">
			<KeyboardAwareScrollView>
				<JatText>Welcome {user?.user_name}</JatText>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
};

export default Home;
