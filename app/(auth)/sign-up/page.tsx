'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import InputField from '@/components/InputField';
import { FieldGroup, FieldSeparator } from '@/components/ui/field';
import { signUpFormData } from '@/types/validation';
import SelectField from '@/components/SelectField';
import { INVESTMENT_GOALS, RISK_TOLERANCE_OPTIONS } from '@/lib/constants';

function SignUp() {
  const form = useForm<SignUpFormData>({
    resolver: zodResolver(signUpFormData),
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      country: '',
      investmentGoals: 'Growth',
      riskTolerance: '',
      preferredIndustry: '',
    },
    mode: 'onBlur',
  });

  const { isSubmitting } = form.formState;

  const onSubmit = async (data: SignUpFormData) => {
    try {
      console.log('Form Data:', data);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <h1> Sign Up & Personalize</h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FieldGroup>
          <InputField
            label="Full Name"
            name="fullName"
            placeholder=""
            type="input"
            control={form.control}
          />
          <InputField
            label="Email"
            name="email"
            type={'email'}
            placeholder="Enter your email"
            control={form.control}
          />
          <InputField
            label="Password"
            name="password"
            placeholder="Enter a strong password"
            type="password"
            control={form.control}
          />
          <InputField
            label="Confirm Password"
            name="confirmPassword"
            placeholder="Confirm your password"
            type="password"
            control={form.control}
          />
          <FieldSeparator />
          <SelectField
            name="riskTolerance"
            label="Risk Tolerance"
            placeholder="Select your risk tolerance"
            control={form.control}
            options={RISK_TOLERANCE_OPTIONS}
          />
          <SelectField
            name="investmentGoals"
            label="Investment Goals"
            placeholder="Select your investment goals"
            control={form.control}
            options={INVESTMENT_GOALS}
          />
        </FieldGroup>
        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn mt-5 w-full"
        >
          {isSubmitting ? 'Submitting...' : 'Start Investing'}
        </Button>
      </form>
    </>
  );
}

export default SignUp;
