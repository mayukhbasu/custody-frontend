import React, { useEffect, useState } from 'react';

const remotes: Record<string, () => Promise<{ default: React.ComponentType<any> }>> = {
  issue: () => import('issue/Module'),
  user: () => import('user/Module'),
  sla: () => import('sla/Module'),
  notification: () => import('notification/Module'),
  audit: () => import('audit/Module'),
  reconciliation: () => import('reconciliation/Module'),
  corporateaction: () => import('corporateaction/Module'),
  analytics: () => import('analytics/Module'),
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
