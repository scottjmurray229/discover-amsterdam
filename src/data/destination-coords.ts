// Shared destination coordinates — single source of truth
// Used by plan page + companion app + generate-itinerary API.

export const DESTINATION_COORDS: Record<string, { lat: number; lng: number; label: string }> = {
  centrum: { lat: 52.3731, lng: 4.8922, label: 'Centrum' },
  jordaan: { lat: 52.3752, lng: 4.8815, label: 'Jordaan' },
  'de-pijp': { lat: 52.3536, lng: 4.8935, label: 'De Pijp' },
  'museum-quarter': { lat: 52.3580, lng: 4.8788, label: 'Museum Quarter' },
  'amsterdam-north': { lat: 52.3906, lng: 4.9230, label: 'Amsterdam North' },
  'vondelpark-area': { lat: 52.3579, lng: 4.8686, label: 'Vondelpark Area' },
  'red-light-district': { lat: 52.3743, lng: 4.8985, label: 'Red Light District' },
  plantage: { lat: 52.3663, lng: 4.9120, label: 'Plantage' },
  haarlem: { lat: 52.3874, lng: 4.6462, label: 'Haarlem' },
  'zaanse-schans': { lat: 52.4735, lng: 4.8174, label: 'Zaanse Schans' },
  keukenhof: { lat: 52.2697, lng: 4.5462, label: 'Keukenhof' },
};
