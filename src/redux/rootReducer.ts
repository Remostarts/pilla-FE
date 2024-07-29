import { baseApi } from './api/baseApi';
import signinFormStepReducer from './features/auth/signinStepSlices';
import otpCounterReducer from './features/optVerify/otpCounterSlice';
import otpTimerReducer from './features/optVerify/otpTimerSlice';
import completedStepsReducer from './features/shared/StepperSlices';

export const reducer = {
  otpTimer: otpTimerReducer,
  otpCounter: otpCounterReducer,
  steps: completedStepsReducer,
  signinFormStep: signinFormStepReducer,
  [baseApi.reducerPath]: baseApi.reducer,
};
