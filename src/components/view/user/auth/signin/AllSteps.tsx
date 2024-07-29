'use client';
import { z } from 'zod';

import { steps } from './SigninConstants';
import MailStep from './check-mail-step/MailStep';
import ForgetPass from './forget-pass-step/ForgetPass';
import { Signin } from './loginStep/Signin';
import ResetMail from './reset-mail-step/ResetMail';

import { ReGlider } from '@/components/re-ui/ReGlider';
import { ReStepper } from '@/components/re-ui/re-stepper/ReStepper';
import { Card } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { userLoginSchema } from '@/lib/validations/userAuth.validations';
import { setFormStep, signinFormStepState } from '@/redux/features/auth/signinStepSlices';
import { useAppSelector } from '@/redux/hooks';

export type TInputs = z.infer<typeof userLoginSchema>;

const AllSteps = () => {
  // const [formStep, setFormStep] = useState(0);
  const formStep = useAppSelector(signinFormStepState);
  const components = [
    {
      component: <Signin />,
    },
    {
      component: (
        <>
          <ForgetPass />
          {/* <RePassInput isValidationDrop /> */}
        </>
      ),
    },
    {
      component: <MailStep />,
    },
    {
      component: <ResetMail />,
    },
  ];

  return (
    <>
      <Card className="min-h-[600px] w-[600px] overflow-x-hidden">
        <div
          className={cn('pt-10', {
            hidden: formStep === 0,
          })}
        >
          <ReStepper currentStep={formStep - 1} setFormStep={setFormStep} steps={steps} />
        </div>

        {components.map((each, index) => (
          <ReGlider key={index} index={index} formStep={formStep}>
            {each.component}
          </ReGlider>
        ))}
      </Card>
    </>
  );
};

export default AllSteps;
