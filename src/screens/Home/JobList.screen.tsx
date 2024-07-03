import { JatText } from '@components/JatText';
import { useJatContext } from '@contexts/JatContext';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

const JobList = () => {
	const { profile } = useJatContext();

	return (
		<SafeAreaView className="flex flex-1 flex-col bg-white p-5">
			<KeyboardAwareScrollView>
				<JatText>Welcome {profile?.auth.user_name}</JatText>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
};

export default JobList;
