import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/AuthOptions';

const BusinessDashboard = async () => {
  const session = await getServerSession(authOptions);
  console.log('🌼 🔥🔥 BusinessDashboard 🔥🔥 session🌼', session);

  return <div>BusinessDashboard</div>;
};

export default BusinessDashboard;
