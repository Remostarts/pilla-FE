import { baseApi } from './api/baseApi';
import signinFormStepReducer from './features/auth/signinStepSlices';
import otpCounterReducer from './features/otpVerify/otpCounterSlice';
import otpTimerReducer from './features/otpVerify/otpTimerSlice';
import completedStepsReducer from './features/shared/StepperSlices';
import formReducer from './businessConstructionFinanceForm/formSlice';

export const reducer = {
  form: formReducer,
  otpTimer: otpTimerReducer,
  otpCounter: otpCounterReducer,
  steps: completedStepsReducer,
  signinFormStep: signinFormStepReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
