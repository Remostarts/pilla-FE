import Navbar from '@/components/view/shared/navbars/navbar/Navbar';
import { TChildrenProps } from '@/types';

export default function Layout({ children }: TChildrenProps) {
  return (
    <div className="mx-auto max-w-8xl">
      <Navbar />
      <main>
        <section>{children}</section>
      </main>
    </div>
  );
}
