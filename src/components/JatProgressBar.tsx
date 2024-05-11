import React, { useRef } from 'react';
import { Animated } from 'react-native';

type ProgressBarProps = {
	timeout: number;
	color: string;
};
const JatProgressBar: React.FC<ProgressBarProps> = ({
	timeout = 1000,
	color,
}) => {
	// TODO: Create another HOC for state management
	const progress = useRef(new Animated.Value(0)).current;

	Animated.timing(progress, {
		toValue: 1,
		duration: timeout,
		useNativeDriver: false,
	}).start();

	return (
		<Animated.View
			style={{
				width: progress.interpolate({
					inputRange: [0, 1],
					outputRange: ['0%', '100%'],
				}),
			}}
			className={`h-1 ${color}`}
		/>
	);
};

export default JatProgressBar;
