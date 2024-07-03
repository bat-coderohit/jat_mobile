import { SignUpFormInput } from '@_types/api/LoginTypes';
import { SignUpScreenProps } from '@_types/NavigationProps';
import JatButton from '@components/JatButton';
import JatContactFormInput from '@components/JatContactFormInput';
import JatDateFormInput from '@components/JatDateFormInput';
import JatFormInput from '@components/JatFormInput';
import { JatText } from '@components/JatText';
import { LoginLabelConstants } from '@utils/constants/LabelConstants';
import { zodResolver } from '@hookform/resolvers/zod';
import { RegisterValidation } from '@utils/ValidationSchema';
import React from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUp: React.FC<SignUpScreenProps> = ({ navigation }) => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<SignUpFormInput>({
		resolver: zodResolver(RegisterValidation),
	});

	const onSignUp: SubmitHandler<SignUpFormInput> = formData => {
		console.log(formData);

		if (isValid) {
			// Make API Call
		}
	};
	const onFailed: SubmitErrorHandler<SignUpFormInput> = formError => {
		console.warn(formError);
	};
	return (
		<SafeAreaView className="flex flex-1 flex-col bg-white">
			<KeyboardAwareScrollView>
				{/* Title */}
				<JatText className="font-semibold text-3xl text-primary mb-3 bg-[#f4cfcf] text-center p-5">
					{LoginLabelConstants.SIGN_UP_TITLE}
				</JatText>

				{/* Form */}
				<ScrollView className="flex flex-col px-5 py-5">
					<JatFormInput
						control={control}
						error={errors.emailAddress}
						name="emailAddress"
						label="Email *"
						placeholder="Enter Email Address"
						inputMode="email"
						verticalMargin={0}
					/>

					<JatFormInput
						control={control}
						error={errors.password}
						name="password"
						label="Password *"
						placeholder="Enter Password"
						inputMode="text"
						secureTextEntry={true}
					/>

					{/* Contact */}
					<JatContactFormInput
						control={control}
						error={errors.contact}
						name="contact"
						label="Contact *"
					/>

					{/* Date of Birth */}
					<JatDateFormInput
						control={control}
						name="dateOfBirth"
						error={errors.dateOfBirth}
						label="Date of Birth *"
						placeholder="Select Date of Birth"
					/>

					<JatFormInput
						control={control}
						error={errors.firstName}
						name="firstName"
						label="First Name"
						placeholder="Enter First Name"
						inputMode="text"
					/>

					<JatFormInput
						control={control}
						error={errors.lastName}
						name="lastName"
						label="Last Name"
						placeholder="Enter Last Name"
						inputMode="text"
					/>

					<JatButton
						onPress={handleSubmit(onSignUp, onFailed)}
						label={'Submit'}
						nw="mt-5"
						// disabled={!isValid}
					/>
					<JatText
						onPress={() => navigation.goBack()}
						className="mt-2 text-primary text-sm underline text-center"
					>
						Back to Login
					</JatText>
				</ScrollView>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
};

export default SignUp;
