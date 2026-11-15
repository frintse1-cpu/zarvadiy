import type { Metadata } from 'next';
import FoodGiftView from '../../components/views/FoodGiftView';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Uzbek Dried Fruits & Nuts',
  description: 'Dried fruits and nuts from selected Uzbek producers, available in bulk and private-label formats, plus the Uzbekistan Gift Collection: Origin, Heritage and Signature.',
  path: '/food-gift',
});

export default function Page() {
  return <FoodGiftView />;
}
