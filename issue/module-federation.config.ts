import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'issue',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
