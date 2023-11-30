import { lazy } from 'react';
// @ts-ignore
// eslint-disable-next-line no-promise-executor-return
export const AboutPageAsync = lazy(() => new Promise((resolve) => setTimeout(() => resolve(import('./AboutPage')), 1500)));
