import type { Metadata } from 'next';
import FoodGiftView from '../../components/views/FoodGiftView';
import { buildMetadata } from '../../lib/seo';

export const metadata: Metadata = buildMetadata({
  title: 'Uzbek Dried Fruits & Nuts',
  description: 'Raisins, prunes, dried apricots and nuts from Uzbekistan for wholesale buyers, with current export figures and sourcing support from ZARVADIY.',
  path: '/food-gift',
});

export default function Page() {
  return <FoodGiftView />;
}
