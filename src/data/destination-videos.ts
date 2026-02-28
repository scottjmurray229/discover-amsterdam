/**
 * Shared video map for destination cards.
 * Maps destination slugs to video file paths (preview preferred, hero as fallback).
 * Used by: src/pages/index.astro, src/pages/destinations/index.astro
 */
export const destinationVideoMap: Record<string, string> = {
  centrum: '/videos/destinations/centrum-preview.mp4',
  jordaan: '/videos/destinations/jordaan-preview.mp4',
  'de-pijp': '/videos/destinations/de-pijp-preview.mp4',
  'museum-quarter': '/videos/destinations/museum-quarter-preview.mp4',
  'amsterdam-north': '/videos/destinations/amsterdam-north-preview.mp4',
  'vondelpark-area': '/videos/destinations/vondelpark-area-preview.mp4',
  'red-light-district': '/videos/destinations/red-light-district-preview.mp4',
  plantage: '/videos/destinations/plantage-preview.mp4',
  haarlem: '/videos/destinations/haarlem-preview.mp4',
  'zaanse-schans': '/videos/destinations/zaanse-schans-preview.mp4',
  keukenhof: '/videos/destinations/keukenhof-preview.mp4',
} as const;
