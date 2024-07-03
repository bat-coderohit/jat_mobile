import { ProfileScreenProps } from '@_types/NavigationProps';
import { JatText } from '@components/JatText';
import React from 'react';
import { Pressable, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native';
import { SvgXml } from 'react-native-svg';
import { I_LOG_OUT } from '@utils/IconsSet';
import { getThemeColor } from '@utils/TailwindProperties';
import { useMutation } from '@tanstack/react-query';
import { useJatContext } from '@contexts/JatContext';
import { signOut } from '@api/Login.api';
import { MessageResponse } from '@_types/api/Common';
import { UserProfile } from '@_types/Common';

const PROFILE_SIZE = 40;
const ICON_WIDTH = 30;

const ProfileScreen: React.FC<ProfileScreenProps> = ({ navigation }) => {
	const { setLoading, setMessage, setProfile } = useJatContext();

	const { mutate: logout } = useMutation({
		mutationFn: signOut,
		onMutate: () => setLoading(true),
		onSuccess: (data: MessageResponse) => {
			if (data !== undefined) {
				setLoading(false);
				setMessage({ message: 'Logout Success', type: 'success' });

				const profileData: UserProfile = {
					auth: {
						user_name: '',
					},
					isSignedIn: false,
				};
				setProfile(profileData);
			}
		},
		onError: (e: Error) => {
			setLoading(false);
			setMessage({ message: e.message, type: 'error' });
			console.log('ISE', e);
		},
	});

	const onLogOut = () => {
		logout();
	};

	return (
		<SafeAreaView className="flex flex-1 flex-col bg-white p-5">
			<KeyboardAwareScrollView className="flex flex-col gap-5">
				<View className="flex flex-row justify-between">
					<View
						className={`w-${PROFILE_SIZE} h-${PROFILE_SIZE} rounded-full overflow-hidden border-2 border-primary justify-center items-center`}
					>
						<Image
							source={require('@assets/images/male_profile.png')}
							className="flex-1"
							resizeMode="contain"
						/>
					</View>
					<Pressable onPress={onLogOut}>
						<SvgXml
							color={getThemeColor('primary')}
							xml={I_LOG_OUT}
							width={ICON_WIDTH}
							height={ICON_WIDTH}
						/>
					</Pressable>
				</View>

				<JatText className="font-semibold text-xl">
					first_name last_name
				</JatText>
				<View className="flex flex-row justify-between w-1/2">
					<JatText>designation</JatText>
					<JatText>. location</JatText>
				</View>
			</KeyboardAwareScrollView>
		</SafeAreaView>
	);
};

export default ProfileScreen;
