import type { Metadata } from 'next';
import { Suspense } from 'react';
import ContactView from '../../components/views/ContactView';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Contact & Request a Quote',
  description:
    'Send a request to ZARVADIY: tell us the product or service, quantity and destination, and we will come back with the next steps.',
  path: '/contact',
});

export default function Page() {
  return (
    <Suspense fallback={null}>
      <ContactView />
    </Suspense>
  );
}
