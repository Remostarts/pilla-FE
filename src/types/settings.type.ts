export type UserInfoResponse = {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    id: string;
    firstName: string;
    middleName: string | null;
    lastName: string;
    email: string;
    phone: string | null;
    profile: any | null;
  };
};

export type ChangePasswordType = {
  currentPassword: string;
  newPassword: string;
  confirmPassword: string;
};
