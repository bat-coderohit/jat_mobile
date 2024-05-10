import { getThemeColor } from '@utils/TailwindProperties';
import React from 'react';
import { View, ActivityIndicator, Modal } from 'react-native';
import { JatText } from './JatText';

interface LoaderProps {
	isLoading: boolean;
}

const JatLoader: React.FC<LoaderProps> = ({ isLoading = false }) => {
	return (
		isLoading && (
			<Modal
				animationType="fade"
				presentationStyle="overFullScreen"
				transparent={true}
				visible={isLoading}
				// className="bg-white m-0"
			>
				<View className="flex-1 justify-evenly items-center bg-white/75">
					<View className="bg-white border border-primary/25 rounded-2xl shadow-2xl p-7 shadow-lg">
						<ActivityIndicator
							animating={isLoading}
							color={getThemeColor('primary')}
							hidesWhenStopped={true}
							size={'large'}
						/>
						<JatText className="mt-5 font-semibold">
							Please wait
						</JatText>
					</View>
				</View>
			</Modal>
		)
	);
};

export default JatLoader;
