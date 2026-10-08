/**
 * Media for the /gift page (original photos and videos of the assembled collection).
 *
 * The gallery section is hidden automatically while this list is empty, so the page
 * never shows blank frames. To add media:
 *   1. Put files in /public/gift/  (photos: .jpg/.webp ~1600px wide; videos: .mp4 H.264, under ~15 MB)
 *   2. Add an entry below. Example:
 *        { type: 'image', src: '/gift/origin-box.jpg', alt: 'Origin gift box with dried fruits' },
 *        { type: 'video', src: '/gift/unboxing.mp4', poster: '/gift/unboxing-poster.jpg', alt: 'Unboxing the Signature set' },
 *   3. The first item is shown larger. `alt` is optional (a generic description is used if omitted).
 */
export type GiftMediaItem = {
  type: 'image' | 'video';
  src: string;
  poster?: string;
  alt?: string;
};

export const GIFT_MEDIA: GiftMediaItem[] = [];
