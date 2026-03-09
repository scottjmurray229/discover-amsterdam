import type { PackingItem, PackingConfig, GearRecommendation } from './packing-base';

export const AMSTERDAM_ESSENTIALS: PackingItem[] = [
  { id: 'ams-raingear', name: 'Waterproof Jacket (essential)', category: 'destination', description: 'Amsterdam averages 130+ rainy days per year. Rain comes without warning, lasts 10 minutes, then stops. A packable waterproof jacket lives in your bag every single day.', essential: true, amazonSearchFallback: 'packable+waterproof+rain+jacket', affiliatePrice: '$30–60' },
  { id: 'ams-bikeclothes', name: 'Bike-Friendly Clothing', category: 'destination', description: 'You will rent a bike. Everyone does. Loose trousers that can be cuffed or clips to keep pants out of the chain — and nothing too precious that can\'t handle wind and occasional rain.', essential: false, amazonSearchFallback: 'trouser+clips+bike+commute+pants', affiliatePrice: '$8–12' },
  { id: 'ams-layers', name: 'Layering System (year-round)', category: 'destination', description: 'Amsterdam has no strong season — it\'s cool and damp in summer, cold and damp in winter. Layers that can be added or removed through the day are the only reliable system.', essential: true, amazonSearchFallback: 'travel+layers+packable+lightweight', affiliatePrice: '$30–60' },
  { id: 'ams-adapter', name: 'Type C/F Adapter', category: 'destination', description: 'Netherlands uses 230V European standard. American plugs don\'t fit without an adapter.', essential: true, amazonSearchFallback: 'european+travel+adapter+type+c+f', affiliatePrice: '$12–20' },
];

export const AMSTERDAM_GEAR_RECOMMENDATIONS: GearRecommendation[] = [
  { id: 'gr-ams-jacket', name: 'Packable Waterproof Rain Jacket', reason: 'Amsterdam gets 130+ rainy days per year. Rain hits without warning, lasts 10 minutes. A jacket that compresses to nothing means you\'re never stuck in a doorway waiting for it to stop.', amazonSearchFallback: 'packable+waterproof+rain+jacket+compact', affiliatePrice: '~$50' },
  { id: 'gr-ams-shoes', name: 'Comfortable Waterproof Shoes', reason: 'You\'ll bike, walk, and navigate canal bridges in Amsterdam. Wet cobblestones are slippery. Shoes with grip and some water resistance mean you stay comfortable and upright.', amazonSearchFallback: 'waterproof+walking+shoes+comfortable+travel', affiliatePrice: '~$80' },
  { id: 'gr-ams-adapter', name: 'European Type C/F Adapter', reason: 'Netherlands uses 230V European standard. Your American plugs won\'t work without an adapter. A universal European adapter covers every outlet you\'ll encounter.', amazonSearchFallback: 'european+travel+adapter+type+c+f+universal', affiliatePrice: '~$18' },
  { id: 'gr-ams-daypack', name: 'Compact Daypack (15–20L)', reason: 'Bike baskets have limits. Museums, markets, and ferry crossings all require a bag. A compact 15–20L daypack handles everything Amsterdam throws at you without getting in the way on a bike.', amazonSearchFallback: 'compact+daypack+15l+20l+travel', affiliatePrice: '~$35' },
  { id: 'gr-ams-umbrella', name: 'Compact Travel Umbrella (windproof)', reason: 'Amsterdam wind can turn regular umbrellas inside-out in seconds. A windproof compact umbrella survives the canal gusts and tucks into your bag for the next surprise shower.', amazonSearchFallback: 'compact+travel+umbrella+windproof+storm', affiliatePrice: '~$25' },
];

export const AMSTERDAM_CONFIG: PackingConfig = {
  sitePrefix: 'dam',
  destination: 'Amsterdam',
  climate: ['temperate'],
  currency: 'EUR',
  plugType: 'Type C/F',
  plugVoltage: '230V',
  affiliateTag: 'discoverphili-20',
  destinationEssentials: AMSTERDAM_ESSENTIALS,
  gearRecommendations: AMSTERDAM_GEAR_RECOMMENDATIONS,
};

export const SITE_CONFIG = AMSTERDAM_CONFIG;

export const AMSTERDAM_PACKING_FAQS = [
  { question: 'What should I pack for Amsterdam?', answer: 'A waterproof jacket is the single most important item — Amsterdam gets 130+ rainy days per year and rain arrives without warning. Add a European Type C/F adapter, comfortable waterproof walking shoes for wet cobblestones, layers for the cool damp climate, and bike-friendly clothing since you\'ll almost certainly rent a bike.' },
  { question: 'Is Amsterdam rainy? How should I pack?', answer: 'Amsterdam averages over 130 rainy days per year — which sounds terrible but isn\'t. The rain usually lasts 10–20 minutes, then stops. A packable waterproof jacket that fits in your bag is all you need. Skip the large umbrella (canal wind destroys them) and go for a windproof compact one if you must.' },
  { question: 'What power adapter do I need for Amsterdam?', answer: 'Netherlands uses Type C and F plugs at 230V/50Hz. American devices need a European adapter. Most modern phones, laptops, and cameras handle 100–240V — check your device label. A universal European adapter covers all Dutch outlets.' },
  { question: 'Can I buy toiletries in Amsterdam?', answer: 'Yes — Etos and Kruidvat pharmacies are everywhere in Amsterdam, with good selections and reasonable prices. Bring prescription medications and any specialty items. Everything else is easily sourced in the city, including outdoor and travel gear at stores like ANWB and Bever.' },
  { question: 'How many outfits should I pack for Amsterdam?', answer: 'Pack for 5–7 days. Laundromats (wasserette) are available in most neighborhoods for €4–6 per load. Most Airbnbs have washing machines. Amsterdam is smart-casual at most restaurants — you\'ll rarely need formal wear.' },
  { question: 'What should I NOT bring to Amsterdam?', answer: 'A large umbrella (canal winds destroy them instantly — get a windproof compact one). Flip-flops (cobblestones and wet streets are slippery and cold). Your nicest white sneakers (canal city + rain + bikes = splashes). And overpacking in general — bikes have limited cargo and you\'ll be cycling everywhere.' },
];
