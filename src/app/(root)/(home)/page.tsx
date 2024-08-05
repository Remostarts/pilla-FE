import Banner from '@/components/view/common/home/Banner';
import BusinessAccount from '@/components/view/common/home/BusinessAccount';
import Download from '@/components/view/common/home/Download';
import Solutions from '@/components/view/common/home/Solutions';
import Sponsor from '@/components/view/common/home/Sponsor';
import Welcome from '@/components/view/common/home/Welcome';

export const metadata = {
  title: 'Home',
};

export default function page() {
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
