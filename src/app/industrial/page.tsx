import type { Metadata } from 'next';
import IndustrialView from '../../components/views/IndustrialView';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Industrial Products & HVAC/R',
  description: 'Copper tubes, components and industrial supply from selected manufacturers. ZARVADIY helps international buyers source industrial products and HVAC/R materials from Uzbekistan.',
  path: '/industrial',
});

export default function Page() {
  return <IndustrialView />;
}
