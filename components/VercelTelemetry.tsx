'use client';

import {usePathname} from 'next/navigation';
import {Analytics} from '@vercel/analytics/next';
import {SpeedInsights} from '@vercel/speed-insights/next';

export default function VercelTelemetry(){
  const pathname = usePathname();

  // Keep analytics and performance telemetry off admin routes without
  // passing a non-serializable callback through the Analytics component.
  if (pathname?.startsWith('/admin')) return null;

  return <><SpeedInsights/><Analytics/></>;
}
