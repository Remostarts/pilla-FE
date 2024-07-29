import { MailIcon } from 'lucide-react';

import { ReButton } from '@/components/re-ui/ReButton';
import ReForm from '@/components/re-ui/ReForm';
import ReInput from '@/components/re-ui/re-input/ReInput';
import { incrementFormStep, setFormStep } from '@/redux/features/auth/signinStepSlices';
import { useAppDispatch } from '@/redux/hooks';

const ForgetPassForm = () => {
  const dispatch = useAppDispatch();
  const onSubmit = async () => {
    dispatch(incrementFormStep());
    console.log('');
  };
  return (
    <div className=" flex flex-col  ">
      <ReForm submitHandler={onSubmit}>
        <ReInput
          name="email"
          type="email"
          description="this is a input description"
          label="email"
          prefix={<MailIcon />}
        />
        <div className="grid place-items-center">
          <ReButton type="submit">Submit</ReButton>
        </div>
      </ReForm>
      <div className="grid place-self-end">
        <ReButton
          onClick={() => {
            dispatch(setFormStep(0));
          }}
        >
          Back to login
        </ReButton>
      </div>
    </div>
  );
};

export default ForgetPassForm;
