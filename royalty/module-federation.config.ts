import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'royalty',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
