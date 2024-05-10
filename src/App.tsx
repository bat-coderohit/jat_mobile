/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

if (__DEV__) {
	require('./debug/Reactotron');
}

import { AuthProvider } from '@contexts/AuthContext';
import { LoadingProvider } from '@contexts/LoaderContext';
import { queryClient } from '@debug/QueryClient';
import RootComponent from '@navigation/Root';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

function App(): React.JSX.Element {
	return (
		<QueryClientProvider client={queryClient}>
			<AuthProvider>
				<LoadingProvider>
					<RootComponent />
				</LoadingProvider>
			</AuthProvider>
		</QueryClientProvider>
	);
}

export default App;
