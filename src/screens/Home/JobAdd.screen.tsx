import { JatText } from '@components/JatText';
import React from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

const JobAdd = () => {
	return (
		<SafeAreaView className="flex flex-1 flex-col bg-white p-5">
			<KeyboardAwareScrollView>
				<JatText>Welcome to JobAdd</JatText>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
};

export default JobAdd;
