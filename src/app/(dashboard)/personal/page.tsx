import PersonalDashboard from '@/components/view/dashboard/personal-dashboard/home';
import { getPersonalDashboardData } from '@/lib/actions/personal/verification.action';
import { DashboardResponseType } from '@/types/personalDashBHome.type';

export default async function Page() {
  const personalDashboardResponse: DashboardResponseType = await getPersonalDashboardData();

  return <PersonalDashboard personalData={personalDashboardResponse} />;
}
