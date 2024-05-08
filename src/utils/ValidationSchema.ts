import { LoginFormInput } from '@_types/LoginTypes';
import { ZodObject, ZodRawShape, ZodTypeAny, z } from 'zod';

export const LoginValidation: ZodObject<
	ZodRawShape,
	'strip',
	ZodTypeAny,
	LoginFormInput
> = z.object({
	emailAddress: z.string().email('Please enter a valid email'),
	password: z.string().min(6, 'Password must be at least 6 characters'),
});
