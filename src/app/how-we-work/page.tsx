import type { Metadata } from 'next';
import HowWeWorkView from '../../components/views/HowWeWorkView';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'How We Work',
  description: 'Understand, identify, connect, develop, coordinate: the five stages of how ZARVADIY supports sourcing, introductions and commercial coordination.',
  path: '/how-we-work',
});

export default function Page() {
  return <HowWeWorkView />;
}
