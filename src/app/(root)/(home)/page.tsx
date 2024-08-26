import { getServerSession } from 'next-auth';

import Banner from '@/components/view/root/home/Banner';
import BusinessAccount from '@/components/view/root/home/BusinessAccount';
import Download from '@/components/view/root/home/Download';
import Solutions from '@/components/view/root/home/Solutions';
import Sponsor from '@/components/view/root/home/Sponsor';
import Welcome from '@/components/view/root/home/Welcome';
import { authOptions } from '@/lib/AuthOptions';

export const metadata = {
  title: 'Home',
};

export default async function HomePage() {
  const session = await getServerSession(authOptions);
  console.log('🌼 🔥🔥 HomePage 🔥🔥 session🌼', session);

  return (
    <div>
      <Banner />
      <Welcome />
      <Solutions />
      <Download />
      <BusinessAccount />
      <Sponsor />
    </div>
  );
}
