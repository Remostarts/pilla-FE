import { ReButton } from '@/components/re-ui/ReButton';
import { setFormStep } from '@/redux/features/auth/signinStepSlices';
import { useAppDispatch } from '@/redux/hooks';

const ConfirmationButtons = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <ReButton
        onClick={() => {
          dispatch(setFormStep(1));
        }}
      >
        Retry
      </ReButton>
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

export default ConfirmationButtons;
