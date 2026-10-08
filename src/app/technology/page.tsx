import type { Metadata } from 'next';
import TechnologyView from '../../components/views/TechnologyView';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Telecom & Connectivity — Coming Soon',
  description: 'Telecom and connectivity is a future ZARVADIY direction. We are developing partnerships with international technology manufacturers for the Uzbekistan market.',
  path: '/technology',
});

export default function Page() {
  return <TechnologyView />;
}
