import { ReBreadcrumb } from '@/components/re-ui/ReBreadcrumb';

export default function dashBoardHome() {
  const base = 'dashboard';
  return (
    <div className="">
      <ReBreadcrumb
        items={[
          { label: `${base}`, link: `/${base}` },
          { label: 'academic', link: `/${base}/academic` },
          { label: 'department', link: `/${base}/academic/department` },
        ]}
      />
      dashBoardHome
    </div>
  );
}
