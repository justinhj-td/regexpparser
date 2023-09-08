const esbuild = require('esbuild');
const ts = require('typescript');

esbuild.build({
  entryPoints: ['./src/index.ts'],
  bundle: true,
  outfile: './dist/bundle.js',
  format: 'esm',
  platform: 'node',
  target: 'esnext',
  loader: {
    '.ts': 'ts'
  },
}).catch(() => process.exit(1));
