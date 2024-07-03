import { LoginFormInput, LoginResponse } from '@_types/api/LoginTypes';
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
import { useJatContext } from '@contexts/JatContext';
import { I_GITHUB, I_GOOGLE } from '@utils/IconsSet';
import { JatDivider } from '@components/JatDivider';
import { JatError } from '@api/JatError';
import { UserProfile } from '@_types/Common';

const Login: React.FC<LoginScreenProps> = ({ navigation }) => {
	const {
		control,
		handleSubmit,
		formState: { errors, isValid },
	} = useForm<LoginFormInput>({
		defaultValues: { emailAddress: '', password: '' },
		resolver: zodResolver(LoginValidation),
	});

	const { setLoading, setMessage, setProfile } = useJatContext();

	const { mutate: login, isPending } = useMutation({
		mutationFn: signIn,
		onMutate: () => setLoading(true),
		onSuccess: (data: LoginResponse) => {
			setLoading(false);
			if (data !== null) {
				setMessage({ message: 'Login Success', type: 'success' });

				const profileData: UserProfile = {
					auth: {
						user_name: data.user_name,
						access_token_expiry: data.access_token_expiry,
					},
					isSignedIn: true,
				};
				setProfile(profileData);
			} else {
				setMessage({ message: 'Login Success', type: 'success' });
			}
		},
		onError: (e: JatError) => {
			setLoading(false);
			setMessage({ message: e.displayMessage, type: 'error' });
		},
	});

	const onLogin: SubmitHandler<LoginFormInput> = formData => {
		login(formData);
	};
	const onFailed: SubmitErrorHandler<LoginFormInput> = formError => {
		console.warn(formError);
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
						label={'Log in'}
						nw="mt-5"
						disabled={!isValid && !isPending}
					/>

					{/* Divider */}
					<View className="flex flex-row items-center py-4">
						<JatDivider />
						<JatText className="px-5 text-lg">or</JatText>
						<JatDivider />
					</View>

					{/* Other Sign in */}
					<View className="flex flex-row flex-wrap justify-between items-center">
						<JatButton
							onPress={() => {}}
							label="Google"
							iconForLabel={I_GOOGLE}
							fill={false}
							nw="mt-0 w-[49.25%]"
						/>
						<JatButton
							onPress={() => {}}
							label="Github"
							iconForLabel={I_GITHUB}
							fill={false}
							nw="mt-0 w-[49.25%]"
						/>
						<JatButton
							onPress={() => navigation.navigate('SignUp')}
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

export default Login;
