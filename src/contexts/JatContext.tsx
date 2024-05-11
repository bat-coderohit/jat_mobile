import { JatContextType, SnackBarMessage } from '@_types/Common';
import React, {
	ReactElement,
	ReactNode,
	createContext,
	useContext,
	useState,
} from 'react';

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

	// TODO: Implement useMemo before passing to Provider
	return (
		<JatContext.Provider
			value={{ isLoading, setLoading, message, setMessage }}
			{...props}
		/>
	);
};

export { JatContextProvider, useJatContext };
