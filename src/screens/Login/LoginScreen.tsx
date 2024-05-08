import { LoginFormInput, LoginResponse } from '@_types/LoginTypes';
import { LoginScreenProps } from '@_types/NavigationProps';
import { signIn } from '@api/Login.api';
import JatButton from '@components/JatButton';
import JatFormInput from '@components/JatFormInput';
import { JatText } from '@components/JatText';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from '@tanstack/react-query';
import { LoginValidation } from '@utils/ValidationSchema';
import React from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';

import { Image, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<LoginFormInput>({
		defaultValues: { emailAddress: '', password: '' },
		resolver: zodResolver(LoginValidation),
	});

	const {
		mutate: login,
		isPending,
		error,
	} = useMutation({
		mutationFn: signIn,
		onSuccess: data => {
			if (data !== undefined) {
				console.log(`Navigate ${data.user_name} to home`);
			}
		},
		onError: (e: any) => console.error('ISE', e.message),
	});

	const onLogin: SubmitHandler<LoginFormInput> = formData => {
		// @param emailAddress: 'johndoe@gmail.com', @param password: 'johndoe'
		login(formData);
	};
	const onFailed: SubmitErrorHandler<LoginFormInput> = formError => {
		console.error(formError);
	};

	return (
		<SafeAreaView className="flex flex-1 flex-col bg-white p-5">
			<KeyboardAwareScrollView>
				{/* Logo View */}
				<View className="flex bg-base rounded-md p-5">
					<JatText className="font-medium text-4xl text-primary">
						Job Application Tracker{'\n'}
						<JatText className="text-base leading-8">Login</JatText>
					</JatText>

					<Image
						className="self-center"
						source={require('@assets/images/Login/logo.png')}
					/>
				</View>

				{/* Form View */}
				<View className="flex flex-col pt-8">
					<JatText className="font-semibold text-3xl text-primary mb-3">
						Sign in
					</JatText>
					{/* Form Fields */}
					<JatFormInput
						control={control}
						error={errors.emailAddress}
						name="emailAddress"
						placeholder="Enter Email Address"
						inputMode="email"
					/>
					<JatFormInput
						control={control}
						error={errors.password}
						name="password"
						placeholder="Enter Password"
						inputMode="text"
						secureTextEntry={true}
					/>
					<JatButton
						onPress={handleSubmit(onLogin, onFailed)}
						label={isPending ? 'Please Wait' : 'Log in'}
						nw="mt-5"
						disabled={!isValid}
					/>

					{/* Divider */}
					<View className="flex flex-row items-center py-4">
						<View className="flex-1 h-px bg-base" />
						<JatText className="px-5 text-lg">or</JatText>
						<View className="flex-1 h-px bg-base" />
					</View>

					{/* Other Sign in */}
					<View className="flex flex-row flex-wrap justify-between items-center">
						<JatButton
							onPress={() => {}}
							label="Google"
							fill={false}
							nw="mt-0 w-[49.25%]"
						/>
						<JatButton
							onPress={() => {}}
							label="Github"
							fill={false}
							nw="mt-0 w-[49.25%]"
						/>
						<JatButton
							onPress={() => {}}
							label="New User? Sign up"
							fill={false}
							nw="mt-5 w-full"
						/>
					</View>
				</View>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
};

export default LoginScreen;
