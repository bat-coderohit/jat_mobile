import Reactotron from 'reactotron-react-native';
import {
	QueryClientManager,
	reactotronReactQuery,
} from 'reactotron-react-query';
import { queryClient } from './QueryClient';

const queryClientManager = new QueryClientManager({
	// @ts-ignore
	queryClient,
});

Reactotron.use(reactotronReactQuery(queryClientManager))
	.configure({
		name: 'JAT Mobile Debug',
		onDisconnect: () => {
			queryClientManager.unsubscribe();
		},
	})
	.useReactNative({
		asyncStorage: false, // there are more options to the async storage.
		networking: {
			// optionally, you can turn it off with false.
			ignoreUrls: /symbolicate/,
		},
		editor: false, // there are more options to editor
		errors: { veto: stackFrame => false }, // or turn it off with false
		overlay: false, // just turning off overlay
	})
	.connect();
