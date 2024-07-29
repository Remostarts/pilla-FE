import Otp from '@/components/view/shared/otp/Otp';

const OtpStep = () => {
  return (
    <div className="shadow-custom-reset-password mx-auto  rounded-md px-4 py-8 300:px-8 400:max-w-md 400:px-14 sm:px-14">
      <h4 className="mb-3 text-center text-lg font-semibold">Email Verification Code</h4>
      <p className="mb-10 text-center">
        We have sent an OTP code to your registered email. Please check your email.
      </p>
      <Otp />
    </div>
  );
};

export { OtpStep };
