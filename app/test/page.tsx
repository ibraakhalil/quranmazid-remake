import AboutCard from '@/components/test2/AboutCard';
import BlogCard from '@/components/test2/BlogCard';
import ClientsideRender from '@/components/test2/clientside-render';
import PricingCard from '@/components/test2/PriceCard';
import PriceCard from '@/components/test2/PriceCard2';
import RemoteControlCard from '@/components/test2/RemoteControllerCard';
import Tabs from '@/components/test2/Tabs';
import TakeControl from '@/components/test2/TakeControl';

const page = () => {
  return (
    <div className="flex w-full items-center justify-center bg-gray-200">
      {/* <BlogCard /> */}
      <ClientsideRender />
    </div>
  );
};

export default page;
