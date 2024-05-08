import React from 'react';
import { GestureResponderEvent, Pressable, View } from 'react-native';
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
			className={`rounded-3xl overflow-hidden ${nw}
				${!fill && 'bg-transparent border-2 border-primary'}
				${disabled && 'opacity-50'} 
			`}
			onPress={onPress}
			disabled={disabled}
		>
			{({ pressed }) => (
				<View
					className={`p-3  items-center justify-center 
						${fill && 'bg-btnBase'}
						${pressed ? 'opacity-50' : 'opacity-100'}
					`}
				>
					<JatText
						className={`text-lg font-semibold ${
							fill ? 'text-white' : 'text-primary'
						}`}
					>
						{label}
					</JatText>
				</View>
			)}
		</Pressable>
	);
};

export default JatButton;
