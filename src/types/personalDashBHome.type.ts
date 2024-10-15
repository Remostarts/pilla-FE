export type ActionsBtnDataType = {
  id: number;
  window: string;
  actionName: string;
  actionImg: string;
};

export type ActionsNeededDataType = {
  id: number;
  window: string;
  actionName: string;
  isVerified: boolean;
};

export type NigeriaStateType = {
  value: string;
  label: string;
};

export type SavingsPlanDataType = {
  id: number;
  heading: string;
  subHeading: string;
  img: string;
  window: string;
};

export type PinType = {
  pin: string;
  confirmPin: string;
};

export type DashboardResponseType = {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    userVerification: boolean;
    bankVerification: boolean;
    identityVerification: boolean;
    proofOfAddress: boolean;
    nextOfKin: boolean;
    transactionPin: boolean;
    availableBalance: number;
    rentFinance: number;
    pillaSavings: number;
  };
};
