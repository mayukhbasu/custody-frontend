import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'reconciliation',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
