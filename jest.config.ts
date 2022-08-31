import { getJestProjects } from '@nrwl/jest';

export default {
  projects: getJestProjects(),
  preset: 'ts-jest',
  roots: [
    '<rootDir>'
  ],
  modulePaths: [
    '<rootDir>'
  ],
  experimentalDecorators: true
};
