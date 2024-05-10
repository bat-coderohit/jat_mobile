import { LoadingContextType } from '@_types/Common';
import React, {
	ReactElement,
	ReactNode,
	createContext,
	useContext,
	useState,
} from 'react';

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

const useLoading = (): LoadingContextType => {
	const context = useContext(LoadingContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within a LoadingProvider');
	}
	return context;
};

const LoadingProvider = (props: { children: ReactNode }): ReactElement => {
	const [isLoading, setLoading] = useState<boolean>(false);

	// TODO: Implement useMemo before passing to Provider
	return (
		<LoadingContext.Provider value={{ isLoading, setLoading }} {...props} />
	);
};

export { LoadingProvider, useLoading };
