import { ReButton } from '@/components/re-ui/ReButton';
import { setFormStep } from '@/redux/features/auth/signinStepSlices';
import { useAppDispatch } from '@/redux/hooks';

const ResendMail = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <ReButton onClick={() => {}}>Check Mail</ReButton>
      <ReButton onClick={() => {}}>Resend Mail</ReButton>
      <ReButton
        onClick={() => {
          dispatch(setFormStep(0));
        }}
      >
        Back to login
      </ReButton>
    </div>
  );
};

export default ResendMail;
