import { JatContextType, SnackBarMessage, UserProfile } from '@_types/Common';
import * as StorageUtils from '@utils/StorageUtils';
import React, {
	ReactElement,
	ReactNode,
	createContext,
	useContext,
	useEffect,
	useState,
} from 'react';

const INITIAL_PROFILE: UserProfile = {
	auth: {
		user_name: '',
	},
	isSignedIn: false,
};

const JatContext = createContext<JatContextType | undefined>(undefined);

const useJatContext = (): JatContextType => {
	const context = useContext(JatContext);
	if (context === undefined) {
		throw new Error('useJatContext must be used within a LoadingProvider');
	}
	return context;
};

const JatContextProvider = (props: { children: ReactNode }): ReactElement => {
	const [isLoading, setLoading] = useState<boolean>(false);
	const [message, setMessage] = useState<SnackBarMessage>({
		message: '',
		type: 'info',
	});

	const [profile, setProfile] = useState<UserProfile>(INITIAL_PROFILE);

	// To load data from ASyncStorage upon application load
	useEffect(() => {
		// TODO: Reduce number of times called
		StorageUtils.loadData('user_profile').then((data: string | null) => {
			if (data != null) {
				console.log('ASD', data);
				let profileData: UserProfile = JSON.parse(data);
				setProfile(profileData);
			}
		});
	}, []);

	// To update data in ASyncStorage
	useEffect(() => {
		StorageUtils.saveData('user_profile', profile);
	}, [profile]);

	// TODO: Implement useMemo before passing to Provider
	return (
		<JatContext.Provider
			value={{
				isLoading,
				message,
				profile,
				setMessage,
				setLoading,
				setProfile,
			}}
			{...props}
		/>
	);
};

export { JatContextProvider, useJatContext };
