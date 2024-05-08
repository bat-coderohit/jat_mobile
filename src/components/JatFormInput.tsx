import React, { useState } from 'react';
import {
	Control,
	Controller,
	FieldError,
	FieldValues,
	Path,
	RegisterOptions,
} from 'react-hook-form';
import {
	InputModeOptions,
	KeyboardTypeOptions,
	TextInput,
	View,
} from 'react-native';
import { JatText } from './JatText';
import { getThemeColor } from '@utils/TailwindProperties';
import { SvgXml } from 'react-native-svg';
import { I_PW, I_PW_OFF } from '@utils/IconsSet';

interface FormProps<T extends FieldValues> {
	placeholder: string;
	name: Path<T>;
	defaultValue?: string;
	inputMode: InputModeOptions;
	keyboardType?: KeyboardTypeOptions;
	secureTextEntry?: boolean;
	verticalMargin?: number;

	// Form fields
	error?: FieldError;
	control: Control<T>;
	rules?: RegisterOptions;
}

const JatFormInput = <T extends FieldValues>({
	control,
	error,
	name,
	placeholder,
	inputMode,
	keyboardType = 'default',
	secureTextEntry = false,
	verticalMargin = 5,
}: FormProps<T>) => {
	const [hidePassword, togglePasswordDisplay] =
		useState<boolean>(secureTextEntry);

	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { value, onChange, onBlur } }) => (
				<>
					<View>
						<TextInput
							placeholder={placeholder}
							value={value}
							onChangeText={onChange}
							onBlur={onBlur}
							cursorColor={getThemeColor('primary')}
							placeholderTextColor={
								getThemeColor('primary') + '80'
							} //  Add 80% opacity
							inputMode={inputMode}
							keyboardType={keyboardType}
							secureTextEntry={hidePassword}
							className={`mt-${verticalMargin} rounded-3xl border-solid border border-[#e4e4e4] text-primary font-normal px-5`}
						/>
						{secureTextEntry && (
							<SvgXml
								className="flex text-primary absolute right-5 top-[50%]"
								xml={hidePassword ? I_PW : I_PW_OFF}
								width={20}
								height={20}
								onPress={() =>
									togglePasswordDisplay(!hidePassword)
								}
							/>
						)}
						{error && (
							<JatText className="font-light text-red-400 text-xs">
								{error.message}
							</JatText>
						)}
					</View>
				</>
			)}
		/>
	);
};

export default JatFormInput;
