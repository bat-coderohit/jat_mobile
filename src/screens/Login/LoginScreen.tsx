import { LoginFormInput } from '@_types/LoginTypes';
import type { LoginScreenProps } from '@_types/NavigationProps';
import JatButton from '@components/JatButton';
import JatFormInput from '@components/JatFormInput';
import { JatText } from '@components/JatText';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginValidation } from '@utils/ValidationSchema';
import React from 'react';
import { useForm } from 'react-hook-form';

import { Alert, Image, KeyboardAvoidingView, View } from 'react-native';
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

	const onLogin = handleSubmit(data =>
		Alert.alert('Successful', JSON.stringify(data)),
	);

	return (
		<SafeAreaView className="flex flex-col bg-white p-5 h-full">
			{/* Logo View */}
			<View className="flex-shrink-0 bg-base rounded-md p-5">
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
			<KeyboardAvoidingView className="flex-grow" behavior="height">
				<View className="flex-1 flex-col py-10">
					<JatText className="font-semibold text-3xl text-primary mb-3">
						Sign in
					</JatText>
					{/* Form Fields */}
					<JatFormInput
						control={control}
						error={errors.emailAddress}
						name={'emailAddress'}
						placeholder="Enter Email Address"
						inputMode="email"
					/>
					<JatFormInput
						control={control}
						error={errors.password}
						name={'password'}
						placeholder="Enter Password"
						inputMode="text"
						secureTextEntry={true}
					/>
					<JatButton onPress={onLogin} label="Log in" nw="mt-5" />

					{/* Divider */}
					<View className="flex flex-row items-center py-4">
						<View className="flex-1 h-px bg-base" />
						<JatText className="px-5 text-lg">or</JatText>
						<View className="flex-1 h-px bg-base" />
					</View>

					{/* Other Sign in */}
					<View className="flex flex-row justify-between">
						<JatButton
							onPress={() => {}}
							label="Google"
							fill={false}
							nw="mt-0 flex-1 mr-2"
						/>
						<JatButton
							onPress={() => {}}
							label="Github"
							fill={false}
							nw="mt-0 flex-1"
						/>
					</View>
					<JatButton
						onPress={() => {}}
						label="New User? Sign up"
						fill={false}
						nw="mt-3"
						disabled={isValid}
					/>
				</View>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default LoginScreen;
