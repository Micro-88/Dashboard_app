<<<<<<< HEAD
import SideNav from '../ui/dashboard/sidenav';

=======
import SideNav from '@/app/ui/dashboard/sidenav';
 
>>>>>>> origin/main
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
<<<<<<< HEAD
      <div className="flex-grow p-6 md:overflow-auto md:p-12">{children}</div>
    </div>
  );
}
=======
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
>>>>>>> origin/main
