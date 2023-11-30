import { lazy } from 'react';
// @ts-ignore
// eslint-disable-next-line no-promise-executor-return
export const MainPageAsync = lazy(() => new Promise((resolve) => setTimeout(() => resolve(import('./MainPage')), 1500)));
