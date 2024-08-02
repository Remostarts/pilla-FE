import Banner from '@/components/view/common/home/Banner';
import BusinessAccount from '@/components/view/common/home/BusinessAccount';
import Download from '@/components/view/common/home/Download';
import Solutions from '@/components/view/common/home/Solutions';
import Welcome from '@/components/view/common/home/Welcome';

export default function page() {
  return (
    <div>
      <Banner />
      <Welcome />
      <Solutions />
      <Download />
      <BusinessAccount />
    </div>
  );
}
