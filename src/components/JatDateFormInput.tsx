import React, { useState } from 'react';
import DateTimePicker, {
	DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import {
	Control,
	Controller,
	FieldError,
	FieldValues,
	Path,
} from 'react-hook-form';
import { getLegalDateOfBirth } from '@utils/DateUtil';
import { getThemeColor } from '@utils/TailwindProperties';
import { JatText } from './JatText';
import { Pressable, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { I_CALENDAR, I_CALENDAR_EDIT } from '@utils/IconsSet';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat.js';
import { JatTextInput } from './JatTextInput';
dayjs.extend(advancedFormat);

interface FormProps<T extends FieldValues> {
	verticalMargin?: number;
	label?: string;
	placeholder: string;

	// Form fields
	name: Path<T>;
	error?: FieldError;
	control: Control<T>;
}

const INITIAL_DATE: Date = getLegalDateOfBirth();
const ICON_WIDTH = 25;

const JatDateFormInput = <T extends FieldValues>({
	control,
	error,
	name,

	label,
	placeholder,
	verticalMargin = 5,
}: FormProps<T>) => {
	const [displayPicker, setDisplayPicker] = useState<boolean>(false);

	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { value, onChange } }) => (
				<>
					<View className={`mt-${verticalMargin}`}>
						{label && (
							<JatText className="text-primary font-semibold mb-2">
								{label}
							</JatText>
						)}
						<View className="flex flex-row border-solid border border-inpBorder rounded-md">
							<Pressable
								className="flex-shrink flex-row bg-red items-center px-3 text-primary border-r  border-base"
								onPress={() => setDisplayPicker(true)}
							>
								<SvgXml
									xml={
										value != null
											? I_CALENDAR_EDIT
											: I_CALENDAR
									}
									color={getThemeColor('primary')}
									width={ICON_WIDTH}
									height={ICON_WIDTH} // 600:900 width:height ratio of svg
								/>
							</Pressable>
							<JatTextInput
								value={
									value != null
										? dayjs(value).format('Do MMMM, YYYY')
										: undefined
								}
								className="flex-grow tracking-wider"
								editable={false}
								placeholder={placeholder}
								placeholderTextColor={
									getThemeColor('primary') + '80' //  Add 80% opacity
								}
							/>
							{error && (
								<JatText className="font-light text-red-400 text-xs mt-0.5">
									{error.message}
								</JatText>
							)}
						</View>
					</View>

					{displayPicker && (
						<DateTimePicker
							testID="dateTimePicker"
							value={INITIAL_DATE}
							mode="date"
							maximumDate={INITIAL_DATE}
							onChange={(
								event: DateTimePickerEvent,
								selectedDate: Date | undefined,
							) => {
								setDisplayPicker(false);
								onChange(selectedDate);
							}}
						/>
					)}
				</>
			)}
		/>
	);
};

export default JatDateFormInput;
