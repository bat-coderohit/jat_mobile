import React from 'react';
import {
	Control,
	Controller,
	FieldError,
	FieldValues,
	Path,
	RegisterOptions,
} from 'react-hook-form';
import { JatText } from './JatText';
import { TextInput, View } from 'react-native';
import { getThemeColor } from '@utils/TailwindProperties';
import { SvgXml } from 'react-native-svg';
import { I_INDIA } from '@utils/IconsSet';
import { JatTextInput } from './JatTextInput';

const ICON_WIDTH = 18;

interface FormProps<T extends FieldValues> {
	verticalMargin?: number;
	label?: string;

	//Form Fields
	name: Path<T>;
	error?: FieldError;
	control: Control<T>;
	rules?: RegisterOptions;
}

const JatContactFormInput = <T extends FieldValues>({
	control,
	error,
	name,

	label,
	verticalMargin = 5,
}: FormProps<T>) => {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { value, onChange, onBlur } }) => (
				<View className={`mt-${verticalMargin}`}>
					{label && (
						<JatText className="text-primary font-semibold mb-2">
							{label}
						</JatText>
					)}
					<View className="flex flex-row border-solid border border-inpBorder rounded-md">
						<View className="flex-shrink flex-row bg-red items-center px-3 text-primary border-r  border-base">
							<SvgXml
								xml={I_INDIA}
								width={ICON_WIDTH}
								height={(ICON_WIDTH * 6) / 9} // 600:900 width:height ratio of svg
							/>
							<JatTextInput
								editable={false}
								value="+91"
								className="ml-2 px-1"
							/>
						</View>

						<JatTextInput
							value={value}
							onChangeText={onChange}
							onBlur={onBlur}
							cursorColor={getThemeColor('primary')}
							inputMode="numeric"
							maxLength={10}
							keyboardType="phone-pad"
							className=" flex-grow"
						/>
						{error && (
							<JatText className="font-light text-red-400 text-xs font-light">
								{error.message}
							</JatText>
						)}
					</View>
				</View>
			)}
		/>
	);
};

export default JatContactFormInput;
