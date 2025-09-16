import React, { useEffect, useState } from 'react';

const remotes: Record<string, () => Promise<{ default: React.ComponentType<unknown> }>> = {
  inventory: () => import('inventory/Module'),
  royalty: () => import('royalty/Module'),
  order: () => import('order/Module'),
};

const RemoteWrapper = ({ name }: { name: string }) => {
  const [Component, setComponent] = useState<React.ComponentType | null>(null);

  useEffect(() => {

    remotes[name]()
      .then((mod) => {

        setComponent(() => mod.default);
      })
      .catch((err) => {
        console.error(`❌ Failed to load remote "${name}"`, err);
      });
  }, [name]);

  if (!Component) return <div>Loading {name}...</div>;

  return <Component />;
};

export default RemoteWrapper;
