import Banner from '@/components/view/root/home/Banner';
import BusinessAccount from '@/components/view/root/home/BusinessAccount';
import Download from '@/components/view/root/home/Download';
import Solutions from '@/components/view/root/home/Solutions';
import Sponsor from '@/components/view/root/home/Sponsor';
import Welcome from '@/components/view/root/home/Welcome';

export const metadata = {
  title: 'Home',
};

export default function Page() {
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
