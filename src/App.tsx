/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

if (__DEV__) {
	require('./debug/Reactotron');
}

import { queryClient } from '@debug/QueryClient';
import RootNavigation from '@navigation/RootNavigation';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

function App(): React.JSX.Element {
	return (
		<QueryClientProvider client={queryClient}>
			<RootNavigation />
		</QueryClientProvider>
	);
}

export default App;
