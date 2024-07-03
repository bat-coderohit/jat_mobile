import React from 'react';
import { GestureResponderEvent, Pressable, View } from 'react-native';
import { JatText } from './JatText';
import { SvgXml } from 'react-native-svg';

interface ButtonProps {
	onPress: (event: GestureResponderEvent) => void;
	label: string;
	iconForLabel?: string;
	disabled?: boolean;
	fill?: boolean;
	nw?: string;
}

const ICON_WIDTH = 20;

const JatButton: React.FC<ButtonProps> = ({
	onPress,
	label,
	fill = true,
	disabled = false,
	nw,
	iconForLabel,
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
					className={`p-3 flex flex-row items-center justify-center 
						${fill && 'bg-btnBase'}
						${pressed ? 'opacity-50' : 'opacity-100'}
					`}
				>
					{iconForLabel && (
						<SvgXml
							className="mr-3"
							xml={iconForLabel}
							width={ICON_WIDTH}
							height={ICON_WIDTH}
						/>
					)}
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
