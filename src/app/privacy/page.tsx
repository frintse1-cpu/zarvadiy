import type { Metadata } from 'next';
import PrivacyView from '../../components/views/PrivacyView';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Privacy Policy',
  description: 'How ZARVADIY MChJ (LLC) collects, uses and protects information submitted through this website.',
  path: '/privacy',
});

export default function Page() {
  return <PrivacyView />;
}
