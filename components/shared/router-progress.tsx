'use client';
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
import { Suspense } from 'react';

export function RouteProgress() {
  return (
    <Suspense fallback={null}>
      <ProgressBar
        height='4px'
        color='#FF8300'
        options={{ showSpinner: false }}
        shallowRouting
      />
    </Suspense>
  );
}
