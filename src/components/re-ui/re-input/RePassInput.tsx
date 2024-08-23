import { motion } from 'framer-motion';
import { CheckCircle2, EyeIcon, EyeOffIcon } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../../ui/form';
import { Input } from '../../ui/input';

type ValidationRule = {
  label: string;
  state: boolean;
};

const PasswordValidator = ({ validationRules }: { validationRules: ValidationRule[] }) => (
  <motion.div
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: 10 }}
    className="dropdown left absolute left-20 z-50 flex flex-col items-start justify-start space-y-2 rounded-lg bg-primary-100 p-3 text-left"
  >
    {validationRules.map(({ label, state }) => (
      <span className="flex-center gap-2" key={Math.random()}>
        {state ? <CheckCircle2 className="text-green-500" /> : <CheckCircle2 />}
        {label}
      </span>
    ))}
  </motion.div>
);

const RePassInput = ({
  isValidationDrop = false,
  name = 'password',
  disabled = false,
}: {
  isValidationDrop?: boolean;
  name?: string;
  disabled?: boolean;
}) => {
  const { control, watch } = useFormContext();
  const [showPassword, setShowPassword] = useState(false);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [validationState, setValidationState] = useState({
    lower: false,
    upper: false,
    number: false,
    special: false,
    length: false,
  });

  const { length, lower, number, special, upper } = validationState;
  const validationRules: ValidationRule[] = [
    {
      label: 'At least one lowercase letter',
      state: lower,
    },
    {
      label: 'At least one uppercase letter',
      state: upper,
    },
    { label: 'At least one number', state: number },
    {
      label: 'At least one special character',
      state: special,
    },
    { label: 'At least 6 characters', state: length },
  ];

  useEffect(() => {
    const validationRules = [
      { regex: /(?=.*[a-z])/, stateKey: 'lower' },
      { regex: /(?=.*[A-Z])/, stateKey: 'upper' },
      { regex: /(?=.*[0-9])/, stateKey: 'number' },
      { regex: /(?=.*[!@#$%^&*])/, stateKey: 'special' },
      { regex: /(?=.{6,})/, stateKey: 'length' },
    ];

    const subscription = watch((value) => {
      setValidationState((prevState) => {
        const updatedState = { ...prevState };
        validationRules.forEach(({ regex, stateKey }) => {
          updatedState[stateKey as keyof typeof prevState] = regex.test(value.password);
        });
        return updatedState;
      });
    });
    const allValidationsPassed = validationRules.every(
      ({ stateKey }) => validationState[stateKey as keyof typeof validationState]
    );
    if (allValidationsPassed) {
      setIsInputFocused(false);
    }

    return () => subscription.unsubscribe();
  }, [watch, validationState]);

  return (
    <div>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="relative">
            <FormLabel>{name}</FormLabel>
            <FormControl>
              <div className="flex-center gap-2 rounded border border-gray-400 px-2 focus-visible:ring-2  focus-visible:ring-offset-2">
                {/* <Lock /> */}
                <Input
                  className="border-none px-0   focus-visible:ring-0  focus-visible:ring-offset-0"
                  placeholder="password"
                  autoComplete="off"
                  disabled={disabled}
                  onFocus={() => setIsInputFocused(true)}
                  type={showPassword ? 'text' : 'password'}
                  {...field}
                  onBlur={() => setIsInputFocused(false)}
                />
                {showPassword ? (
                  <EyeIcon className="select-none" onClick={() => setShowPassword(false)} />
                ) : (
                  <EyeOffIcon className="select-none" onClick={() => setShowPassword(true)} />
                )}
              </div>
            </FormControl>
            {/* <FormDescription>this is password</FormDescription> */}
            {isValidationDrop && isInputFocused && (
              <PasswordValidator validationRules={validationRules} />
            )}
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default RePassInput;
