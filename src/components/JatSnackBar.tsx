import React from 'react';
import { View, Modal, Pressable } from 'react-native';
import { JatText } from './JatText';
import { SnackBarMessage } from '@_types/Common';
import { SvgXml } from 'react-native-svg';
import { I_CLOSE } from '@utils/IconsSet';
import { getThemeColor } from '@utils/TailwindProperties';
import JatProgressBar from './JatProgressBar';

interface SnackBarProps {
	prop: SnackBarMessage;
	hideMessage: () => void;
}

type ColorProperties = {
	bg_color: string;
	border_color: string;
	text_color: string;
	pg_color: string;
};

const ICON_WIDTH = 20;
const HIDE_TIMEOUT = 2000;

const colorScheme: { [K in SnackBarMessage['type']]: ColorProperties } = {
	success: {
		bg_color: 'bg-green-100',
		border_color: 'border-green-400',
		text_color: 'text-green-700',
		pg_color: 'bg-green-400',
	},
	error: {
		bg_color: 'bg-red-100',
		border_color: 'border-red-400',
		text_color: 'text-red-700',
		pg_color: 'bg-red-400',
	},
	info: {
		bg_color: 'bg-gray-100',
		border_color: 'border-gray-400',
		text_color: 'text-gray-700',
		pg_color: 'bg-gray-400',
	},
	warning: {
		bg_color: 'bg-yellow-100',
		border_color: 'border-yellow-400',
		text_color: 'text-yellow-700',
		pg_color: 'bg-yellow-400',
	},
};

const JatSnackBar: React.FC<SnackBarProps> = ({
	prop: { message = '', type = 'info' },
	hideMessage,
}: SnackBarProps) => {
	// message = 'Network Request Failed';
	// type = 'warning';

	const { bg_color, border_color, text_color, pg_color } = colorScheme[type];

	if (message !== '') {
		setTimeout(() => hideMessage(), HIDE_TIMEOUT);
	}
	return (
		<Modal
			animationType="slide"
			presentationStyle="overFullScreen"
			transparent={true}
			visible={message !== ''}
		>
			<View className="flex-1 justify-end p-3">
				<View
					role="alert"
					className={`${bg_color} border rounded-md ${border_color} justify-center`}
				>
					<View className="flex-row justify-between p-3">
						<JatText className={`font-bold ${text_color}`}>
							{`${type.toLocaleUpperCase()} : `}
							<JatText className={`font-light ${text_color}`}>
								{message}
							</JatText>
						</JatText>

						<Pressable onPress={hideMessage}>
							<SvgXml
								color={getThemeColor('primary')}
								xml={I_CLOSE}
								width={ICON_WIDTH}
								height={ICON_WIDTH}
							/>
						</Pressable>
					</View>

					<JatProgressBar color={pg_color} timeout={HIDE_TIMEOUT} />
				</View>
			</View>
		</Modal>
	);
};

export default JatSnackBar;
