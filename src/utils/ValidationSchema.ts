import { LoginFormInput, SignUpFormInput } from '@_types/api/LoginTypes';
import { z } from 'zod';
import { getLegalDateOfBirth } from './DateUtil';

const SignInValidation: { [K in keyof LoginFormInput]: any } = {
	emailAddress: z.string().email('Please enter a valid email'),
	password: z.string().min(6, 'Password must be at least 6 characters'),
};

const SignUpValidation: { [K in keyof SignUpFormInput]: any } = {
	emailAddress: z.string().email('Please enter a valid email'),
	password: z.string().min(6, 'Password must be at least 6 characters'),
	contact: z.coerce.string().length(10, 'Contact number has to be 10 digits'),
	dateOfBirth: z.coerce.date().max(getLegalDateOfBirth(), {
		message: 'Age cannot be less than 18 years',
	}),
	firstName: z.string().optional(),
	lastName: z.string().optional(),
};

export const LoginValidation = z.object(SignInValidation);
export const RegisterValidation = z.object(SignUpValidation);
