import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { PasswordFormData, passwordSchema } from '@/lib/validations/userAuth.validations';
import { cn } from '@/lib/utils';

export default function CreatePassword() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<PasswordFormData>({
    resolver: zodResolver(passwordSchema),
  });

  const onSubmit = (data: PasswordFormData) => {
    console.log(data);
    router.push('/sign-up/done');
  };

  return (
    <div>
      <h1 className="mb-2 font-spaceGrotesk text-xl font-bold md:text-2xl">Create Password</h1>
      <p className="mb-6 font-inter text-sm text-gray-600">
        Create strong and easy to remember password.
      </p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="mb-2 block font-spaceGrotesk font-medium text-gray-700"
          >
            Password
          </label>
          <Input
            {...register('password')}
            type="password"
            className={cn({ 'border-red-500': errors.password })}
          />
          {errors.password && <p className="mt-1 text-red-500">{errors.password.message}</p>}
        </div>

        <div className="mb-6">
          <label
            htmlFor="confirmPassword"
            className="mb-2 block font-spaceGrotesk font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <Input
            {...register('confirmPassword')}
            type="password"
            className={cn({ 'border-red-500': errors.confirmPassword })}
          />
          {errors.confirmPassword && (
            <p className="mt-1 text-red-500">{errors.confirmPassword.message}</p>
          )}
        </div>

        <div className="mb-10 flex flex-col font-inter text-sm text-gray-600">
          <span>* Password must be at least 8 characters long.</span>
          <span>* Password must contain at least one upper case.</span>
          <span>* Password must contain at least one lower case.</span>
          <span>* Password must contain at least one number or special character.</span>
        </div>

        <Button
          type="submit"
          disabled={!isDirty}
          className={`w-full rounded-full bg-primary-500 py-6 font-inter font-semibold text-white sm:py-7 sm:text-lg`}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}
