import React from 'react';

const remotes: Record<string, () => Promise<{ default: React.ComponentType<any> }>> = {
  user: () => import('user/Module'),
  sla: () => import('sla/Module'),
  notification: () => import('notification/Module'),
  audit: () => import('audit/Module'),
  reconciliation: () => import('reconciliation/Module'),
  corporateaction: () => import('corporateaction/Module'),
  analytics: () => import('analytics/Module'),
};

const RemoteWrapper = ({ name }: { name: string }) => {
  const Component = React.lazy(remotes[name]);
  return <Component />;
};

export default RemoteWrapper;
