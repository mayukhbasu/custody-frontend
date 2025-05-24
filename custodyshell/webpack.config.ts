import { composePlugins, withNx, ModuleFederationConfig } from '@nx/webpack';
import { withReact } from '@nx/react';
import { withModuleFederation } from '@nx/react/module-federation';
import baseConfig from './module-federation.config';

const config: ModuleFederationConfig = {
  ...baseConfig,
   remotes: [
     
   ]
};

// Nx plugins for webpack to build the final config
export default composePlugins(
  withNx(),
  withReact(),
  withModuleFederation(config),

  // 🔧 Optional override to disable HMR if needed
  (config: any) => {
    config.devServer = {
      ...config.devServer,
      hot: false, // Disables Hot Module Reloading
      liveReload: true,
    };
    return config;
  }
);
