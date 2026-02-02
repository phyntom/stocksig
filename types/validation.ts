import * as z from 'zod';

export const signUpFormData = z
  .object({
    fullName: z.string().min(1, 'Full name is required.'),
    email: z.string().email('Invalid email address.'),
    password: z.string().min(8, 'Password must be at least 8 characters.'),
    confirmPassword: z.string().min(8, 'Please confirm your password.'),
    country: z.string().min(1, 'Country is required.'),
    investmentGoals: z.string(),
    riskTolerance: z.string(),
    preferredIndustry: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match.',
    path: ['confirmPassword'],
  });
