import type { Metadata } from 'next';
import HomeView from '../components/views/HomeView';
import { buildMetadata } from '../lib/seo';

export const metadata: Metadata = buildMetadata({
  description:
    'ZARVADIY helps Uzbek producers reach international buyers and supports international companies entering Uzbekistan: market access, sourcing, business introductions and business development.',
  path: '/',
});

export default function Page() {
  return <HomeView />;
}
