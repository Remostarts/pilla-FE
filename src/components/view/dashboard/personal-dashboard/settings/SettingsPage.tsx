import SettingsContent from './SettingsContent';
import SideNavigation from './SideNavigation';

export default function SettingsPage() {
  return (
    <div className="grid size-full grid-cols-2 gap-6">
      <SideNavigation />
      <SettingsContent />
    </div>
  );
}
