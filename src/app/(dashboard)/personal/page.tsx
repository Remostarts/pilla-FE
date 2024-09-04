import { getServerSession } from 'next-auth';

import PersonalDashboard from '@/components/view/dashboard/personal-dashboard/home';
import { authOptions } from '@/lib/AuthOptions';

export default async function Page() {
  const session = await getServerSession(authOptions);
  console.log(session);
  return <PersonalDashboard />;
}
