import { composePlugins, withNx, ModuleFederationConfig } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';

import baseConfig from './module-federation.config';

const config: ModuleFederationConfig = {
  ...baseConfig,
  remotes: [
       ['analytics', 'http://localhost:4207'],
       ['audit', 'http://localhost:4204'],
     ]
};

// Nx plugins for webpack to build config object from Nx options and context.
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config),
  (config: any) => {
    config.devServer = {
      ...config.devServer,
      hot: false, // ✅ disables HMR
      liveReload: true, // ✅ still reloads on save
    };
    return config;
  }
);
