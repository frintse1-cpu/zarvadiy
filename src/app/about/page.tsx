import type { Metadata } from 'next';
import AboutView from '../../components/views/AboutView';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'About ZARVADIY',
  description: 'ZARVADIY is an Uzbekistan-based B2B market access and business development company connecting Uzbek producers with international buyers and supporting companies entering Uzbekistan.',
  path: '/about',
});

export default function Page() {
  return <AboutView />;
}
