import * as path from 'path';
import type {Config} from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  name: 'tests',
  rootDir: path.join(__dirname, 'dist'),
};
export default config;
