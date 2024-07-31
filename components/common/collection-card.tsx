import { HTMLAttributes } from 'react';

export const CollectionCard = ({ children, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return <div className="min-w-[250px] rounded-lg border bg-gray-100 p-4">{children}</div>;
};

CollectionCard.Icon = function CollectionIcon({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div {...props} className="mb-4">
      {children}
    </div>
  );
};

CollectionCard.Title = function CollectionTitle({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <h2 {...props} className="text-base font-medium">
      {children}
    </h2>
  );
};

CollectionCard.Subtitle = function CollectionSubtitle({ children, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <p {...props} className="mt-1 text-xs text-gray-600">
      {children}
    </p>
  );
};

export const CollectionCardWrapper = ({ children }: HTMLAttributes<HTMLDivElement>) => {
  return <div className="flex items-center gap-3 overflow-y-auto">{children}</div>;
};
