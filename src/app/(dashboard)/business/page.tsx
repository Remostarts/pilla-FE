import { getServerSession } from 'next-auth';

import { authOptions } from '@/lib/AuthOptions';
import GetStarted from '@/components/view/dashboard/business-dashboard/getStarted/GetStarted';

const BusinessDashboard = async () => {
  const session = await getServerSession(authOptions);
  console.log('🌼 🔥🔥 BusinessDashboard 🔥🔥 session🌼', session);

  return (
    <section>
      <div>
        <GetStarted />
      </div>
    </section>
  );
};

export default BusinessDashboard;
