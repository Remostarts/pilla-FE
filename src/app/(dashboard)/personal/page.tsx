import { getServerSession } from 'next-auth';

import PersonalDashboard from '@/components/view/dashboard/personal-dashboard/home';
import { authOptions } from '@/lib/AuthOptions';
import { getVerificationStatus } from '@/lib/actions/personal/verification.action';

export default async function Page() {
  const verificationStatus = await getVerificationStatus();
  console.log('🌼 🔥🔥 Page 🔥🔥 verificationStatus🌼', verificationStatus);

  return <PersonalDashboard verificationStatus={verificationStatus} />;
}
