import type { Metadata } from 'next';
import FoodGiftView from '../../components/views/FoodGiftView';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Uzbek Dried Fruits & Gift Collections',
  description: 'Dried fruits, nuts and gift collections from selected Uzbek producers, available in bulk and private-label formats. Specifications and certificates available upon request.',
  path: '/food-gift',
});

export default function Page() {
  return <FoodGiftView />;
}
