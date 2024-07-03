import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
	Login: undefined;
	SignUp: undefined;

	Home: HomeTabParamList;

	Profile: undefined;
};

type HomeTabParamList = {
	JobList: undefined;
	JobAdd: undefined;
	EventsList: undefined;
};

type JobListProps = NativeStackScreenProps<HomeTabParamList, 'JobList'>;
type JobAddProps = NativeStackScreenProps<HomeTabParamList, 'JobAdd'>;
type EventsListProps = NativeStackScreenProps<HomeTabParamList, 'EventsList'>;

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, 'Login'>;
type SignUpScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUp'>;
type ProfileScreenProps = NativeStackScreenProps<RootStackParamList, 'Profile'>;

export type {
	RootStackParamList,
	LoginScreenProps,
	SignUpScreenProps,
	HomeTabParamList,
	ProfileScreenProps,
};
