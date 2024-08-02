import StoreProvider from '@/store/StoreProvider';
import Header from '@/components/home/Header';
import LeftSidebar from '@/components/common/left-sidebar';
import RightSidebar from '@/components/common/right-sidebar';

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex w-full">
      <div className="sticky top-0 h-screen min-w-[60px] bg-red-500" />
      <div className="w-full">
        <Header />
        <div className="grid w-full grid-cols-[300px,1fr,300px] max-xl:grid-cols-[300px,1fr]">
          <LeftSidebar />
          <div className="overflow-hidden">{children}</div>
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
