import React from 'react';
import { Pressable, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { I_BACK } from '@utils/IconsSet';
import { getThemeColor } from '@utils/TailwindProperties';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';

const ICON_WIDTH = 30;

const JatHeader: React.FC<NativeStackHeaderProps> = ({
	navigation,
}: NativeStackHeaderProps) => {
	return (
		<View className="flex flex-row justify-between p-5 bg-white">
			<Pressable onPress={() => navigation.goBack()}>
				<SvgXml
					xml={I_BACK}
					color={getThemeColor('primary')}
					width={ICON_WIDTH}
					height={ICON_WIDTH} // 600:900 width:height ratio of svg
				/>
			</Pressable>
		</View>
	);
};

export default JatHeader;
