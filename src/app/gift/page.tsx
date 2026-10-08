import type { Metadata } from 'next';
import { Suspense } from 'react';
import GiftView from '../../components/views/GiftView';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Uzbekistan Gift Collection',
  description:
    'Uzbekistan Gift Collection by ZARVADIY: Origin, Heritage and Signature gift concepts from selected Uzbek producers for corporate clients, partners and international buyers.',
  path: '/gift',
});

export default function Page() {
  return (
    <Suspense fallback={null}>
      <GiftView />
    </Suspense>
  );
}
