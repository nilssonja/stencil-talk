import { Config } from '@stencil/core';
import { reactOutputTarget } from '@stencil/react-output-target'

export const config: Config = {
  namespace: 'jn-stencil',
  globalScript: 'src/global.ts',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme'
    },
      reactOutputTarget({
        componentCorePackage: 'jn-stencil',
        proxiesFile: '../react-demo-typescript/src/components/components.ts'
      }),
    {
      type: 'www',
      serviceWorker: null // disable service workers
    }
  ]
};
