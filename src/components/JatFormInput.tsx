import React from 'react';
import {
	Control,
	Controller,
	FieldError,
	FieldValues,
	Path,
	RegisterOptions,
} from 'react-hook-form';
import { InputModeOptions, KeyboardTypeOptions, TextInput } from 'react-native';
import { JatText } from './JatText';
import { getThemeColor } from '@utils/TailwindProperties';

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
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { value, onChange, onBlur } }) => (
				<>
					<TextInput
						placeholder={placeholder}
						value={value}
						onChangeText={onChange}
						onBlur={onBlur}
						cursorColor={getThemeColor('primary')}
						placeholderTextColor={getThemeColor('primary') + '80'} //  Add 80% opacity
						inputMode={inputMode}
						keyboardType={keyboardType}
						secureTextEntry={secureTextEntry}
						className={`mt-${verticalMargin} rounded-3xl border-solid border border-[#e4e4e4] text-primary font-normal px-5`}
					/>
					{error && (
						<JatText className="font-light text-red-400 text-xs">
							{error.message}
						</JatText>
					)}
				</>
			)}
		/>
	);
};

export default JatFormInput;
