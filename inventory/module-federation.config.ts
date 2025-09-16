import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'inventory',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
