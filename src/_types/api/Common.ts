type MessageResponse = {
	message: string;
};

type JatErrorResponseData = {
	// {"error": "Unauthorized", "message": "Unauthorized", "path": "/auth/sign-in", "status": 401, "timestamp": "2024-07-01T18:36:27.068+00:00"}
	error: string;
	message: string;
	path: string;
	status: number;
	timestamp: string;
};

export type { MessageResponse, JatErrorResponseData };
