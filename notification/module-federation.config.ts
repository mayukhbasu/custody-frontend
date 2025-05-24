import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'notification',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
