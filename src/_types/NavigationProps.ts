import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
	Home: undefined;
	Login: undefined;
};

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, 'Home'>;
type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;

export type { RootStackParamList, HomeScreenProps, LoginScreenProps };
