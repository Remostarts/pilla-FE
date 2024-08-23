import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useSearchParamsHandler } from '@/hooks/useSearchParamsHandler';
import {
  PersonalSignUpFormData,
  personalSignUpSchema,
} from '@/lib/validations/userAuth.validations';
import { cn } from '@/lib/utils';

export default function FillDetails() {
  const handleProceed = useSearchParamsHandler();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PersonalSignUpFormData>({
    resolver: zodResolver(personalSignUpSchema),
  });

  const onSubmit = (data: PersonalSignUpFormData) => {
    console.log(data);
    handleProceed('step', '2');
  };

  return (
    <div>
      <h1 className="mb-2 font-spaceGrotesk text-xl font-bold md:text-2xl">Personal Information</h1>
      <p className="mb-6 font-inter text-sm text-gray-600">
        Provide your personal information as it appears on your bank verification documents.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="firstName"
            className="mb-2 block font-spaceGrotesk font-medium text-gray-700"
          >
            First Name
          </label>
          <Input
            {...register('firstName')}
            className={cn({ 'border-primary-800': errors.firstName })}
          />
          {errors.firstName && <p className="mt-1 text-primary-800">{errors.firstName.message}</p>}
        </div>

        <div className="mb-4">
          <label
            htmlFor="middleName"
            className="mb-2 block font-spaceGrotesk font-medium text-gray-700"
          >
            Middle Name
          </label>
          <Input
            {...register('middleName')}
            className={cn({ 'border-primary-800': errors.middleName })}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="lastName"
            className="mb-2 block font-spaceGrotesk font-medium text-gray-700"
          >
            Last Name
          </label>
          <Input
            {...register('lastName')}
            className={cn({ 'border-primary-800': errors.lastName })}
          />
          {errors.lastName && <p className="mt-1 text-primary-800">{errors.lastName.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="mb-2 block font-spaceGrotesk font-medium text-gray-700">
            Email Address
          </label>
          <Input {...register('email')} className={cn({ 'border-primary-800': errors.email })} />
          {errors.email && <p className="mt-1 text-primary-800">{errors.email.message}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="mb-2 block font-spaceGrotesk font-medium text-gray-700">
            Phone Number
          </label>
          <div className="mt-1 flex rounded-md shadow-sm">
            <Input {...register('phone')} className={cn({ 'border-primary-800': errors.phone })} />
          </div>
          {errors.phone && <p className="mt-1 text-primary-800">{errors.phone.message}</p>}
        </div>

        <div className="mb-8">
          <label
            htmlFor="referralCode"
            className="mb-2 block font-spaceGrotesk font-medium text-gray-700"
          >
            Referral Code (optional)
          </label>
          <Input
            {...register('referralCode')}
            className={cn({ 'border-primary-800': errors.referralCode })}
          />
        </div>

        <div className="mb-10 font-inter text-sm text-gray-600">
          By continuing, you are agreeing to our terms of service, privacy policy and e-sign.
        </div>

        <Button
          type="submit"
          className={`w-full rounded-full bg-primary-500 py-6 font-inter font-semibold text-white sm:py-7 sm:text-lg`}
        >
          Proceed
        </Button>
      </form>
    </div>
  );
}
