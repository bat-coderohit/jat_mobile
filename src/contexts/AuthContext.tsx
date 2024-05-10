import { AuthContextType, LoginResponse } from '@_types/LoginTypes';
import React, {
	ReactElement,
	ReactNode,
	createContext,
	useContext,
	useState,
} from 'react';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const useAuth = (): AuthContextType => {
	const context = useContext(AuthContext);
	if (context === undefined) {
		throw new Error('useAuth must be used within a AuthProvider');
	}
	return context;
};

const AuthProvider = (props: { children: ReactNode }): ReactElement => {
	const [user, setUser] = useState<LoginResponse | null>(null);
	return <AuthContext.Provider value={{ user, setUser }} {...props} />;
};

export { AuthProvider, useAuth };
