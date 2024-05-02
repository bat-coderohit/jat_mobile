import React from 'react';
import { GestureResponderEvent, Pressable } from 'react-native';
import { JatText } from './JatText';

interface ButtonProps {
	onPress: (event: GestureResponderEvent) => void;
	label: string;
	disabled?: boolean;
	fill?: boolean;
	nw?: string;
}

const JatButton: React.FC<ButtonProps> = ({
	onPress,
	label,
	fill = true,
	disabled = false,
	nw,
}) => {
	return (
		<Pressable
			className={`p-3 rounded-3xl items-center justify-center ${nw}
				${fill && 'bg-btnBase'}
				${!fill && 'border-2 border-primary'} 
			`}
			onPress={onPress}
			disabled={disabled}
		>
			<JatText
				className={`text-lg font-semibold ${
					fill ? 'text-white' : 'text-primary'
				}`}
			>
				{label}
			</JatText>
		</Pressable>
	);
};

export default JatButton;
