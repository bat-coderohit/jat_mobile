import { JatErrorBody } from '@_types/Common';

export class JatError extends Error {
	statusCode: number;
	debugMessage: string;
	displayMessage: string;
	stackTrace: string;
	constructor(message: string, errorBody: JatErrorBody) {
		super(message);

		this.name = 'JatError';
		this.statusCode = errorBody.statusCode;
		this.debugMessage = errorBody.debugMessage || '';
		this.displayMessage = errorBody.displayMessage;
		this.stackTrace = errorBody.stackTrace || '';
	}
}
