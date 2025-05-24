import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'analytics',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
