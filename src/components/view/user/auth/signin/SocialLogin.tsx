import { ReButton } from '@/components/re-ui/ReButton';

const SocialLogin = () => {
  return (
    <div className="flex justify-center gap-3 ">
      <ReButton>Google</ReButton>
      <ReButton>FaceBook</ReButton>
      <ReButton>Instagram</ReButton>
      <ReButton>LinkedIn</ReButton>
    </div>
  );
};

export default SocialLogin;
