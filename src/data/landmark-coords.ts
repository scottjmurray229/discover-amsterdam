// Popular Amsterdam POI coordinates for itinerary geocoding.
// Used by generate-itinerary.ts to resolve activity coordinates without Geocoding API calls.

export const LANDMARK_COORDS: Record<string, { lat: number; lng: number }> = {
  // -- Centrum --
  'dam square': { lat: 52.3731, lng: 4.8932 },
  'royal palace amsterdam': { lat: 52.3732, lng: 4.8913 },
  'nieuwe kerk': { lat: 52.3738, lng: 4.8920 },
  'central station': { lat: 52.3791, lng: 4.9003 },
  'begijnhof': { lat: 52.3690, lng: 4.8894 },

  // -- Jordaan & Canal Ring --
  'anne frank house': { lat: 52.3752, lng: 4.8840 },
  'westerkerk': { lat: 52.3745, lng: 4.8831 },
  'nine streets': { lat: 52.3700, lng: 4.8850 },
  'noordermarkt': { lat: 52.3797, lng: 4.8862 },
  'prinsengracht': { lat: 52.3700, lng: 4.8830 },

  // -- Museum Quarter --
  'rijksmuseum': { lat: 52.3600, lng: 4.8852 },
  'van gogh museum': { lat: 52.3584, lng: 4.8811 },
  'stedelijk museum': { lat: 52.3580, lng: 4.8798 },
  'concertgebouw': { lat: 52.3563, lng: 4.8790 },
  'museumplein': { lat: 52.3580, lng: 4.8830 },

  // -- De Pijp --
  'albert cuyp market': { lat: 52.3555, lng: 4.8933 },
  'heineken experience': { lat: 52.3579, lng: 4.8919 },
  'sarphatipark': { lat: 52.3528, lng: 4.8925 },

  // -- Plantage & East --
  'artis zoo': { lat: 52.3662, lng: 4.9162 },
  'hortus botanicus': { lat: 52.3668, lng: 4.9082 },
  'jewish historical museum': { lat: 52.3657, lng: 4.9020 },
  'nemo science museum': { lat: 52.3742, lng: 4.9123 },
  'tropenmuseum': { lat: 52.3627, lng: 4.9222 },

  // -- North --
  'a dam lookout': { lat: 52.3842, lng: 4.9020 },
  'eye film museum': { lat: 52.3843, lng: 4.9006 },
  'ndsm wharf': { lat: 52.4009, lng: 4.8945 },

  // -- Vondelpark --
  'vondelpark': { lat: 52.3579, lng: 4.8686 },

  // -- Red Light District --
  'oude kerk': { lat: 52.3744, lng: 4.8985 },
  'museum ons lieve heer op solder': { lat: 52.3757, lng: 4.9003 },

  // -- Day Trips --
  'haarlem grote markt': { lat: 52.3814, lng: 4.6360 },
  'frans hals museum': { lat: 52.3791, lng: 4.6379 },
  'zaanse schans windmills': { lat: 52.4735, lng: 4.8174 },
  'keukenhof gardens': { lat: 52.2697, lng: 4.5462 },
};
