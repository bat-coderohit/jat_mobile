import React from 'react';
import { Pressable, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { I_DEFAULT_USER, I_MENU, I_NOTIFICATION } from '@utils/IconsSet';
import { getThemeColor } from '@utils/TailwindProperties';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

const ICON_WIDTH = 30;

const JatHomeHeader: React.FC<NativeStackHeaderProps> = ({
	navigation,
}: NativeStackHeaderProps) => {
	return (
		<View className="flex flex-row justify-between p-5 bg-white">
			<Pressable onPress={() => {}}>
				<SvgXml
					xml={I_MENU}
					color={getThemeColor('primary')}
					width={ICON_WIDTH}
					height={ICON_WIDTH} // 600:900 width:height ratio of svg
				/>
			</Pressable>
			<View className="flex flex-row gap-x-5">
				<Pressable onPress={() => {}}>
					<SvgXml
						xml={I_NOTIFICATION}
						color={getThemeColor('primary')}
						width={ICON_WIDTH}
						height={ICON_WIDTH} // 600:900 width:height ratio of svg
					/>
				</Pressable>

				<Pressable onPress={() => navigation.navigate('Profile')}>
					<SvgXml
						xml={I_DEFAULT_USER}
						color={getThemeColor('primary')}
						width={ICON_WIDTH}
						height={ICON_WIDTH} // 600:900 width:height ratio of svg
					/>
				</Pressable>
			</View>
		</View>
	);
};

export default JatHomeHeader;
